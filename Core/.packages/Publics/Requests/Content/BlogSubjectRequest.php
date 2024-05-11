<?php

namespace Publics\Requests\Content;

use Illuminate\Foundation\Http\FormRequest;


class BlogSubjectRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        $langs = \Models\Base\Langueage::active()->Pluck("symbol","id");
        $array=[];
        foreach($langs as $key=>$value)
        {
            $array["title_".$value]='required';
        }
        return $array;
    }
}
