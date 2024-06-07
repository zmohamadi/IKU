<?php
namespace Admin\Controllers\Edu;

use Admin\Controllers\Public\BaseAbstract;
use Illuminate\Http\Request;
use Models\Edu\Survey\Answer;

class SurveyController extends BaseAbstract{

    protected $model = "Models\Edu\Survey\Survey";
    protected $request = "Publics\Requests\Survey\SurveyRequest";
    protected $with = ['creator', 'activeStatus'];
    protected $showWith = ['creator', 'activeStatus',"questions.questionOptions"];
    protected $needles = ['Base\QuestionType'];
    protected $searchFilter = ["title"];
    // protected $increment = ["surveys"];
    // protected $decrement = ["surveys"];
    // protected $destroy = ["Models\Edu\Survey\Question"];

    public function list($lesson){
        $collection = $this->model::with("activeStatus","creator")->where('lesson_id',$lesson);
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
        $this->storeQuery = function ($query) {
            (request()->_method == "PUT")? $query->creator_id = $this->user_id :"";
            
            $questions = $this->getRepeatValues(["questionTypes","question"]);
            $questionOptions = $this->getRepeatValues(["questionOption"]);

            if($questionOptions){
                foreach ($questionOptions as $key => $value) {
                    $index = "_".(explode('#', explode( "_", $key )[1])[0]);
                    if(!isset($questions[$index]['options'])) 
                        $questions[$index]['options'] = [];
                    
                    $questions[$index]['options'][] = ['title'=>$value['questionOption'], 'order'=>explode( "_", $index )[1] + 1];
                }
            }            

            $query->questions()->forceDelete();
            foreach ($questions as $item) {
                $item['title'] = $item['question'];
                $item['question_type_id'] = $item['questionTypes'];
                $question = $query->questions()->create($item);
                // dd($question);
                if (isset($item['options'])) {
                    foreach ($item['options'] as $option) {
                        $question->questionOptions()->create($option);
                    }
                }
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
                'survey_id' => $id,
                'question_id' => explode( "_", $key )[1],
                'question_option_id' =>is_numeric($value)?$value:NULL ,
                'answer' => !is_numeric($value)?$value:NULL ,
            ];
        }
        Answer::insert($answers);
    }
}
