<?php
namespace Admin\Controllers\Person;

use Admin\Controllers\Public\BaseAbstract;
use Illuminate\Http\Request;
use Models\Person\Role;

class UserController extends BaseAbstract
{
    protected $model = "Models\Person\User";
    protected $request = "Publics\Requests\Person\UserRequest";
    protected $with = ["activeStatus"];
    protected $showWith = ["activeStatus"];
    protected $searchFilter = ["name","lname","email","mobile"];
    protected $files = ["pic"];
    protected $increment = ["users"];
    protected $decrement = ["users"];
    protected $needles = ['Person\Timezone','Edu\EducationLevel','Edu\Lesson'];

    public function users(){
        
        $collection = $this->model::active();

        if(request()->type){

            $filters = explode(",",request()->type);
            $value = 1;
            $i=0;
            foreach ($filters as $filter) 
            {
                if($filter=="is_manager") {$filter="role_id"; $value=3;}
                if($filter=="is_student") { $filter="role_id"; $value=2;}
                if($i==0) $collection->where($filter,$value);
                else $collection->orWhere($filter,$value);
                $i++;
            }
        }
        $callback = function ($result) {
            foreach ($result as $value) {
                if($value->role_id==3) $value->urlEdit = "managers";
                if($value->role_id==2) $value->urlEdit = "students";
                if($value->is_teacher==3) $value->urlEdit = "teachers";
                if($value->is_mentor==3) $value->urlEdit = "mentors";
                if($value->is_mentee==3) $value->urlEdit = "mentees";
                if($value->is_event_speaker==3) $value->urlEdit = "speakers";
            }
            return $result;
        };

        return  $this->grid($collection,['name','lname'],$callback);
       

        
    }
    
    public function changeRoleGetNeedles(){
        return response()->json(Role::where('type',2)->active()->get());
    }
    public function changeRole($id){
        $status = request()->status_id;
        // dd($status);
        $field="";
        $value="";
        switch ($status) {
            // case 1:
            //     $field="role_id";
            //     $value=1;
            //     break;
            // case 2:
            //     $field="role_id";
            //     $value=2;
            //     break;
            // case 3:
            //     $field="role_id";
            //     $value=3;
            //     break;
            case 4:
                $field="is_mentor";
                $value=1;
                break;
            case 5:
                $field="is_mentee";
                $value=1;
            case 6:
                $field="is_event_speaker";
                $value=1;
                break;
        }
        // dd($field);
        
        $UP = $this->model::where("id",$id)
            ->update([$field=>$value]);
        return response()->json([$UP,'status'=>200]);
        
    }
    public function changePassword()
    {
        $this->validate(request(), [
            'new_password' => 'required|required_with:new_password_confirmation|same:new_password_confirmation',
            'new_password_confirmation' => 'required'
        ]);
        $user = $this->model::find($this->user->id);
        $user->password = bcrypt(request()->pass);
        $user->save();
        return \Response::json(['status'=>200]);
    }
}
