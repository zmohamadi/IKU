<?php
namespace Models\Content;

use Illuminate\Database\Eloquent\Model;
use Database\Factories\Content\BlogKeywordFactory;
use Models\Traits\Base;

class BlogKeyword extends Model
{
    use Base;
    
    protected $guarded = ['created_at', 'updated_at', 'deleted_at', 'id'];
    protected $hidden  = ['created_at', 'updated_at', 'deleted_at'];
    protected $dates   = ['deleted_at'];
    protected $table   = 'content_blog_keyword';
    public static function factory()
    {
        return BlogKeywordFactory::new();
    }
    
    public function blog()
    {
        return $this->belongsTo(\Models\Content\Blog::class, "blog_id");
    }
    public function keyword()
    {
        return $this->belongsTo(\Models\Base\Keyword::class, "keyword_id");
    }
}
