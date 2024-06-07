<?php
namespace Models\Edu\Meet;

use Illuminate\Database\Eloquent\Model;
use Database\Factories\Edu\MeetingFactory;
use Models\Traits\Base;

class Meeting extends Model
{
    use Base;
    
    protected $guarded = ['created_at', 'updated_at', 'deleted_at', 'id'];
    protected $hidden  = ['created_at', 'updated_at', 'deleted_at'];
    protected $dates   = ['deleted_at'];
    protected $table   = 'meetings';
    public static function factory()
    {
        return MeetingFactory::new();
    }

    function files()
    {
        return $this->hasMany(ArchiveFile::class);
    }

    function lesson()
    {
        return $this->belongsTo(\Models\Edu\Lesson::class);
    }

    function students()
    {
        return $this->belongsToMany(\Models\Person\Student::class ,'edu_meeting_user', 'meeting_id', 'student_id');
    }


}
