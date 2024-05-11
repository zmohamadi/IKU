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
    function type()
    {
        return $this->belongsTo(\Models\Base\QuestionType::class, 'type_id');
    }
    function homework()
    {
        return $this->belongsTo(HomeWork::class, 'homework_id');
    }
    function questionOptions()
    {
        return $this->hasMany(Option::class, 'question_id');
    }
   
    

}
