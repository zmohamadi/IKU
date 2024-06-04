<?php

namespace Admin\Controllers\Person;

use Admin\Controllers\Public\BaseAbstract;
use Models\Person\User;

class PersonnelController extends BaseAbstract
{
    protected $model = "Models\Person\AdminUser";
    protected $request = "Publics\Requests\Person\PersonnelRequest";
    protected $with = ["activeStatus"];
    protected $searchFilter = ["name","lname","email","mobile"];
    protected $files = ["pic"];
    protected $increment = ["personnels"];
    protected $decrement = ["personnels"];
    
    public function init()
    {
        $this->indexQuery = function ($query)
        {
            // $query->roleType()->notDisplayLogined([$this->user_id]);
            $query->where('id', '>', 2);
        };
        $this->storeQuery = function ($query)
        {
            if(request()->_method != "PUT")
            {
                $query->password = bcrypt(request()->email);
            }
            $query->save();
        };
        
    }
}

