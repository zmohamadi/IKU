<?php
namespace Admin\Controllers\Edu;

use Admin\Controllers\Public\BaseAbstract;
use Illuminate\Http\Request;

class LessonCategoryController extends BaseAbstract{

    protected $model = "Models\Edu\LessonCategory";
    protected $request = "Publics\Requests\Edu\LessonCategoryRequest";
    // protected $with = ["activeStatus"];
    // protected $showWith = ["activeStatus"];
    protected $searchFilter = ["title_fa"];
    // protected $increment = ["lesson-categories"];
    // protected $decrement = ["lesson-categories"];
    // protected $files = ["pic"];

}
