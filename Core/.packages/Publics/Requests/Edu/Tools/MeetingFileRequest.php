<?php 

namespace Publics\Requests\Edu\Tools;

use Illuminate\Foundation\Http\FormRequest;


class MeetingFileRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'link'=>'required',
            'size'=>'required',
            'description'=>'required',
    ];
    }
}
    