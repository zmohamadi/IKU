<?php
namespace Models\Person;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Models\Person\User;
use Models\Traits\Base;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\CanResetPassword;

class AdminUser extends User
{
    protected $attributes = [
        'admin_role_id' => 2,
    ];
    // protected $guarded = ['created_at', 'updated_at', 'deleted_at', 'id'];
    protected $hidden  = [
        'created_at', 'updated_at', 'deleted_at','password',
        'role_id','is_mentor', 'is_mentee', 'is_event_speaker',
        'level_id','mentorship_topic_id','timezone_id','avg_rate','reviews_count','course_count','order',
        'skills', 'certifications','interest_area','mentorship_objectives','birthdate','biography','work_experience',
    ];

    public function newQuery($excludeDeleted = true)
    {
        $result = parent::newQuery($excludeDeleted)->where($this->table.'.admin_role_id', '>', 0);
        // $result = $result->where($this->table.'.lang', \App::getLocale());
            
        return $result;
    }

    public function role()
    {
        return $this->belongsTo(\Models\ACL\Role::class, 'admin_role_id');
    }
}
