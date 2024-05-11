<?php

namespace Admin\Controllers\Content;

use Admin\Controllers\Public\BaseAbstract;

class BlogController extends BaseAbstract
{
    protected $model = "Models\Content\Blog";
    protected $request = "Publics\Requests\Content\BlogRequest";
    protected $with = ["subject","activeStatus","creatorAdmin","editorAdmin"];
    protected $showWith = ["imageFiles","videoFiles","keywords","creatorAdmin","editorAdmin","subject"];
    // protected $except = ["images","videos"];
    protected $destroy = ["keywords","Content\BlogFile","Content\BlogComment"];
    protected $files = [
        "image","thumb",
        // "images"=>[ "model"=>"Models\Content\BlogFile", "url"=>"/../public_html/media/blogs/galleries", "file_category_id"=>"7", "fk"=>"blog_id"],
        // "videos"=>[ "model"=>"Models\Content\BlogFile", "url"=>"/../public_html/media/blogs/galleries", "file_category_id"=>"6", "fk"=>"blog_id"]
    ];
    protected $searchFilter = ["title"];
    protected $needles = ["Base\Keyword","Content\BlogSubject"];
    protected $increment = ["blogs"];
    protected $decrement = ["blogs"];

    public function init()
    {
        $this->storeQuery = function ($query)
        {
            (request()->_method == "PUT")? $query->editor_id = $this->user_id : $query->creator_id = $this->user_id;
            $query->text = str_replace("media/blogs", "/media/blogs", request()->text);
            $query->save();
            
        };
       
        $this->showQuery = function ($query)
        {
            $query->withCount('comments');
        };
    }
}
