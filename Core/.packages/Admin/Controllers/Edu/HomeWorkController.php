<?php
namespace Admin\Controllers\Edu;

use Admin\Controllers\Public\BaseAbstract;
use Illuminate\Http\Request;
use Models\Edu\HomeWork\Answer;
use Models\Person\User;

class HomeWorkController extends BaseAbstract{

    protected $model = "Models\Edu\HomeWork\HomeWork";
    protected $request = "Publics\Requests\HomeWork\HomeWorkRequest";
    protected $with = ['creator', 'activeStatus'];
    protected $showWith = ['creator', 'activeStatus',"questions.questionOptions"];
    protected $needles = ['Base\QuestionType','Person\Timezone'];
    protected $searchFilter = ["title"];
    protected $increment = ["quiz"];
    protected $decrement = ["quiz"];

    public function list($course){
        
        $collection = $this->model::with("activeStatus","creator")->where('course_id',$course);
        if(request()->type){
            $filters = explode(",",request()->type);
            $op = "==";
            $i=0;
            foreach ($filters as $filter) 
            {
                if($filter=="uncorrected") $op="<>";
                if($i==0) $collection->where("answer_count",$op,"answer_currecting_count")->where('course_id',$course);
                else $collection->orWhere("answer_count",$op,"answer_currecting_count")->where('course_id',$course);
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
                $query->answer = Answer::where('user_id',$this->user_id)->get();
            }
        };
        $this->storeQuery = function ($query)
        {
            (request()->_method != "PUT")? $query->creator_id = $this->user_id :"";
            
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

            }
            $query->save();
        };

    }
   
   
    public function reply($id){
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
        $answer = Answer::insert($answers);
    }


    public function answers($id){
        $userIds = Answer::where('homework_id',$id)
        ->pluck('user_id');
        $collection = User::whereIn('id',$userIds)->select('id','name',"lname","email");
        return $this->grid($collection);
    }
    public function getAsnwer($id,$user){
        
        $collection = Answer::with('question.questionOptions','user:id,name,lname,email')
        ->where('user_id',$user)->where('homework_id',$id)->get();
        return \Response::json($collection);

    }
    public function setScore($id){
        $mark = $this->getRepeatValues(["mark"]);
        foreach ($mark as $key => $m) {
            $index = (explode('#', explode( "_", $key )[1])[0]);
            Answer::where('id',$index)->update(['score'=>$m['mark']]);
        }
    }
}
