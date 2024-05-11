<?php

namespace Admin\Controllers\Base;

use Admin\Controllers\Public\BaseAbstract;

class TimezoneController extends BaseAbstract
{
    protected $model = 'Models\Person\Timezone';
    protected $request = 'Publics\Requests\Person\TimezoneRequest';
    protected $searchFilter = ['title'];
    protected $with = ["activeStatus"];

}
