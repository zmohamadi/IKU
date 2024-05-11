<?php 

namespace Publics\Requests\Edu;

use Illuminate\Foundation\Http\FormRequest;


class EnrollRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
        ];
    }
}
    