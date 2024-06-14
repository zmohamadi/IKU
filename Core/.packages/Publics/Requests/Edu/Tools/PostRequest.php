<?php 

namespace Publics\Requests\Edu\Tools;

use Illuminate\Foundation\Http\FormRequest;


class PostRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
                'text'=>'required',
        ];
    }
}
    