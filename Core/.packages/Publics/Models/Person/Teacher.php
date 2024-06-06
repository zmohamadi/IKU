<?php
namespace Models\Person;

use Models\Person\User;
use Database\Factories\Person\TeacherFactory;

class Teacher extends User
{
    protected $attributes = ['role_id' => 2];
    public static function factory()
    {
        return TeacherFactory::new();
    }
    public function newQuery($excludeDeleted = true)
    {
        $c =  parent::newQuery($excludeDeleted);
        return $c->where(function($q){
                $q->where($this->table.'.role_id',2);
            });
    }
    function teach()
    {
        return $this->hasMany(\Models\Edu\Course::class,"instructor_id");
    }

}
