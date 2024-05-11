<?php
namespace Models\Edu;

use Illuminate\Database\Eloquent\Model;
use Database\Factories\Edu\CourseKeywordFactory;

class CourseKeyword extends Model
{
    protected $table   = 'edu_course_keyword';
    public $timestamps = false;
    public static function factory()
    {
        return CourseKeywordFactory::new();
    }

    function course()
    {
        return $this->belongsTo(\Models\Event\Event::class, 'course_id');
    }
    function keyword()
    {
        return $this->belongsTo(\Models\Base\Keyword::class, 'keyword_id');
    }
}
