<?php
namespace Models\Edu\Survey;

use Illuminate\Database\Eloquent\Model;
use Database\Factories\Survey\QuestionFactory;
use Database\Factories\Survey\Question2Factory;

class Question extends Model
{
    protected $guarded = ['created_at', 'updated_at', 'deleted_at', 'id'];
    protected $hidden  = ['created_at', 'updated_at', 'deleted_at'];
    protected $dates   = ['deleted_at'];
    protected $table = 'edu_survey_questions';

   
    public static function factory()
    {
        // return QuestionFactory::new();
        return Question2Factory::new();
    }

    public function survey() 
    {
        return $this->belongsTo(\Models\Edu\Survey\Survey::class);
    }

    public function questionOptions() 
    {
        return $this->hasMany(\Models\Edu\Survey\QuestionOption::class);
    }

    public function questionType() 
    {
        return $this->belongsTo(\Models\Base\QuestionType::class, 'type_id');
    }

    public function users() 
    {
        return $this->belongsToMany(\Models\Person\User::class, 'answer', 'user_id', 'question_id');
    }

    public function creator()
    {
        return $this->belongsTo(\Models\Person\User::class, 'creator_id');
    }
}