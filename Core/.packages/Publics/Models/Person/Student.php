<?php
namespace Models\Person;

use Models\Person\User;
use Database\Factories\Person\StudentFactory;

class Student extends User
{
    protected $attributes = [ 'role_id' => 3];
    public static function factory()
    {
        return StudentFactory::new();
    }


    public function newQuery($excludeDeleted = true)
    {
        $c =  parent::newQuery($excludeDeleted);
        return $c->where(function($q){
                $q->where($this->table.'.role_id',3);
            });
    }
    function lessons()
    {
        return $this->belongsToMany(\Models\Edu\Lesson::class,'edu_enroll','user_id','lesson_id');
    }
    function enroll()
    {
        return $this->hasMany(\Models\Edu\Enroll::class,'user_id');
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
}
