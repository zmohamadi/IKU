<?php 

namespace Publics\Requests\Edu;

use Illuminate\Foundation\Http\FormRequest;


class CourseLevelRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'title_fa'=>'required',
            'title_en'=>'required',
            'status_id'=>'required',
        ];
    }
}
    