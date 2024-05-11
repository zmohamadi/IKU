<?php
namespace Admin\Controllers\Person;

use Admin\Controllers\Public\BaseAbstract;
use Illuminate\Http\Request;

class SessionManagerController extends BaseAbstract{

    protected $model = "Models\Person\SessionManager";
    protected $request = "Publics\Requests\Person\SessionManagerRequest";
    protected $with = ['enroll',"activeStatus"];
    protected $showWith = ['enroll',"activeStatus"];
    protected $needles = ['Edu\Course'];
    protected $increment = ["managers"];
    protected $decrement = ["managers"];
    protected $searchFilter = ["name","lname","email","mobile"];
    protected $files = ["pic"];
}
