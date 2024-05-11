<?php

namespace Publics\Requests\Content;

use Illuminate\Foundation\Http\FormRequest;


class ContactUsRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        $contactus = [
            'reply'=>'required',
        ];
        return $contactus;
    }
}
