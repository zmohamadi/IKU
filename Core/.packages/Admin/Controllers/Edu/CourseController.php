<?php
namespace Admin\Controllers\Edu;

use Admin\Controllers\Public\BaseAbstract;
use Illuminate\Http\Request;
use Models\Edu\Enroll;
use Models\Person\Student;
use Models\Base\Status;
use Admin\Controllers\Public\PublicController;

class CourseController extends BaseAbstract{

    protected $model = "Models\Edu\Course";
    protected $request = "Publics\Requests\Edu\CourseRequest";
    protected $with = ["activeStatus",'category','level','teach',"activeStatus"];
    protected $showWith = ["activeStatus","managers",'category','level','teach',"activeStatus","keywords"];
    protected $needles = ['Edu\CourseCategory','Edu\CourseLevel','Person\Teacher','Person\SessionManager','Base\Keyword'];
    protected $searchFilter = ["title"];
    protected $increment = ["courses"];
    protected $decrement = ["courses"];
    //protected $destroy = [];
    //protected $files = [];
    //protected $except = [];
    public function init()
    {
        $this->indexQuery = function ($query)
        {
            if(request()->level) $query->where('level_id',request()->level);
            if(request()->category) $query->where('category_id',request()->category);
            if(request()->teacher) $query->where('instructor_id',request()->teacher);
            if(request()->status_id) $query->where('status_id',request()->status_id);
            if(request()->display_home) $query->where('display_home',request()->display_home);

        };
        $this->storeQuery = function ($query)
        {
            $managersIDs = request()->session_managers;
            $teacher = request()->instructor_id;
            $roleManager = $this->model::ROLES["Manager"];
            $roleTeacher = $this->model::ROLES["Teacher"];
            if($managersIDs) $query->managers()->syncWithPivotValues($managersIDs,['role_id' => $roleManager,'status_id'=>1]);
            if($teacher) $query->users()->syncWithPivotValues([$teacher],['role_id' => $roleTeacher,'status_id'=>1]);
            $query->keywords()->sync(request()->keywords_id);
        };
    }
    public function students($id){
        $stu_ids = Enroll::where("course_id",$id)->where("role_id",$this->model::ROLES["Student"]);
        if(request()->status){
            $filters = explode(",",request()->status);
            // dd($filters);
            $statusArray=[];
            foreach ($filters as $value) {
                array_push($statusArray,Enroll::STATUS[$value]);
            }
            // dd($statusArray);
            $stu_ids = $stu_ids->whereIn("status_id",$statusArray);
        }
        $stu_ids = $stu_ids->pluck("user_id");

        

        $collection = Student::whereIn('id',$stu_ids)->select('id','name',"lname","pic","email","mobile")
                        ->with(['enroll'=>function($q) use($id){
                            $q->where("course_id",$id)->with('reqStatus');
                        }]);
        // dd($collection);
        return $this->grid($collection,['name','lname']);
    }
    public function getchangeStatus($id,$stu){
        
        $data = [
            'student' => Student::select('id','name',"lname","pic","email","mobile")->find($stu),
            'status' => Status::where('group_id',2)->get(),
            'enroll' => Enroll::where("course_id",$id)->where("user_id",$stu)->first()
        ];

        return response()->json($data);
    }
    public function reportCard($id,$stu){
        
        $data = [
            'student' => Student::select('id','name',"lname","pic","email","mobile")
                        ->with(['attemps'=>function ($q) use ($id){
                            $q->where('course_id',$id)->with('quiz');
                        }])
                        ->with(['homeworkAnswers'=>function ($q) use ($id){
                            $q->where('course_id',$id)->with('homework');
                        }])
                        ->find($stu),
            'course' => $this->model::find($id),
            'enroll' => Enroll::where("course_id",$id)->where("user_id",$stu)->first()
        ];

        return response()->json($data);
    }
    public function changeStatusGetNeedles(){
        return response()->json(Status::where('group_id',2)->get());
    }
    public function changeStatus($id,$stu){
        $status_id = request()->status_id;

		\DB::beginTransaction();

		try{
            $UP = Enroll::where("course_id",$id)->where("user_id",$stu)
                ->update(['status_id'=>$status_id ]);

            $student = Student::select('name','lname','email')->find($stu);
            $view = "rejected-course";
            $message = "Your disconfirmation has been successfully completed and the email has been sent to the ".$student->name." ".$student->lname;
            
            if($status_id==1)
            {
                $view = "accept-course";
                $message = "Your verification was successful and the email was sent to the ".$student->name." ".$student->lname;
            }
    
            if($UP){
                $email = new PublicController;
                $sendMail = $email->sendEmail($student->email , $view);
                return response()->json(['status'=>200,'message'=>$message]);
    
            }else
            return response()->json(['status'=>500,'message'=>'send email error']);
		}
		catch (\Exception $e) {
			\DB::rollBack();
			return response()->json($e->getMessage(), '501');
		}
    }

    public function updateScore($record)
    {
        $eventData = $record->record;
        $courseId = $eventData['courseId'];
        
        $max = Enroll::where('course_id',$courseId)->max('total_score');
        $avg = Enroll::where('course_id',$courseId)->avg('total_score');
        $course = \Models\Edu\Course::where('id',$courseId)->update(['top_score'=>$max,'average_score'=>$avg]);
        return $course;
    }
}
