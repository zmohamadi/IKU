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
        $url = explode("/", request()->path());
        $id = $url[2];
        $item =  [
            'name'=>'required',
            'lname'=>'required',
            'email'=>'required|nullable|email|unique:person_users,email,'.$id.',id,deleted_at,NULL',
        ];

        if(isset(request()->is_teacher) && request()->is_teacher == 1)
        {
            $item["pic"] = "required";
            $item["biography"] = "required";
            $item["address"] = "required";
            $item["timezone_id"] = "required";
            $item["gender_id"] = "required";
        }
        if(isset(request()->is_event_speaker) && request()->is_event_speaker == 1)
        {
            $item["pic"] = "required";
        }
        if(isset(request()->is_mentor) && request()->is_mentor == 1)
        {
            $item["pic"] = "required";
            $item["mentorship_topic_id"] = "required";
            $item["work_experience"] = "required";
            $item["biography"] = "required";
        }
        if(isset(request()->is_mentee) && request()->is_mentee == 1)
        {
            $item["pic"] = "required";
            $item["timezone_id"] = "required";
            $item["level_id"] = "required";
        }
        if(isset(request()->role_id))
        {
            if(request()->role_id == 2)
            {
                $item["birthdate"] = "required";
            }
            if(request()->role_id == 3)
            {
                $item["biography"] = "required";
            }
        }
         
        return $item;
    }
}
    