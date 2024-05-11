<?php
namespace Admin\Controllers\Person;

use Admin\Controllers\Public\BaseAbstract;
use Illuminate\Http\Request;

class RoleController extends BaseAbstract{

    protected $model = "Models\Person\Role";
    protected $request = "Publics\Requests\Person\RoleRequest";
    protected $with = ['users'];
    protected $showWith = ['users'];
    protected $needles = [];
    //protected $searchFilter = [];
    //protected $destroy = [];
    //protected $files = [];
    //protected $except = [];
}
