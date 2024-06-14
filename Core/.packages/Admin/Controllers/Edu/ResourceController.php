<?php
namespace Admin\Controllers\Edu;

use Admin\Controllers\Public\BaseAbstract;

class ResourceController extends BaseAbstract
{
    protected $model = "Models\Edu\Resource\Resource";
    // protected $request = "Publics\Requests\Edu\Tools\ResourceRequest";
    protected $with = ['displayStatus','activeStatus'];
    // protected $showWith = ['displayStatus','activeStatus'];
    // protected $destroy = ['users'];
    protected $searchFilter = ["title","duration","link"];
    protected $files = ["name"];
    
    public function init()
    {
        $this->indexQuery = function ($query)
        {
            $query->where("course_id", request()->course);
        };
    }
}
