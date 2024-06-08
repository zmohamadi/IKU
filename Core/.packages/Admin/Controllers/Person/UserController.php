<?php
namespace Admin\Controllers\Person;

use Admin\Controllers\Public\BaseAbstract;
use Models\Person\Role;

class UserController extends BaseAbstract
{
    protected $model = "Models\Person\User";
    protected $request = "Publics\Requests\Person\UserRequest";
    protected $with = ["role","gender","activeStatus"];
    protected $showWith = ["activeStatus"];
    protected $searchFilter = ["firstname","lastname","email","mobile"];
    protected $files = ["photo"];

    public function init()
    {
        $this->storeQuery = function ($query)
        {
            if(request()->_method != "PUT")
                $query->password = bcrypt(request()->email);
            if(request()->role_id != 2)
                $query->studentID = null;
            
            $query->save();         
        };
        $this->needles = [
            \Person\Role::class => function($query){ $query->active(); },
            \Base\Gender::class,
        ];
    }
    public function changePassword()
    {
        $this->validate(request(), [
            'new_password' => 'required|required_with:new_password_confirmation|same:new_password_confirmation',
            'new_password_confirmation' => 'required'
        ]);
        $user = $this->model::find($this->user->id);
        $user->password = bcrypt(request()->pass);
        $user->save();
        return \Response::json(['status'=>200]);
    }
}
