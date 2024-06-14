<?php 

namespace Publics\Requests\Edu;

use Illuminate\Foundation\Http\FormRequest;


class EducationLevelRequest extends FormRequest
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
    