<?php
namespace Models\Person;

use Illuminate\Database\Eloquent\Model;
use Database\Factories\Person\UserFactory;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\CanResetPassword;
use Laravel\Sanctum\HasApiTokens;
use Models\Traits\Base;


class User extends Authenticatable implements MustVerifyEmail
{
    use Base;
    use Notifiable, HasApiTokens;

    protected $guarded = ['created_at', 'updated_at', 'deleted_at', 'id'];
    protected $hidden  = ['created_at', 'updated_at', 'deleted_at',"password"];
    protected $dates   = ['deleted_at'];
    protected $table   = 'users';
    
    public static function factory()
    {
        return UserFactory::new();
    }

    function role()
    {
        return $this->belongsTo(\Models\Person\Role::class);
    }
    function meetings()
    {
        return $this->belongsToMany(\Models\Edu\Meeting::class, 'meeting_users', 'user_id', 'meeting_id');
    }
        
    /**
     * Relations M to N For Notification
     */
    function notifs()
    {
        return $this->belongsToMany(\Models\Edu\Notif\Notification::class,'edu_notification_user', 'user_id', 'notif_id');
    }
    public function notifCourses()
    {
        return $this->hasMany(NotificationUser::class, 'user_id');
    }
    

    public function enrollRequests()
    {
        return $this->hasMany(\Models\Edu\Enroll::class, "user_id");
    }



    /**
     * Relations M to N For Quiz
     */
    function quizAttemps()
    {
        return $this->belongsToMany(\Models\Edu\Quiz\Quiz::class, "edu_quiz_attemp","user_id",'quiz_id');
    }
    function questionsAnswers()
    {
        return $this->belongsToMany(\Models\Edu\Quiz\Question::class, "edu_quiz_answer","user_id",'question_id');
    }
    /**
     * Relations HasMany For Quiz
     */
    function attemps()
    {
        return $this->hasMany(\Models\Edu\Quiz\Attemp::class, 'user_id');
    }
    function answers()
    {
        return $this->hasMany(\Models\Edu\Quiz\Answer::class, 'user_id');
    }

    /**
     * Relations HasMany For homework
     */
    function homeworkAttemps()
    {
        return $this->hasMany(\Models\Edu\HomeWork\Attemp::class, 'user_id');
    }
    function homeworkAnswers()
    {
        return $this->hasMany(\Models\Edu\HomeWork\Answer::class, 'user_id');
    }
}
