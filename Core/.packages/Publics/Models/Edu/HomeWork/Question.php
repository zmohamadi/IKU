<?php
namespace Models\Edu\HomeWork;

use Illuminate\Database\Eloquent\Model;
use Database\Factories\Survey\Question2Factory;
use Models\Traits\Base;

class Question extends Model
{
    use Base;
    const TYPE = [
        'text' => 1,
        'option' => 2,
    ];
    protected $guarded = ['created_at', 'updated_at', 'deleted_at', 'id'];
    protected $hidden  = ['created_at', 'updated_at', 'deleted_at'];
    protected $dates   = ['deleted_at'];
    protected $table   = 'edu_homework_questions';
    
    public static function factory()
    {
        // return QuestionFactory::new();
        return Question2Factory::new();
    }
    protected static function boot() {
        parent::boot();
    
        static::deleting(function($question) { 
            foreach($question->questionOptions as $questionOption){
              $questionOption->delete();
            }
        });
    }

    public function questionOptions() 
    {
        return $this->hasMany(Option::class, 'question_id');
    }
    public function correctOption() 
    {
        return $this->belongsTo(Option::class, 'correct_option_id');
    }
    public function questionType() 
    {
        return $this->belongsTo(\Models\Base\QuestionType::class, 'question_type_id');
    }
    function userAnswers()
    {
        return $this->belongsToMany(\Models\Person\User::class, "edu_homework_answer", 'question_id', "user_id");
    }
    function answers()
    {
        return $this->hasMany(Answer::class, 'question_id');
    }
   
    

}
