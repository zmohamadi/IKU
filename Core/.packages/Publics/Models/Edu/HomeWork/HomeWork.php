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
    protected $table   = 'edu_homeworks';
    
    protected $casts = [
        'created_at' => 'datetime:d-m-Y H:i',
    ];

    public static function factory()
    {
        return HomeWorkFactory::new();
    }


    function asnwers()
    {
        return $this->hasMany(Answer::class, 'homework_id');
    }
    function userAsnwers()
    {
        return $this->belongsToMany(HomeWorkAnswer::class, "edu_homework_answers",'homework_id',"user_id");

    }

    public function questions()
    {
        return $this->hasMany(Question::class,"homework_id");
    }

    public function course()
    {
        return $this->belongsTo(\Models\Edu\Course::class);
    }

    public function creator()
    {
        return $this->belongsTo(\Models\Person\User::class, 'creator_id');
    }

}
