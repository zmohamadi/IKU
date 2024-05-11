<?php 

namespace Publics\Requests\Survey;

use Illuminate\Foundation\Http\FormRequest;

class SurveyRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'title'=>'required',
            'start_date'=>'required',
            'expire_date'=>'required|after:'.request()->start_date,
        ];
    }
}