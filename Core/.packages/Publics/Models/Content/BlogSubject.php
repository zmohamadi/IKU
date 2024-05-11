<?php
namespace Models\Content;

use Illuminate\Database\Eloquent\Model;
use Database\Factories\Content\BlogSubjectFactory;
use Models\Traits\Base;

class BlogSubject extends Model
{
    use Base;
    
    protected $guarded = ['created_at', 'updated_at', 'deleted_at', 'id'];
    protected $hidden  = ['created_at', 'updated_at', 'deleted_at'];
    protected $dates   = ['deleted_at'];
    protected $table   = 'content_blog_subjects';
    public static function factory()
    {
        return BlogSubjectFactory::new();
    }

    public function blogs()
    {
        return $this->hasMany(Blog::class, "subject_id");
    }
    /**
     * Scopes
     */
}
