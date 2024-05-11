<?php 

namespace Publics\Requests\Edu\Tools;

use Illuminate\Foundation\Http\FormRequest;

class NotificationRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'title'=>'required',
            'date_release'=>'required',
            'date_exp'=>'required',
            'thumb'=>'required',
            'description'=>'required',
        ];
    }
}
    