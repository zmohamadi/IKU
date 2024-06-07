<?php
namespace Admin\Controllers\Edu;

use Admin\Controllers\Public\BaseAbstract;
use Illuminate\Http\Request;
use Models\Person\User;

class SectionController extends BaseAbstract{

    protected $model = "Models\Edu\Section\Section";
    protected $request = "Publics\Requests\Edu\Tools\SectionRequest";
    protected $with = ['activeStatus'];
    protected $showWith = ['activeStatus'];
    protected $searchFilter = ["title"];
    protected $increment = ["contents"];
    protected $decrement = ["contents"];

    public function init()
    { 
        $this->storeQuery = function ($query)
        {
            
            // dd($query);
            
        };
    }
    public function list($lesson){
        $collection = $this->model::with("activeStatus")->where('lesson_id',$lesson);
        return $this->grid($collection, $this->searchFilter);
    }
    public function visits($id){
        $stu_ids = \DB::table("edu_section_view_user")->where('section_id',$id)->pluck('user_id');
        $collection = User::whereIn('id',$stu_ids)->select('id','name',"lname","pic","email","mobile");
        return $this->grid($collection);
    }
}
