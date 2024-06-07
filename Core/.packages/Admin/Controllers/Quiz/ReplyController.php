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

class ReplyController extends BaseAbstract{

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

    public function attemp($id){
        $this->checkQuizTime($id);
        $this->getReplies($id);
    }        

    private function checkQuizTime($qid){
        $quiz = $this->model::find($qid);
        $time = Carbon::now()->format('Y-m-d H:i');
        $this->quiz = $quiz;
    
        // dd($time ."###".$quiz->start_time_date."###".($time < $quiz->start_time_date));

        if($time < str_replace("T", " ", $quiz->start_time_date)){
            $this->reply_status = "before_time";
            $this->reply_message = "The quiz time has not yet arrived, thank you for your patience.<br/> Start answering the quiz at: {$quiz->start_time_date}";
        }elseif($time > str_replace("T", " ", $quiz->end_time_date)){
            $this->reply_status = "after_time";
            $this->reply_message = "The time to answer the quiz has ended at: {$quiz->end_time_date}";
        }else{
            $this->reply_status = "reply_time";
            $this->reply_message = "";
            $this->quiz = $quiz;
            return;
        }
        
        $this->response(['status'=>$this->reply_status, 'message'=>$this->reply_message, 'quiz'=>$quiz], 200);
    }

    private function getQuestions(){
        $this->quiz->load('questions.questionOptions');
        $this->quiz = new QuizResource($this->quiz);
    }

    private function getReplies($id){
        $uid = $this->user_id;

        if(session($uid."-attemp-".$id) == ""){
            $attempData = Attemp::where('user_id', $uid)->where('quiz_id', $id)->first();
            if(!$attempData){
                $attempArr = [
                    'quiz_id' => $id,
                    'quiz_score' => $this->quiz->total_score,
                    'user_id' => $uid,
                    'lesson_id' => $this->quiz->lesson_id,
                    'start_at' => Carbon::now()->format('Y-m-d H:i:s'),
                    'deadline' => $this->getDeadline(),
                ];
                $attemp = Attemp::create($attempArr);

                $this->getQuestions();
                $answers = [];

                if($this->quiz->questions)
                    foreach($this->quiz->questions as $qitem){
                        $answers[] = [
                            'user_id' => $uid,
                            'quiz_attemp_id' => $attemp->id,
                            'question_id' => $qitem['id'],
                            'question_type_id' => $qitem['question_type_id'],
                            'lesson_id' => $this->quiz->lesson_id,
                            'question' => $qitem,
                        ];
                    }
                $attemp['answers'] = $attemp->answers()->createMany($answers);
                $questions = $this->quiz->questions->keyBy('id');
                foreach($attemp['answers'] as $key=>$answer){
                    $attemp['answers'][$key]['question'] = $questions[$answer->question_id];
                }
                $attemp = new AttempResource($attemp, $this->quiz);
                // session()->put($uid."-attemp-".$id, $attemp->id); //???
                session()->put($uid."-attemp-".$id, $this->zipJson($attemp));
            }else{
                $attemp = new AttempResource($attempData->load('answers.question.questionOptions'), $this->quiz);
            }
            $this->response(['status'=>'reply_time', 'data' => $attemp], 200);
           
        }else{
            $this->response(['status'=>'reply_time', 'data' =>session($this->user_id."-attemp-".$id)], 200);
        }
    }

    private function response($info, $status = 200) {
        http_response_code($status);
        header('Access-Control-Allow-Origin: '.env('FRONTEND_URL', 'http://127.0.0.1:3000'));
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
        header("Access-Control-Allow-Headers: X-Requested-With");
        header('Content-Type: application/json; charset=utf-8');
        exit(json_encode($info, true));
    }

    private function zipJson($data){
        if(function_exists('ob_gzhandler')) 
            ob_start('ob_gzhandler');
        else ob_start();
            echo response()->json($data);
        return ob_get_clean();
    }

    private function getDeadline() {
        if($this->quiz['limit_time'] != ""){
            $deadline = Carbon::now()->addMinutes($this->quiz['limit_time'])->format('Y-m-d H:i');
            if($deadline > $this->quiz['end_time_date']){
                $deadline = $this->quiz['end_time_date'];
            }
        }else{
            $deadline = $this->quiz['end_time_date'];
        }
        return $deadline;
    }

    /**
     * 
     */
    public function reply($id){
        $answers = [];
        Attemp::where('user_id',$this->user_id)->where('id',$id)->update(['end_at'=>\Carbon\Carbon::now()]);

        foreach(request()->input() as $key => $value) {
            if(str_contains($key, "response")){
                list($qid, $qtype) = explode("#", str_replace("response_", "" , $key));
                $reply = $qtype == "2"? ['answer_option_id' =>$value] : ['answer' => $value];
                Answer::where('user_id',$this->user_id)
                    ->where('question_id', $qid)
                    ->update($reply);
                $answers[] = [...$reply, "id"=>$qid];
            }
        }

        return response()->json(count($answers)>0?$answers:['nochange']);
    }

}
