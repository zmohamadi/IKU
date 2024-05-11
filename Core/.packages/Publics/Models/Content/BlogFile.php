<?php
namespace Models\Content;

use Illuminate\Database\Eloquent\Model;
use Models\Traits\Base;

class BlogFile extends Model
{
    use Base;

    protected $guarded = ['created_at', 'updated_at', 'deleted_at', 'id'];
    protected $hidden  = ['created_at', 'updated_at', 'deleted_at'];
    protected $dates   = ['deleted_at'];
    protected $table   = 'content_blog_files';

    public function blog()
    {
        return $this->belongsTo(Blog::class, "blog_id");
    }
    public function blogSubject()
    {
        return $this->belongsTo(Blog::class, "blog_subject_id");
    }
    public function type()
    {
        return $this->belongsTo(\Models\Base\Type::class, "file_type_id");
    }
    public function fileCategory()
    {
        return $this->belongsTo(\Models\Base\FileCategory::class, "file_category_id");
    }
}
