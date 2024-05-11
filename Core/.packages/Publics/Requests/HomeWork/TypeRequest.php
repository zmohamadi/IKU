<?php 

namespace Publics\Requests\HomeWork;

use Illuminate\Foundation\Http\FormRequest;


class TypeRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'title_en'=>'required',
            'status_id'=>'required',
        ];
    }
}
    