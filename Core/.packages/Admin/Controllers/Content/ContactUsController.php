<?php

namespace Admin\Controllers\Content;

use Admin\Controllers\Public\BaseAbstract;

class ContactUsController extends BaseAbstract
{
    protected $model = "Models\Content\ContactUs";
    protected $searchFilter = ["sender_name","sender_email","subject"];
    protected $showWith = ["activeStatus"];
    protected $with = ["activeStatus","responder"];

}
