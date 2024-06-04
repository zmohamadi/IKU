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
    protected $table   = 'person_users';
    
    public static function factory()
    {
        return UserFactory::new();
    }

    function meetings()
    {
        return $this->belongsToMany(\Models\Edu\Meeting::class, 'meeting_users', 'user_id', 'meeting_id');
    }
    function role()
    {
        return $this->belongsTo(\Models\Person\Role::class);
    }
    public function adminRole()
    {
        return $this->belongsTo(\Models\ACL\Role::class, 'admin_role_id');
    }
    function timezone()
    {
        return $this->belongsTo(\Models\Person\Timezone::class);
    }
    function level()
    {
        return $this->belongsTo(\Models\Edu\EducationLevel::class);
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
    /**
     * Relations  For Mentorship
     */
    public function mentorshipTopic() // Topic of Mentorship
    {
        return $this->belongsTo(\Models\Mentorship\Topic::class, "mentorship_topic_id");
    }
    public function presentCalendars() // Present a mentor in Mentorship
    {
        return $this->hasMany(\Models\Mentorship\Calendar::class, "mentor_id");
    }
    public function acceptedCalendars() // be accepted a mentee in Mentorship
    {
        return $this->hasMany(\Models\Mentorship\Calendar::class, "mentee_id");
    }
    function assessors() // ارزیابی کننده
    {
        return $this->belongsToMany(\Models\Person\User::class, 'mentorship_evaluates', "mentee_id", "mentor_id")->withPivot("score");
    }
    function revieweds() // ارزیابی شده
    {
        return $this->belongsToMany(\Models\Person\User::class, 'mentorship_evaluates', "mentor_id", "mentee_id")->withPivot("score");
    }
    function menteeEvaluates() // ارزیابی کننده
    {
        return $this->hasMany(\Models\Mentorship\Evaluate::class, "mentee_id");
    }
    function mentorEvaluates() // ارزیابی شده
    {
        return $this->hasMany(\Models\Mentorship\Evaluate::class, "mentor_id");
    }
    function mentorCalendars() // Calendars of mentor
    {
        return $this->belongsToMany(\Models\Mentorship\Calendar::class, 'mentorship_requests', "mentor_id", "calendar_id");
    }
    function menteeCalendars() //  Calendars of mentee
    {
        return $this->belongsToMany(\Models\Mentorship\Calendar::class, 'mentorship_requests', "mentee_id", "calendar_id");
    }
    public function mentorRequests()
    {
        return $this->hasMany(\Models\Mentorship\Request::class, "mentor_id");
    }
    public function menteeRequests()
    {
        return $this->hasMany(\Models\Mentorship\Request::class, "mentee_id");
    }
    /**
     * Relations HasMany For Event
     */
    public function eventUsers()
    {
        return $this->hasMany(\Models\Event\EventUser::class, "user_id");
    }
    public function speakerEvents()
    {
        return $this->hasMany(\Models\Event\EventUser::class, "user_id")->where("is_speaker", 1);
    }
    public function registrantEvents()
    {
        return $this->hasMany(\Models\Event\EventUser::class, "user_id")->where("is_speaker", 0);
    }
    public function presenceEvents()
    {
        return $this->hasMany(\Models\Event\EventUser::class, "user_id")->whereNotNull("date_time_presence");
    }
    /**
     * Relations M to N For Event
     */
    public function speakers()
    {
        return $this->belongsToMany(\Models\Event\Event::class, "event_user", "user_id", "event_id")->withPivot("is_speaker")->wherePivot("is_speaker", 1);
    }
    public function registrants()
    {
        return $this->belongsToMany(\Models\Event\Event::class, "event_user", "user_id", "event_id")->withPivot("is_speaker")->wherePivot("is_speaker", 0);
    }
    public function presences()
    {
        return $this->belongsToMany(\Models\Event\Event::class, "event_user_presence", "user_id", "event_id");
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
