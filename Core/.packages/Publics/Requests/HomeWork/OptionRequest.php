<?php 

namespace Publics\Requests\HomeWork;

use Illuminate\Foundation\Http\FormRequest;


class OptionRequest extends FormRequest
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
    