<?php 

namespace Publics\Requests\Edu\Tools;

use Illuminate\Foundation\Http\FormRequest;

class ResourceRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'title'=>'required',
            'name'=>'required',
            'duration'=>'required',
            'link'=>'required',
        ];
    }
}
    