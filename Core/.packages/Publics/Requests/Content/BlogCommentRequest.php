<?php

namespace Publics\Requests\Content;

use Illuminate\Foundation\Http\FormRequest;


class BlogCommentRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        $comment = [
            'reply' => 'required',
        ];
        return $comment;
    }
}
