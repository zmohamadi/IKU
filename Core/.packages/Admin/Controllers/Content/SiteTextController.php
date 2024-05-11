<?php

namespace Admin\Controllers\Content;

use Admin\Controllers\Public\BaseAbstract;
use Models\Content\SiteText;

class SiteTextController extends BaseAbstract
{
    protected $model = "Models\Content\SiteText";
    protected $request = "Publics\Requests\Content\SiteTextRequest";
    protected $with = ["activeStatus"];
    protected $except = ["lang"];
    protected $files = ["image"];
    protected $searchFilter = ["title_fa"];
}
