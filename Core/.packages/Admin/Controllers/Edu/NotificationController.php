<?php
namespace Admin\Controllers\Edu;

use Admin\Controllers\Public\BaseAbstract;

class NotificationController extends BaseAbstract
{
    protected $model = "Models\Edu\Notif\Notification";
    protected $request = "Publics\Requests\Edu\Tools\NotificationRequest";
    protected $with = ['displayStatus','activeStatus'];
    // protected $showWith = ['displayStatus','activeStatus'];
    // protected $destroy = ['users'];
    protected $searchFilter = ["title","date_release","date_exp"];
    protected $files = ["thumb"];
    
    public function init()
    {
        $this->indexQuery = function ($query)
        {
            $query->where("course_id", request()->course);
        };
    }
}
