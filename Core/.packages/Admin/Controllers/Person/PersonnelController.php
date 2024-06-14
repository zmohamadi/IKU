<?php

namespace Admin\Controllers\Person;

use Admin\Controllers\Person\UserController;

class PersonnelController extends UserController
{
    protected $model = "Models\Person\Personnel";
    
    public function init()
    {
        $this->indexQuery = function ($query)
        {
            $query->where('id', '>', 2);
        };
    }
}

