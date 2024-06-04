<?php 

namespace Publics\Requests\Quiz;

use Illuminate\Foundation\Http\FormRequest;
use Publics\Controllers\Tools;

class QuizRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        $rules =  [
            'title'=>'required',
            'timezone_id'=>'required',
            'start_time_date'=>'required',
            'end_time_date'=>'required|after:'.request()->start_time_date,
        ];
        $tools = new Tools;
        $questions = $tools->getRepeatValues(["question"]);
        $i=0;
        foreach ($questions as $item) {
            $rules['score_'.$i] = 'required';
            $rules['order_'.$i] = 'required|integer';
            $rules['qTypes_'.$i] = 'required';
            if(request()['qTypes_'.$i]==2)   $rules['correctOption_'.$i] = 'required';
            // if(request()['qTypes_'.$i]==2)   $rules['qOption_'.$i.'#1'] = 'required';
            // if(request()['qTypes_'.$i]==2)   $rules['qOption_'.$i.'#2'] = 'required';

            $i++;
        }
        return $rules;
    }
}