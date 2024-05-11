<?php
namespace Models\Edu\HomeWork;

use Illuminate\Database\Eloquent\Model;
use Database\Factories\HomeWork\OptionFactory;
use Models\Traits\Base;

class Option extends Model
{
    use Base;
    
    protected $guarded = ['created_at', 'updated_at', 'deleted_at', 'id'];
    protected $hidden  = ['created_at', 'updated_at', 'deleted_at'];
    protected $dates   = ['deleted_at'];
    protected $table   = 'edu_homework_options';
    
    public static function factory()
    {
        return OptionFactory::new();
    }
    function question()
    {
        return $this->belongsTo(Question::class, 'question_id');
    }

}
