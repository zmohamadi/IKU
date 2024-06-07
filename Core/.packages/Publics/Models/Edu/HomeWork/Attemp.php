<?php

namespace Models\Edu\HomeWork;

use Illuminate\Database\Eloquent\Model;
use Models\Traits\Base;


class Attemp extends Model
{
    use Base;
    
    protected $guarded = ['updated_at', 'deleted_at', 'id'];
    protected $hidden = [ 'updated_at', 'deleted_at'];
    protected $dates = ['deleted_at'];
    protected $table = 'edu_homework_attemp';

    public function homework()
    {
        return $this->belongsTo(HomeWork::class, "homework_id");
    }
    public function student()
    {
        return $this->belongsTo(\Models\Person\Student::class, "user_id");
    }
    public function user()
    {
        return $this->belongsTo(\Models\Person\User::class, "user_id");
    }
    public function lesson()
    {
        return $this->belongsTo(\Models\Edu\Lesson::class, "lesson_id");
    }
    public function answers()
    {
        return $this->hasMany(Answer::class,"homework_attemp_id");
    }
}
