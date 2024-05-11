<?php 

namespace Publics\Requests\HomeWork;

use Illuminate\Foundation\Http\FormRequest;


class HomeWorkRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'title'=>'required',
            // 'type_id'=>'required',
            'start_date'=>'required',
            'expire_date'=>'required|after:'.request()->start_date,
            // 'score'=>'required',
        ];
    }
}
    