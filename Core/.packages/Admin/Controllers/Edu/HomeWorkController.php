<?php
namespace Admin\Controllers\Edu;

use Admin\Controllers\Public\BaseAbstract;
use Illuminate\Http\Request;
use Models\Edu\HomeWork\Answer;
use Models\Edu\HomeWork\Attemp;
use Models\Edu\HomeWork\Question;
use Models\Edu\HomeWork\Option;
use Models\Person\User;
use Publics\Controllers\Tools;
use Admin\Events\Homework\CorrectedCount;
use Admin\Events\Homework\Score;
use Admin\Events\StudentScore;
use Admin\Events\CourseScore;

class HomeWorkController extends BaseAbstract{

    protected $model = "Models\Edu\HomeWork\HomeWork";
    protected $request = "Publics\Requests\HomeWork\HomeWorkRequest";
    protected $with = ['creator', 'activeStatus'];
    protected $showWith = ['creator', 'activeStatus',"questions.questionOptions"];
    protected $needles = ['Base\QuestionType','Person\Timezone'];
    protected $searchFilter = ["title"];
    protected $increment = ["homework"];
    protected $decrement = ["homework"];

    public function list($course){
        
        $collection = $this->model::with("activeStatus","creator")->where('course_id',$course);
        if(request()->type){
            $filters = explode(",",request()->type);
            $op = "==";
            $i=0;
            foreach ($filters as $filter) 
            {
                if($filter=="uncorrected") $op="<>";
                if($i==0) $collection->where("answer_count",$op,"answer_correcting_count")->where('course_id',$course);
                else $collection->orWhere("answer_count",$op,"answer_correcting_count")->where('course_id',$course);
                $i++;
            }
        }
        return $this->grid($collection, $this->searchFilter);
    }

    public function init()
    {
        $this->showQuery = function($query, $before)
        {
            if ($before == false)
            {
                $query->answer = Attemp::where('user_id',$this->user_id)->with('answers')->get();
                $query->time = Tools::compareDateWithToday($query->expire_date);

            }
        };
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
                Question::where('homework_id', $query->id)->whereNotIn('id', $no_delete_questions)->delete();
            }
        };

    }
   
    public function showWithAttemps($id){
        $collection = $this->model::with("creator",'questions.questionOptions')->
        with(["questions.answers"=>function($q){
            $q->where('user_id',$this->user_id);
        }])
            ->
            find($id);
        $collection->time = Tools::compareDateWithToday($collection->expire_date);
        return \Response::json($collection);

    }
   
    public function reply($id){
        $homework = $this->model::find($id);
        $oldAttemp = Attemp::where('user_id', $this->user_id)->where('homework_id',$id)->first();

        $attemp = [
            'user_id' => $this->user_id,
            'homework_id' => $id,
            'homework_score' => $homework->total_score,
            'course_id' => request()->course_id,           
        ];
        $answers = [];
        foreach (request()->input() as $key => $value) {
            if(explode( "_", $key )[0]=="response")
            $answers[] = [
                'user_id' => $this->user_id,
                'homework_id' => $id,
                'course_id' => request()->course_id,
                'question_id' => explode( "_", $key )[1],
                'answer_option_id' =>is_numeric($value)?$value:NULL ,
                'answer' => !is_numeric($value)?$value:NULL ,
            ];
        }
        if($oldAttemp) {
            $oldAttemp->answers()->forceDelete();
            $oldAttemp->update($attemp);
            $oldAttemp->answers()->createMany($answers);
            return $oldAttemp;
        }
        else{

            $attempNew = Attemp::create($attemp);
            $attempNew->answers()->createMany($answers);
            return $attempNew;

        }
    }


    public function answers($id){
        $collection = User::select('id','name',"lname","email")
                        ->whereHas("homeworkAttemps",function($q) use ($id){
                            $q->where('homework_id',$id);
                        })->with("homeworkAttemps.homework");

        return $this->grid($collection);
    }
    public function getAnswer($id,$user){
        $collection = Attemp::with('answers.question','user:id,name,lname,email')->where('homework_id',$id)->first();        
        return \Response::json($collection);

    }
    public function setScore($id){
        $homework = $this->model::find(request()->homework_id);

        $mark = $this->getRepeatValues(["mark"]);
        $total_score = 0;
        $answerId = 0;
        foreach ($mark as $key => $m) {
            $index = (explode('#', explode( "_", $key )[1])[0]);
            $total_score = intval($total_score)+intval($m['mark']);
            $answer = Answer::where('id',$index)->update(['score'=>$m['mark']]);
            $answerId = $index;
        }

        $answerRecord = Answer::find($answerId);

        $eventData = ['homeworkId'=>request()->homework_id,'userId'=>$answerRecord->user_id,'courseId'=>$answerRecord->course_id];
        $this->callEvents($eventData);
        
    }
    public function callEvents($eventData){
        // $eventData = [
        //     'toolsId'=>0,
        //     'userId'=>0,
        //     'courseId'=>0
        // ];

        // update corrented count homework in homework model
        $correctedCount = CorrectedCount::dispatch($eventData);
        // update total student homework score in attemp model
        $score = Score::dispatch($eventData);
        // update total student course score in enroll model
        $studentScore = StudentScore::dispatch($eventData);
        // update avg and top score in course model
        $courseScore = CourseScore::dispatch($eventData);
    }
    public function updateCorrectedCount($record){
        $eventData = $record->record;
        $homeworkId = $eventData['homeworkId'];
        $corrected_count = $this->model::where('id',$homeworkId)->increment("corrected_count");
        return $corrected_count;

    }
    public function updateTotalUserScore($record){
        $eventData = $record->record;
        $homeworkId = $eventData['homeworkId'];
        $userId = $eventData['userId'];
        $attemp = Attemp::where('homework_id',$homeworkId)->where('user_id',$userId)->first();
        $total_score = Answer::where('user_id',$userId)->where('homework_attemp_id',$attemp->id)->sum('score');
        $attempNew = $attemp->update(['total_score'=>$total_score]);
        return $attempNew;
    }
}
