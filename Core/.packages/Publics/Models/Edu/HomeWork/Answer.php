<?php

namespace Models\Edu\HomeWork;

use Illuminate\Database\Eloquent\Model;
use Database\Factories\HomeWork\AnswerFactory;
use Models\Traits\Base;


class Answer extends Model
{
    use Base;
    
    protected $guarded = ['updated_at', 'deleted_at', 'id'];
    protected $hidden = [ 'updated_at', 'deleted_at'];
    protected $dates = ['deleted_at'];
    protected $table = 'edu_homework_answers';

    public static function factory()
    {
        return AnswerFactory::new();
    }

    public function files()
    {
        return $this->hasMany(AnswerHomeWorkFile::class);
    }
    
    public function question()
    {
        return $this->belongsTo(Question::class, "question_id");
    }
    public function student()
    {
        return $this->belongsTo(\Models\Person\Student::class,"user_id");
    }
    public function attemp()
    {
        return $this->belongsTo(Attemp::class,"homework_attemp_id");
    }
}
