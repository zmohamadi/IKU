<?php
namespace Admin\Controllers\Edu;

use Admin\Controllers\Public\BaseAbstract;
use Illuminate\Http\Request;
use Models\Edu\LessonPresented;
use Models\Edu\Register;
use Models\Person\Student;
use Models\Base\Status;
use Models\Base\YearSemester;
use Admin\Controllers\Public\PublicController;

class ClassController extends BaseAbstract{

    protected $model = "Models\Edu\LessonPresented";
    // protected $request = "Publics\Requests\Edu\LessonPresented";
    protected $with = ["lesson.system","teacher","activeStatus","lesson.category"];
    protected $showWith = ["lesson.system","teacher","activeStatus","lesson.category"];
    protected $needles = ['Base\YearSemester'];
    // protected $searchFilter = ["title"];
  
    public function init()
    {
        $this->indexQuery = function ($query)
        {
            $lastYearSemester = YearSemester::orderBy('id','desc')->first();
            $query->where('year',$lastYearSemester->year)->where('semester',$lastYearSemester->semester);

            if(request()->year) $query->where('year',request()->year);
            if(request()->semester) $query->where('semester',request()->semester);
            // if(request()->category) $query->where('category_id',request()->category);
            // if(request()->teacher) $query->where('instructor_id',request()->teacher);
            // if(request()->status_id) $query->where('status_id',request()->status_id);
            // if(request()->display_home) $query->where('display_home',request()->display_home);

        };
        
    }
    // public function students($id){
    //     $stu_ids = Enroll::where("lesson_id",$id)->where("role_id",$this->model::ROLES["Student"]);
    //     if(request()->status){
    //         $filters = explode(",",request()->status);
    //         // dd($filters);
    //         $statusArray=[];
    //         foreach ($filters as $value) {
    //             array_push($statusArray,Enroll::STATUS[$value]);
    //         }
    //         // dd($statusArray);
    //         $stu_ids = $stu_ids->whereIn("status_id",$statusArray);
    //     }
    //     $stu_ids = $stu_ids->pluck("user_id");

        

    //     $collection = Student::whereIn('id',$stu_ids)->select('id','name',"lname","pic","email","mobile")
    //                     ->with(['enroll'=>function($q) use($id){
    //                         $q->where("lesson_id",$id)->with('reqStatus');
    //                     }]);
    //     // dd($collection);
    //     return $this->grid($collection,['name','lname']);
    // }
    
    public function updateScore($record)
    {
        $eventData = $record->record;
        $lessonId = $eventData['lessonId'];
        
        $max = Enroll::where('lesson_id',$lessonId)->max('total_score');
        $avg = Enroll::where('lesson_id',$lessonId)->avg('total_score');
        $lesson =  \Models\Edu\Lesson::where('id',$lessonId)->update(['top_score'=>$max,'average_score'=>$avg]);
        return $lesson;
    }
    public function list(){
        $lessIds = Register::where("user_id",$this->user_id)->pluck('less_id');
        $collection = $this->model::with("activeStatus")->whereIn('id',$lessIds);

        return $this->grid($collection, $this->searchFilter);
    }
}
