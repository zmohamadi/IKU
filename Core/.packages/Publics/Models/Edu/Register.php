<?php
namespace Models\Edu;

use Illuminate\Database\Eloquent\Model;

class Register extends Model
{   
    protected $table   = 'course_users';
    protected $guarded = ['created_at', 'updated_at', 'deleted_at', 'id'];
    protected $hidden  = ['updated_at', 'deleted_at'];
    protected $dates   = ['deleted_at'];
    const ROLES = [
        'Teacher' => 1,
        'Student' => 2,
    ];
    /**
     * Relations User
     */
    function student()
    {
        return $this->belongsTo(\Models\Edu\User::class, 'user_id')->where("role_id", 2);
    }
    function course()
    {
        return $this->belongsTo(Course::class, 'less_id');
    }
}
