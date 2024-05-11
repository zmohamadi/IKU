<?php
namespace Models\Content;

use Illuminate\Database\Eloquent\Model;
use Database\Factories\Content\BlogCommentFactory;
use Models\Traits\Base;

class BlogComment extends Model
{
    use Base;
    
    protected $guarded = ['created_at', 'updated_at', 'deleted_at', 'id'];
    protected $hidden  = ['updated_at', 'deleted_at'];
    protected $dates   = ['deleted_at'];
    protected $table   = 'content_blog_comments';
    
    public static function factory()
    {
        return BlogCommentFactory::new();
    }
    
    public function newQuery($excludeDeleted = true)
    {
        return parent::newQuery($excludeDeleted)->where($this->table.'.lang', \App::getLocale());
    }
    public function blog()
    {
        return $this->belongsTo(Blog::class, "blog_id");
    }
    public function responder()
    {
        return $this->belongsTo(\Models\Person\AdminUser::class, "responder_id");
    }
    public function confirmer()
    {
        return $this->belongsTo(\Models\Person\AdminUser::class, "confirmer_id");
    }
    /**
     * Dates
     */
    public function getCreatedAtAttribute($date)
    {
        if ($date)
        {
            $url = \URL::current();
            if(strpos($url, 'mastership'))
            {
                $date = new \Verta($date);
                $dateTime = $date->format('Y-m-d H:m');
                return $dateTime;
            }
        }
        else
        { return null; }
    }
    public function getUpdatedAtAttribute($date)
    {
        if ($date)
        {
            $url = \URL::current();
            if(strpos($url, 'mastership'))
            {
                $date = new \Verta($date);
                $dateTime = $date->format('Y-m-d H:m');
                return $dateTime;
            }
        }
        else
        { return null; }
    }
    /**
     * Scopes
     */
    public function scopeAll($query)
    {
        return $query;
    }
    public function scopeAwaitingConfirm($query)
    {
        return $query->where('confirm_id', '==', 0)->where('confirm_user_id', null);
    }
    public function scopeAwaitingReply($query)
    {
        return $query->where('reply', null)->where('responder_user_id', null);
    }
}
