<?php 

namespace Publics\Requests\Edu;

use Illuminate\Foundation\Http\FormRequest;


class CourseRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
                'title'=>'required',
                'registration_end_date'=>'required',
                'start_date'=>'required|after:'.request()->registration_end_date,
                'end_date'=>'required|after:'.request()->start_date,
                'description'=>'required',
                'objectives'=>'required',
                'thumbnail'=>'required',
                'level_id'=>'required',
                'instructor_id'=>'required',
                'category_id'=>'required'
            ];
    }
}
    