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
            if(request()->role_id != 3)
                $query->studentID = null;
            
            $query->save();         
        };
        $this->needles = [
            \Person\Role::class => function($query){ $query->active(); },
            \Base\Gender::class,
        ];
    }
}
