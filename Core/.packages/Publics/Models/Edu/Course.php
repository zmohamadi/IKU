<?php
namespace Models\Edu;

use Illuminate\Database\Eloquent\Model;
use Database\Factories\Edu\CourseFactory;
use Models\Traits\Base;

class Course extends Model
{
    
    use Base;
    const ROLES = [
        'Teacher' => 1,
        'Student' => 2,
        'Manager' => 3,
    ];
    protected $guarded = ['created_at', 'updated_at', 'deleted_at', 'id'];
    protected $hidden  = ['deleted_at'];
    protected $dates   = ['deleted_at'];
    protected $table   = 'edu_courses';

    public static function factory()
    {
        return CourseFactory::new();
    }
    // public function newQuery($excludeDeleted = true)
    // {
    //     if(!\Auth::guard('admin')->check()){
    //         return parent::newQuery($excludeDeleted)->where($this->table.'.lang', \App::getLocale());
    //     }
    // }
    function teach()
    {
        return $this->belongsTo(\Models\Person\User::class,"instructor_id");
    }
    function managers()
    {
        return $this->belongsToMany(\Models\Person\User::class,'edu_enroll', 'course_id', 'user_id');

    }
    function students()
    {
        return $this->belongsToMany(\Models\Person\User::class,'edu_enroll',  'course_id' ,'user_id')->withPivot('status_id');
    }
    function users()
    {
        return $this->belongsToMany(\Models\Person\User::class,'edu_enroll',  'course_id' ,'user_id');
    }
    function enroll()
    {
        return $this->hasMany(\Models\Edu\Enroll::class,'course_id');
    }
    function category()
    {
        return $this->belongsTo(CourseCategory::class,"category_id");
    }

    function level()
    {
        return $this->belongsTo(CourseLevel::class);
    }
   

    function meetings()
    {
        return $this->hasMany(Meet\Meeting::class);
    }
    function contents()
    {
        return $this->hasMany(Section\Section::class);
    }
    function homeworks()
    {
        return $this->hasMany(HomeWork\HomeWork::class);
    }
    function resources()
    {
        return $this->hasMany(Resource\Resource::class);
    }
    function notifs()
    {
        return $this->hasMany(Notif\Notification::class);
    }
    function surveys()
    {
        return $this->hasMany(Survey\Survey::class);
    }
    function quizs()
    {
        return $this->hasMany(\Models\Edu\Quiz\Quiz::class, "course_id");
    }
    function forumSubjects()
    {
        return $this->hasMany(Forum\Subject::class);
    }
    public function keywords()
    {
        return $this->belongsToMany(\Models\Base\Keyword::class, "edu_course_keyword", "course_id", "keyword_id");
    }
    
    public function getCreatedAtAttribute($date)
    {
        return \Carbon\Carbon::parse($date)->format('d M Y');
    }
    /**
     * Dates
     */
    // public function getCreatedAtAttribute($date)
    // {
    //     if ($date)
    //     {
    //         $url = \URL::current();
    //         if(strpos($url, 'mastership'))
    //         {
    //             $date = new \Verta($date);
    //             $dateTime = $date->format('Y-m-d H:m');
    //             return $dateTime;
    //         }else{
    //             return \Carbon\Carbon::parse($date)->format('d M Y');
    //         }
    //     }
    //     else
    //     { return null; }
    // }


}
