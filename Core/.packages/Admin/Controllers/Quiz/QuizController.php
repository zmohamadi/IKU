<?php
namespace Admin\Controllers\Quiz;

use Admin\Controllers\Public\BaseAbstract;
use Illuminate\Http\Request;
use Models\Edu\Quiz\Answer;
use Models\Edu\Quiz\Attemp;
use Models\Person\User;

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
    protected $quiz = "";


    public function list($course){
        $collection = $this->model::with("activeStatus","creator")->where('course_id',$course);
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
            (request()->_method != "PUT")? $query->creator_id = $this->user_id :"";

            $total_score = 0;
            
            $questions = $this->getRepeatValues(["question","qTypes","score","order","correctOption"]);
            $questionOptions = $this->getRepeatValues(["qOption"]);

            if($questionOptions){
                foreach ($questionOptions as $key => $value) {
                    $index = "_".(explode('#', explode( "_", $key )[1])[0]);
                    if(!isset($questions[$index]['options'])) 
                        $questions[$index]['options'] = [];
                    
                    $questions[$index]['options'][] = ['title'=>$value['qOption'], 'order'=>explode( "_", $index )[1] + 1];
                }
            }            
            $query->questions()->forceDelete();

            foreach ($questions as $item) {
                $item['title'] = $item['question'];
                $item['question_type_id'] = $item["qTypes"];
                $item['score'] = $item['score'];
                $item['order'] = $item['order'];
                $correctOption = 0;
                $question = $query->questions()->create($item);
                if (isset($item['options'])) {
                    $optionNumber = 1;
                    foreach ($item['options'] as $option) {
                        $optionId = $question->questionOptions()->create($option);
                        if($optionNumber==$item["correctOption"]) $correctOption=$optionId->id;
                        $optionNumber++;
                    }
                }
                $question->update(['correct_option_id'=>$correctOption]);

                $total_score += $item['score'];
            }
            $query->question_count = count($questions);
            $query->total_score = $total_score;
            $query->save();
        };
    }
   
    public function attemp($id){
        $this->checkQuizTime($id);
        $this->getReplies($id);
    }
    /**
     * 
     */
    public function reply($id){
        $answers = [];
                
        $attempToEnd = Attemp::where('user_id',$this->user_id)->where('id',$id)->update(['end_at'=>\Carbon\Carbon::now()]);
        $attemp = Attemp::with('answers')->find($id);
        foreach (request()->input() as $key => $value) {
            if(explode( "_", $key )[0]=="response")
            $answer = Answer::where('user_id',$this->user_id)
                        // ->where('quiz_attemp_id',$id)
                        ->where('question_id',explode( "_", $key )[1])
                        ->update(['answer_option_id' =>is_numeric($value)?$value:NULL ,
                        'answer' => !is_numeric($value)?$value:NULL ]);

        }
        return \Response::json($answer);
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
    }

    private function checkQuizTime($qid){
        $quiz = $this->model::find($qid);
        $time = \Carbon\Carbon::now()->format('Y-m-d H:i');
        // dd($time);

        if($time < $quiz->start_time_date){
            $this->reply_status = "before_time";
            $this->reply_message = "The quiz time has not yet arrived, thank you for your patience.<br/> Start answering the quiz at: {$quiz->start_time_date}";
        }elseif($time > $quiz->end_time_date){
            $this->reply_status = "after_time";
            $this->reply_message = "The time to answer the quiz has ended at: {$quiz->end_time_date}";
        }else{
            $this->reply_status = "reply_time";
            $this->reply_message = "";
            $this->quiz = $quiz;
        }
    }

    private function getQuestions(){
        $this->quiz = $this->quiz->load('questions.questionOptions');
        // if($this->quiz['randomize'] == "1"){
        //     $this->quiz = $this->quiz->questions->shuffle();
        // }
    }

    private function getReplies($id){
        $uid = $this->user_id;
        // dd($this->quiz);
        // dd(session($uid."-attemp-".$id));

        if(session($uid."-attemp-".$id) != ""){
            $attempData = Attemp::where('user_id', $uid)->where('quiz_id', $id)->first();
            if(!$attempData){
                $attemp = [
                    'quiz_id' => $id,
                    'quiz_score' => $this->quiz->total_score,
                    'user_id' => $uid,
                    'course_id' => request()->course_id,
                    'start_at' => \Carbon\Carbon::now()->format('Y-m-d H:i:s'),
                ];

                if($this->quiz['limit_time'] != ""){
                    $deadline = \Carbon\Carbon::now()->addMinutes($this->quiz['limit_time'])->format('Y-m-d H:i');
                    if($deadline > $this->quiz['end_time_date']){
                        $deadline = $this->quiz['end_time_date'];
                    }
                    $attemp['deadline'] = $deadline;
                }else{
                    $attemp['deadline'] = $this->quiz['end_time_date'];
                }

                $attemp = Attemp::create($attemp);
                session()->put($uid."-attemp-".$id, $attemp->id);
                $this->getQuestions();
                $answers = [];
                if($this->quiz->questions)
                foreach($this->quiz->questions as $qitem){
                    $answers[] = [
                        'user_id' => $uid,
                        'quiz_attemp_id' => $attemp->id,
                        // 'quiz_id' => $this->quiz->id,
                        'question_id' => $qitem['id'],
                        'question_type_id' => $qitem['question_type_id'],
                        'course_id' => $this->quiz->course_id,
                    ];
                }

                $attemp = $attemp->answers()->createMany($answers);
            }else{
                $attemp = $attempData->load('answers');
            }

            return response()->json($attemp);
           
        }else{
            return response()->json(session($this->user_id."-attemp-".$id));
        }
    }
}
