<?php

namespace Publics\Requests\Person;

use Illuminate\Foundation\Http\FormRequest;


class PersonnelRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        $req = [
            'pic'=>'required',
            'name'=>'required',
            'lname'=>'required',
        ];
        if(request()->_method == "PUT")
        {
            $url = explode("/", request()->path());
            $id = $url[2];
            $req["email"] = "required|nullable|email|unique:person_users,email,".$id.",id,deleted_at,NULL";
        }
        else
        {
            $req["email"] = "nullable|email|unique:person_users,email,NULL,id,deleted_at,NULL";
        }
        return $req;
    }
}
