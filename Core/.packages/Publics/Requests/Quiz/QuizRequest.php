<?php 

namespace Publics\Requests\Quiz;

use Illuminate\Foundation\Http\FormRequest;

class QuizRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            // 'title'=>'required',
            // 'timezone_id'=>'required',
            // 'start_time_date'=>'required',
            // 'end_time_date'=>'required|after:'.request()->start_time_date,
        ];
    }
}