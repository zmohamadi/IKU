<?php
namespace Models\Edu;

use Illuminate\Database\Eloquent\Model;
use Database\Factories\Edu\EnrollFactory;
use Models\Traits\Base;

class CoursePresented extends Model
{
    use Base;
   
    protected $guarded = ['created_at', 'updated_at', 'deleted_at', 'id'];
    protected $hidden  = ['updated_at', 'deleted_at'];
    protected $dates   = ['deleted_at'];
    protected $table   = 'course_presented';
    const ROLES = [
        'Teacher' => 1,
        'Student' => 2,
    ];

    function course()
    {
        return $this->belongsTo(\Models\Edu\Course::class,'less_id');
    }
    function teacher()
    {
        return $this->belongsTo(\Models\Person\User::class);
    }
    function yearSemester()
    {
        return $this->belongsTo(\Models\Base\YearSemester::class);
    }
    function registers()
    {
        return $this->hasMany(\Models\Person\User::class);
    }

}
