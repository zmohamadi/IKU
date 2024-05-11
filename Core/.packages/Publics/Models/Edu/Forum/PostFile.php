<?php
namespace Models\Edu\Forum;

use Illuminate\Database\Eloquent\Model;
use Models\Traits\Base;

class PostFile extends Model
{
    use Base;

    protected $guarded = ['created_at', 'updated_at', 'deleted_at', 'id'];
    protected $hidden  = ['created_at', 'updated_at', 'deleted_at'];
    protected $dates   = ['deleted_at'];
    protected $table   = 'edu_post_files';

    public function post()
    {
        return $this->belongsTo(Post::class, "post_id");
    }
    public function subject()
    {
        return $this->belongsTo(Post::class, "post_subject_id");
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
