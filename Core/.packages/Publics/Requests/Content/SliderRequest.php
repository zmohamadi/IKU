<?php

namespace Publics\Requests\Content;

use Illuminate\Foundation\Http\FormRequest;


class SliderRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        $slider = [
            'title'=>'required',
            'order'=>'integer|notIn:0|nullable',
            'image'=>'required',
        ];
        return $slider;
    }
}
