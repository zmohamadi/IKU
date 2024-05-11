<?php
namespace Models\Edu\HomeWork;

use Illuminate\Database\Eloquent\Model;
use Database\Factories\HomeWork\HomeWorkAnswerFactory;
use Models\Traits\Base;

class HomeWorkAnswer extends Model
{
    use Base;

    protected $guarded = ['created_at', 'updated_at', 'deleted_at', 'id'];
    protected $hidden = ['created_at', 'updated_at', 'deleted_at'];
    protected $dates = ['deleted_at'];
    protected $table = 'edu_homework_answers';

    public static function factory()
    {
        return HomeWorkAnswerFactory::new();
    }

}
