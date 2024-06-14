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
    ];
    protected $guarded = ['created_at', 'updated_at', 'deleted_at', 'id'];
    protected $hidden  = ['deleted_at'];
    protected $dates   = ['deleted_at'];
    protected $table   = 'courses';
    // protected $primaryKey = 'code';

    // protected static function booted(): void
    // {
    //     static::deleting(function(Course $course) { // before delete() method call this
    //         $course->quizs()->delete();
    //     });
    // }

    public static function factory()
    {
        return CourseFactory::new();
    }
   
   
    function presenteds()
    {
        return $this->hasMany(\Models\Edu\CoursesPresented::class,'less_id');
    }
    function category()
    {
        return $this->belongsTo(CourseCategory::class,"category_id");
    }
    function system()
    {
        return $this->belongsTo(\Models\Base\System::class,"system_id");
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
   

}
