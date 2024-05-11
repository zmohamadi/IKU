<?php
namespace Admin\Controllers\Edu;

use Admin\Controllers\Public\BaseAbstract;
use Illuminate\Http\Request;

class CourseCategoryController extends BaseAbstract{

    protected $model = "Models\Edu\CourseCategory";
    protected $request = "Publics\Requests\Edu\CourseCategoryRequest";
    protected $with = ["activeStatus"];
    protected $showWith = ["activeStatus"];
    protected $searchFilter = ["title_en"];
    protected $increment = ["course_categories"];
    protected $decrement = ["course_categories"];
    protected $files = ["pic"];

}
