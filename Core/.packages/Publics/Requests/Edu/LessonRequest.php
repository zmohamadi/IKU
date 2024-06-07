<?php 

namespace Publics\Requests\Edu;

use Illuminate\Foundation\Http\FormRequest;


class LessonRequest extends FormRequest
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
                // 'thumbnail'=>'required',
                'category_id'=>'required'
            ];
    }
}
    