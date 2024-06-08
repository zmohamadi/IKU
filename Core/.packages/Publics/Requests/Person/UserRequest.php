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
        $item =  [
            'firstname'=>'required',
            'lastname'=>'required',
            'gender_id'=>'required',
            'role_id'=>'required',
            'photo'=>'required',
        ];
        if(request()->role_id == 3)
        {
            $item["studentID"] = "required";
        }
        if(request()->_method == "PUT")
        {
            $url = explode("/", request()->path());
            $id = $url[2];
            $item["mobile"] = "required|nullable|mobile|unique:person_users,mobile,".$id.",id,deleted_at,NULL";
            $item["email"] = "required|nullable|email|unique:person_users,email,".$id.",id,deleted_at,NULL";
        }
        else
        {
            $item["mobile"] = "required|mobile|unique:person_users,mobile,NULL,id,deleted_at,NULL";
            $item["email"] = "required|email|unique:person_users,email,NULL,id,deleted_at,NULL";
        }
        return $item;
    }
}
    