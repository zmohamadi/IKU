<?php
namespace Models\Edu\Notif;

use Illuminate\Database\Eloquent\Model;
use Models\Traits\Base;
use Database\Factories\Edu\NotifFactory;

class Notification extends Model
{
    use Base;

    protected $guarded = ['created_at', 'updated_at', 'deleted_at', 'id'];
    protected $hidden  = ['created_at', 'updated_at', 'deleted_at'];
    protected $dates   = ['deleted_at'];
    protected $table   = 'notifications';

    public static function factory()
    {
        return NotifFactory::new();
    }
    function lesson()
    {
        return $this->belongsTo(\Models\Edu\Lesson::class, 'lesson_id');
    }
    function notifUsers()
    {
        return $this->hasMany(NotificationUser::class, 'notif_id');
    }
    function users()
    {
        return $this->belongsToMany(\Models\Person\User::class ,'edu_notification_user', 'notif_id', 'user_id');
    }
}
