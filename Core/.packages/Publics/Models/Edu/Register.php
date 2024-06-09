<?php
namespace Models\Edu;

use Illuminate\Database\Eloquent\Model;

class Register extends Model
{   
    protected $table   = 'lesson_users';
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
    function lesson()
    {
        return $this->belongsTo(Lesson::class, 'less_id');
    }
}
