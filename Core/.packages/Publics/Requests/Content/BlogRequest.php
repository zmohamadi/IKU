<?php

namespace Publics\Requests\Content;

use Illuminate\Foundation\Http\FormRequest;


class BlogRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        $blog = [
            'title'=>'required',
            'subject_id'=>'required',
            'image'=>'required',
            'thumb'=>'required',
            'summary'=>'required',
            'text'=>'required',
        ];
        return $blog;
    }
}
