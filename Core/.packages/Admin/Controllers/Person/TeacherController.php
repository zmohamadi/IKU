<?php
namespace Admin\Controllers\Person;

use Admin\Controllers\Public\BaseAbstract;
use Illuminate\Http\Request;

class TeacherController extends BaseAbstract{

    protected $model = "Models\Person\Teacher";
    protected $request = "Publics\Requests\Person\TeacherRequest";
    protected $with = ["activeStatus"];
    protected $showWith = ["activeStatus"];
    protected $needles = ['Person\Timezone'];
    protected $searchFilter = ["name","lname","email","mobile"];
    protected $files = ["pic"];
    protected $increment = ["teachers"];
    protected $decrement = ["teachers"];

    public function init()
    {
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
