<?php 

namespace Publics\Requests\HomeWork;

use Illuminate\Foundation\Http\FormRequest;
use Publics\Controllers\Tools;


class HomeWorkRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        $homework =  [
            'title'=>'required',
            'start_date'=>'required',
            'expire_date'=>'required|after:'.request()->start_date,
        ];
        $tools = new Tools;
        $questions = $tools->getRepeatValues(["question"]);
        $i=0;
        foreach ($questions as $item) {
            $homework['score_'.$i] = 'required';
            $homework['order_'.$i] = 'required|integer';
            $homework['qTypes_'.$i] = 'required';
            if(request()['qTypes_'.$i]==2)   $homework['correctOption_'.$i] = 'required';
            // if(request()['qTypes_'.$i]==2)   $homework['qOption_'.$i.'#1'] = 'required';
            // if(request()['qTypes_'.$i]==2)   $homework['qOption_'.$i.'#2'] = 'required';

            $i++;
        }
        return $homework;
    }
}
    