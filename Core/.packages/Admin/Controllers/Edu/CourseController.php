<?php
namespace Admin\Controllers\Edu;

use Admin\Controllers\Public\BaseAbstract;
use Illuminate\Http\Request;
use Models\Edu\CoursePresented;
use Models\Edu\Register;
use Models\Person\Student;
use Models\Base\Status;
use Admin\Controllers\Public\PublicController;

class CourseController extends BaseAbstract{

    protected $model = "Models\Edu\Course";
    protected $request = "Publics\Requests\Edu\CourseRequest";
    protected $with = ["activeStatus",'category','system'];
    protected $showWith = ["activeStatus",'category','system'];
    protected $needles = ['Edu\CourseCategory','Base\System'];
    protected $searchFilter = ["title"];
    // protected $increment = ["courses"];
    // protected $decrement = ["courses"];
    //protected $destroy = [];
    //protected $files = [];
    //protected $except = [];
    // public function init()
    // {
    //     $this->indexQuery = function ($query)
    //     {
    //         if(request()->level) $query->where('level_id',request()->level);
    //         if(request()->category) $query->where('category_id',request()->category);
    //         if(request()->teacher) $query->where('instructor_id',request()->teacher);
    //         if(request()->status_id) $query->where('status_id',request()->status_id);
    //         if(request()->display_home) $query->where('display_home',request()->display_home);

    //     };
        
    // }
    
    public function list(){
        $lessIds = Register::where("user_id",$this->user_id)->pluck('less_id');
        $collection = $this->model::with("activeStatus")->whereIn('id',$lessIds);

        return $this->grid($collection, $this->searchFilter);
    }
}
