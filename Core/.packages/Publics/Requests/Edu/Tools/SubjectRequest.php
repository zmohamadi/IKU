<?php 

namespace Publics\Requests\Edu\Tools;

use Illuminate\Foundation\Http\FormRequest;


class SubjectRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
                'title'=>'required',
                'text'=>'required'
        ];
    }
}
    