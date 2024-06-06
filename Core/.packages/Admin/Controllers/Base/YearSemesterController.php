<?php

namespace Admin\Controllers\Base;

use Admin\Controllers\Public\BaseAbstract;

class YearSemesterController extends BaseAbstract
{
    protected $model = 'Models\Base\YearSemester';
    // protected $request = 'Publics\Requests\Base\YearSemesterRequest';
    protected $searchFilter = ['title'];
    protected $with = ["activeStatus"];

}
