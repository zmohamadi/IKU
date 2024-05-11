<?php

namespace Admin\Controllers\Content;

use Admin\Controllers\Public\BaseAbstract;

class SliderController extends BaseAbstract
{
    protected $model = "Models\Content\Slider";
    protected $request = "Publics\Requests\Content\SliderRequest";
    protected $files = ["image"];
    protected $searchFilter = ["title"];

}
