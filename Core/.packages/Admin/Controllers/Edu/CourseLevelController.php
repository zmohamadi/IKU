<?php
namespace Admin\Controllers\Edu;

use Admin\Controllers\Public\BaseAbstract;
use Illuminate\Http\Request;

class CourseLevelController extends BaseAbstract{

    protected $model = "Models\Edu\CourseLevel";
    protected $request = "Publics\Requests\Edu\CourseLevelRequest";
    protected $with = ["activeStatus"];
    protected $showWith = ["activeStatus"];
    protected $searchFilter = ["title_en"];
}
