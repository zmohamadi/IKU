<?php
namespace Models\Edu\Notif;

use Illuminate\Database\Eloquent\Model;
use Models\Traits\Base;

class NotificationUser extends Model
{
    use Base;

    protected $guarded = ['created_at', 'updated_at', 'deleted_at', 'id'];
    protected $hidden  = ['created_at', 'updated_at', 'deleted_at'];
    protected $dates   = ['deleted_at'];
    protected $table   = 'notification_user';

    function notif()
    {
        return $this->belongsTo(\Models\Edu\Notif\Notification::class, 'notif_id');
    }
    function user()
    {
        return $this->belongsTo(\Models\Person\User::class, 'user_id');
    }
}
