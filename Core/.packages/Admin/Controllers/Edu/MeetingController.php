<?php
namespace Admin\Controllers\Edu;

use Admin\Controllers\Public\BaseAbstract;
use Illuminate\Http\Request;
use Models\Person\Student;
use Models\Edu\Meet\Persence;
use Models\Edu\Meet\ArchiveFile;

class MeetingController extends BaseAbstract{

    protected $model = "Models\Edu\Meet\Meeting";
    protected $request = "Publics\Requests\Edu\Tools\MeetingRequest";
    protected $showWith = ['activeStatus'];
    protected $searchFilter = ["title"];
    protected $increment = ["meetings"];
    protected $decrement = ["meetings"];

    public function list($lesson){
        $collection = $this->model::with("activeStatus")->where('lesson_id',$lesson);
        return $this->grid($collection, $this->searchFilter);
    }
    public function students($id){
        $stu_ids = Persence::where("meeting_id",$id)->pluck("student_id");

        $collection = Student::whereIn('id',$stu_ids)->select('id','name',"lname","pic");

        return $this->grid($collection,['name','lname']);
    }
    public function archives($id){
        $collection = ArchiveFile::where("meeting_id",$id);
        return $this->grid($collection,['link']);
    }
}
