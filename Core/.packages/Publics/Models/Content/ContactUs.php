<?php
namespace Models\Content;

use Illuminate\Database\Eloquent\Model;
use Database\Factories\Content\ContactUsFactory;
use Models\Traits\Base;

class ContactUs extends Model
{
    use Base;
    
    protected $guarded = ['created_at', 'updated_at', 'deleted_at', 'id'];
    protected $hidden  = ['updated_at','deleted_at'];
    protected $dates   = ['deleted_at'];
    protected $table   = 'content_contactus';
    public static function factory()
    {
        return ContactUsFactory::new();
    }

    public function newQuery($excludeDeleted = true)
    {
        return parent::newQuery($excludeDeleted)->where($this->table.'.lang', \App::getLocale());
    }
    public function responder()
    {
        return $this->belongsTo(\Models\Person\AdminUser::class, "responder_id");
    }
    
    public function getCreatedAtAttribute($date)
    {
        if ($date)
        {
            $date = new \Verta($date);
            $date->timezone('Asia/Tehran');
            $dateTime = $date->format('Y/m/d H:i');
            return $dateTime;
        }
        else
        { return null; }
    }
    public function getUpdatedAtAttribute($date)
    {
        if ($date)
        {
            $date = new \Verta($date);
            $date->timezone('Asia/Tehran');
            $dateTime = $date->format('Y/m/d H:i');
            return $dateTime;
        }
        else
        { return null; }
    }
}
