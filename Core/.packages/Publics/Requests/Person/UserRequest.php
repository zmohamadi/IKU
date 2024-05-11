<?php 

namespace Publics\Requests\Person;

use Illuminate\Foundation\Http\FormRequest;


class UserRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        $req =  [
                'birthdate'=>'required',
                'pic'=>'required',
                'biography'=>'required',
                'fullname'=>'required',
                'email'=>'required|email',
               // 'mobile'=>'required',
                'password'=>'required',
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
    