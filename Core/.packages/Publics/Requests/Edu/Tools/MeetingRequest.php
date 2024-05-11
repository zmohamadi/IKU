<?php 

namespace Publics\Requests\Edu\Tools;

use Illuminate\Foundation\Http\FormRequest;


class MeetingRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'title'=>'required',
            'date'=>'required',
            'start_hour'=>'required',
            'duration'=>'required',
            'meet_link'=>'required',
    ];
    }
}
    