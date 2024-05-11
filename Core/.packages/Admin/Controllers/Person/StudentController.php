<?php
namespace Admin\Controllers\Person;

use Admin\Controllers\Public\BaseAbstract;
use Illuminate\Http\Request;

class StudentController extends BaseAbstract{

    protected $model = "Models\Person\Student";
    protected $request = "Publics\Requests\Person\StudentRequest";
    protected $with = ['level',"activeStatus"];
    protected $showWith = ['timezone','level',"activeStatus"];
    protected $needles = ['Person\Timezone','Edu\EducationLevel'];
    protected $searchFilter = ["name","lname","email","mobile"];
    protected $files = ["pic"];
    protected $increment = ["students"];
    protected $decrement = ["students"];

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
