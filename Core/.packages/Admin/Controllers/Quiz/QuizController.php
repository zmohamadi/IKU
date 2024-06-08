<?php
namespace Admin\Controllers\Quiz;

use Admin\Controllers\Public\BaseAbstract;
use Illuminate\Http\Request;
use Models\Edu\Quiz\Answer;
use Models\Edu\Quiz\Attemp;
use Models\Person\User;
use Publics\Resources\QuizResource;
use Publics\Resources\AttempResource;
use Admin\Events\UpdateScore;
use \Carbon\Carbon;
use Models\Edu\Quiz\Question;
use Models\Edu\Quiz\Option;
use Admin\Events\Quiz\CorrectedCount;
use Admin\Events\Quiz\Score;
use Admin\Events\StudentScore;
use Admin\Events\LessonScore;

class QuizController extends BaseAbstract{

    protected $model = "Models\Edu\Quiz\Quiz";
    protected $request = "Publics\Requests\Quiz\QuizRequest";
    protected $with = ['creator', 'activeStatus'];
    protected $showWith = ['creator', 'activeStatus',"questions.questionOptions"];
    protected $needles = ['Base\QuestionType','Person\Timezone'];
    protected $searchFilter = ["title"];
    protected $increment = ["quiz"];
    protected $decrement = ["quiz"];

    protected $reply_status = ""; // before_time, after_time, reply_time
    protected $reply_message = "";
    protected $quiz;


    public function list($lesson){
        $collection = $this->model::with("activeStatus","creator")->where('lesson_id',$lesson);
        $callback = function ($result) {
            foreach ($result as $value) {
                $now = \Carbon\Carbon::now();
                $now->format("yyyy/mm/dd hh:mm");
                $value->time = 1;
                if($value->end_time_date<$now) $value->time = 0;
            }
            return $result;
        };

        return  $this->grid($collection, $this->searchFilter,$callback);        
    }
    

    public function init()
    {
        $this->storeQuery = function ($query)
        {
            $total_score = 0;
            if(request()->_method != "PUT") 
                $query->creator_id = $this->user_id;
            
            $options = $this->getRepeatValues(["qOption"]);
            $questions = $this->getRepeatValues(["question", "qTypes", "score", "order", "correctOption", "id"]);
            $no_delete_questions = [];

            if($options){
                foreach ($options as $key => $value) {
                    # question index
                    $q_index = "_".(explode('#', explode( "_", $key )[1])[0]);
                    # option index
                    $o_index = str_replace($q_index."#", "", $key);

                    # if option is edited!!
                    if(strpos($o_index, "id") > -1){
                        $option = ['title'=>$value['qOption'], 'id'=> str_replace("id", "", $o_index)];
                    }else{
                        $option = ['title'=>$value['qOption'], 'order'=> $o_index];
                    }

                    if(!isset($questions[$q_index]['options'])) 
                        $questions[$q_index]['options'] = [];
                    $questions[$q_index]['options'][] = $option;
                }
            }

            foreach ($questions as $q) {
                $item = [];
                $item['title'] = $q['question'];
                $item['question_type_id'] = $q["qTypes"];
                $item['score'] = $q['score'];
                $item['order'] = $q['order'];
                
                # if question is edited!!
                if(isset($q['id'])){
                    $question = Question::find($q['id']);
                    $question->update($item);
                    $no_delete_questions[] = $q['id'];
                }else{
                    $question = $query->questions()->create($item);
                    $no_delete_questions[] = $question->id;
                }

                $no_delete_options = [];
                if(isset($q['options'])) {
                    $optionNumber = 1;
                    $correctId = str_replace("id", "", $q['correctOption']);

                    foreach ($q['options'] as $option) {
                        if(isset($option['id'])){ # edit mode
                            if($option['title'] != ""){
                                Option::where("id", $option['id'])->update(['title'=> $option['title']]);
                                $no_delete_options[] = $option['id'];
                            }                            
                        }else{
                            $newOption = $question->questionOptions()->create($option);
                            $no_delete_options[] = $newOption->id;
                            if($optionNumber == $q["correctOption"]) 
                                $correctId = $newOption->id;
                        }                        
                        $optionNumber++;
                        $question->update(['correct_option_id' => $correctId]);                        
                    }
                }

                # delete additional options in edit!!
                if(request()->_method == "PUT" && isset($q['id'])){
                    Option::where('question_id', $q['id'])->whereNotIn('id', $no_delete_options)->delete();
                }

                $total_score += $item['score'];
            }
            $query->question_count = count($questions);
            $query->total_score = $total_score;
            $query->save();

            # delete additional questions in edit!!
            if(request()->_method == "PUT"){
                Question::where('quiz_id', $query->id)->whereNotIn('id', $no_delete_questions)->delete();
            }
        };
    }
       
    
    // get users that answered the quiz
    public function answers($id){
        
        $collection = User::select('id','name',"lname","email")
                        ->whereHas("attemps",function($q) use ($id){
                            $q->where('quiz_id',$id);
                        })->with("attemps");
        return $this->grid($collection);
    }
    // get attemp by id for courrecting
    public function getAttemp($id){
        $collection = Attemp::with('answers.question.questionOptions','user:id,name,lname,email')->find($id);
        return \Response::json($collection);

    }
    // correcting users answer : update attempt and answers
    public function setAttemp($id){
        $mark = $this->getRepeatValues(["mark"]);
        $quizScore = 0;
        foreach ($mark as $key => $m) {
            $index = (explode('#', explode( "_", $key )[1])[0]);
            $quizScore = intval($quizScore)+intval($m['mark']);
            Answer::where('id',$index)->update(['score'=>$m['mark']]);
        }
        $collection = Attemp::where('quiz_id',request()->quiz_id)->where('user_id',$this->user_id)->update(['total_score'=>$quizScore]);
         // Event 
        //  $eventData = ['userId'=>$this->user_id,'score'=>$quizScore,'quizId'=>request()->quiz_id];
        //  $event = UpdateScore::dispatch($eventData);
         
    }    

    public function callEvents($eventData){
        // $eventData = [
        //     'quizId'=>0,
        //     'userId'=>0,
        //     'lessonId'=>0
        // ];

        // update corrented count quiz in quiz model
        $correctedCount = CorrectedCount::dispatch($eventData);
        // update total student quiz score in attemp model
        $score = Score::dispatch($eventData);
        // update total student lesson score in enroll model
        $studentScore = StudentScore::dispatch($eventData);
        // update avg and top score in lesson model
        $lessonScore = LessonScore::dispatch($eventData);
    }
    public function updateCorrectedCount($record){
        $eventData = $record->record;
        $quizId = $eventData['quizId'];
        $corrected_count = $this->model::where('id',$quizId)->increment("corrected_count");
        return $corrected_count;

    }
    public function updateTotalUserScore($record){
        $eventData = $record->record;
        $quizId = $eventData['quizId'];
        $userId = $eventData['userId'];
        $attemp = Attemp::where('quiz_id',$quizId)->where('user_id',$userId)->first();
        $total_score = Answer::where('user_id',$userId)->where('quiz_attemp_id',$attemp->id)->sum('score');
        $attempNew = $attemp->update(['total_score'=>$total_score]);
        return $attempNew;
    }
}
