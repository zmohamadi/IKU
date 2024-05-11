<?php
namespace Models\Edu;

use Illuminate\Database\Eloquent\Model;
use Models\Traits\Base;

class CourseLevel extends Model
{
    use Base;

    protected $guarded = ['created_at', 'updated_at', 'deleted_at', 'id'];
    protected $hidden  = ['created_at', 'updated_at', 'deleted_at'];
    protected $dates   = ['deleted_at'];
    protected $table   = 'edu_course_levels';

    function courses()
    {
        return $this->hasMany(\Models\Edu\Course::class);
    }


}
