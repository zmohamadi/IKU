<?php
namespace Models\Edu\Survey;

use Illuminate\Database\Eloquent\Model;
use Database\Factories\Survey\OptionFactory;

class QuestionOption extends Model
{
    protected $guarded = ['created_at', 'updated_at', 'deleted_at', 'id'];
    protected $hidden  = ['created_at', 'updated_at', 'deleted_at'];
    protected $dates   = ['deleted_at'];
    protected $table = 'edu_survey_question_options';

    public static function factory()
    {
        return OptionFactory::new();
    }

    public function question() 
    {
        return $this->belongsTo(\Models\Edu\Survey\Question::class);
    }
}
