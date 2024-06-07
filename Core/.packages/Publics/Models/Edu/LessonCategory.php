<?php
namespace Models\Edu;

use Illuminate\Database\Eloquent\Model;
use Database\Factories\Edu\LessonCategoryFactory;
use Models\Traits\Base;

class LessonCategory extends Model
{
    use Base;
    
    protected $guarded = ['created_at', 'updated_at', 'deleted_at', 'id'];
    protected $hidden  = ['created_at', 'updated_at', 'deleted_at'];
    protected $dates   = ['deleted_at'];
    protected $table   = 'lesson_categories';
    public static function factory()
    {
        return LessonCategoryFactory::new();
    }

    function lessons()
    {
        return $this->hasMany(\Models\Edu\Lesson::class,"category_id");
    }


}
