<?php

namespace Admin\Controllers\Content;

use Admin\Controllers\Public\BaseAbstract;
use Admin\Controllers\PublicController;
use \Models\Content\Blog;

class BlogCommentController extends BaseAbstract
{
    protected $model = "Models\Content\BlogComment";
    protected $request = "Publics\Requests\Content\BlogCommentRequest";
    protected $with = ["blog","responder","confirmer","activeStatus"];
    protected $showWith = ["activeStatus","blog"];
    protected $searchFilter = ["sender_name","sender_email"];

    public function init()
    {
        // $this->indexQuery = function ($query)
        // {
        //     $type = request()->type;
        //     $query->$type();
        // };
        $this->storeQuery = function ($query)
        {
            $query->responder_id = $this->user_id;
            $query->save();               
        };
    }
    /**
     * get details of Comment For View
    */
    public function details($id)
    {
        $item = $this->model::with("confirmStatus","responderUser","confirmUser")->find($id);
        $record_blog = Blog::with("subject","type","keywords")
                        ->select("id","title","subject_id","type_id","created_at")
                        ->find($item->blog_id);
        $other_comments = $this->model::where("id", "!=", $item->id)->where("blog_id", $item->blog_id)
                        ->with("confirmStatus")    
                        ->select("id","sender_name","sender_email","comment","confirm_id","created_at")
                        ->get();
        $item->other_comments = $other_comments;
        $item->record_blog = $record_blog;
        return \response()->json($item);
    }
    /**
     * get statuses of comments Modal
    */
    public function getConfirmShowConfirm($id)
    {
        $item = $this->model::select('id','confirm_id')->find($id);
        $statuses = PublicController::getRecords('Base-Status', 'group_id', 4);
        $data = [
            "item" => $item,
            "statuses" => $statuses,
        ];
        return \Response::json($data);
    }
    /**
     * edit status for comment in Modal
    */
    public function editConfirm($id)
    {
        $this->validate(request(), ["confirm_id" => "required"]);
        $confirm_edit = PublicController::updateRecord('Content-BlogComment', $id, ['confirm_id'=>request()->confirm_id,'confirm_user_id'=>$this->user_id]);
        return \Response::json($confirm_edit);
    }
}


