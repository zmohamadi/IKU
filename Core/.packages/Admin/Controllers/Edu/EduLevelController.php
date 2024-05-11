<?php
namespace Admin\Controllers\Edu;

use Admin\Controllers\Public\BaseAbstract;
use Illuminate\Http\Request;

class EduLevelController extends BaseAbstract{

    protected $model = "Models\Edu\EducationLevel";
    protected $request = "Publics\Requests\Edu\EducationLevelRequest";
    protected $with = ["activeStatus"];
    protected $showWith = ["activeStatus"];
    protected $searchFilter = ["title_en"];
}
