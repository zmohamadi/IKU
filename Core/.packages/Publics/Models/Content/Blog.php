<?php
namespace Models\Content;

use Illuminate\Database\Eloquent\Model;
use Database\Factories\Content\BlogFactory;
use Models\Traits\Base;

class Blog extends Model
{
    use Base;
    
    protected $guarded = ['updated_at', 'deleted_at', 'id'];
    protected $hidden  = ['deleted_at'];
    protected $dates   = ['deleted_at'];
    protected $table   = 'content_blogs';
    public static function factory()
    {
        return BlogFactory::new();
    }

    public function newQuery($excludeDeleted = true)
    {
        return parent::newQuery($excludeDeleted)->where($this->table.'.lang', \App::getLocale());
    }
    public function creatorAdmin()
    {
        return $this->belongsTo(\Models\Person\AdminUser::class, "creator_id");
    }
    public function editorAdmin()
    {
        return $this->belongsTo(\Models\Person\AdminUser::class, "editor_id");
    }
    public function subject()
    {
        return $this->belongsTo(BlogSubject::class, "subject_id");
    }
    public function files()
    {
        return $this->hasMany(BlogFile::class, "blog_id");
    }
    public function comments()
    {
        return $this->hasMany(BlogComment::class, "blog_id");
    }
    public function imageFiles()
    {
        return $this->hasMany(BlogFile::class, "blog_id")->where("file_type_id", 1);
    }
    public function videoFiles()
    {
        return $this->hasMany(BlogFile::class, "blog_id")->where("file_type_id", 3);
    }
    public function keywords()
    {
        return $this->belongsToMany(\Models\Base\Keyword::class, "content_blog_keyword", "blog_id", "keyword_id");
    }
    /**
     * Dates
     */
    public function getCreatedAtAttribute($date)
    {
        return \Carbon\Carbon::parse($date)->format('d M Y');
        // if ($date)
        // {
        //     $url = \URL::current();
        //     if(strpos($url, 'mastership'))
        //     {
        //         $date = new \Verta($date);
        //         $dateTime = $date->format('Y-m-d H:m');
        //         return $dateTime;
        //     }else{
        //         return \Carbon\Carbon::parse($date)->format('d M Y');
        //     }
        // }
        // else
        // { return null; }
    }
}
