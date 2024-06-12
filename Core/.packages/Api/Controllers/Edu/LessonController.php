<?php
namespace Api\Controllers\Edu;

use Admin\Controllers\Public\BaseAbstract;
use Illuminate\Http\Request;
use Models\Edu\LessonPresented;
use Models\Edu\Register;
use Models\Person\Student;
use Models\Base\Status;

class LessonController extends BaseAbstract{

    protected $model = "Models\Edu\Lesson";

    public function store($data){

    }
}
