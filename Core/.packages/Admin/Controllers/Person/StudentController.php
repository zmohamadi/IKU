<?php
namespace Admin\Controllers\Person;

use Admin\Controllers\Public\BaseAbstract;
use Illuminate\Http\Request;
use Models\Edu\Enroll;

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
    public function updateTotalScore($record)
    {
        $eventData = $record->record;
        $userId = $eventData['userId'];
        $lessonId = $eventData['lessonId'];

        // get score homewroks
        $homeworks = \Models\Edu\HomeWork\HomeWork::where('lesson_id',$lessonId)->pluck('id');
        $homeworksTotalScore = \Models\Edu\HomeWork\Attemp::whereIn('homework_id',$homeworks)->sum('total_score');
        
        // get score quizs
        $quizs = \Models\Edu\Quiz\Quiz::where('lesson_id',$lessonId)->pluck('id');
        $quizsTotalScore = \Models\Edu\Quiz\Attemp::whereIn('quiz_id',$quizs)->sum('total_score');
        
        // update score in Enroll table
        $enroll = Enroll::where('user_id',$userId)->where('lesson_id',$lessonId)->first();
        $enroll->total_score = $homeworksTotalScore + $quizsTotalScore;
        $enroll->update();
    }
}
