<?php 

namespace Publics\Requests\Edu\Tools;

use Illuminate\Foundation\Http\FormRequest;


class SectionRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
                'title'=>'required',
                'description'=>'required',
                'duration'=>'required',
                'youtube'=>'required',
                // 'status_id'=>'required',
        ];
    }
}
    