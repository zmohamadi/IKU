<?php
namespace Models\Edu\HomeWork;

use Illuminate\Database\Eloquent\Model;
use Database\Factories\HomeWork\HomeWorkFactory;
use Models\Traits\Base;

class HomeWork extends Model
{
    use Base;
  
    protected $guarded = ['created_at', 'updated_at', 'deleted_at', 'id'];
    protected $hidden  = ['updated_at', 'deleted_at'];
    protected $dates   = ['deleted_at'];
    protected $table   = 'homeworks';
    
    protected $casts = [
        'created_at' => 'datetime:d-m-Y H:i',
    ];

    public static function factory()
    {
        return HomeWorkFactory::new();
    }


    public function lesson()
    {
        return $this->belongsTo(\Models\Edu\Lesson::class, 'lesson_id');
    }
    public function questions()
    {
        return $this->hasMany(Question::class,"homework_id");
    }
    function userAttemps()
    {
        return $this->belongsToMany(\Models\Person\User::class, "edu_homework_attemp",'homework_id',"user_id");
    }
    function attemps()
    {
        return $this->hasMany(Attemp::class, 'homework_id');
    }
    public function creator()
    {
        return $this->belongsTo(\Models\Person\User::class, 'creator_id');
    }

}
