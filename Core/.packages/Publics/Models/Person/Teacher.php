<?php
namespace Models\Person;

use Models\Person\User;
use Database\Factories\Person\TeacherFactory;

class Teacher extends User
{
    protected $attributes = [
        'is_teacher' => 1,
    ];
    public static function factory()
    {
        return TeacherFactory::new();
    }
    public function newQuery($excludeDeleted = true)
    {
        // return parent::newQuery($excludeDeleted)->where($this->table.'.role_id', 1);
        $c =  parent::newQuery($excludeDeleted);
        $c =  $c->where(function($q1){
            $q1->where($this->table.'.is_mentor', 0)->where($this->table.'.is_teacher', 1);
            });
        return $c;
    }
    function teach()
    {
        return $this->hasMany(\Models\Edu\Course::class,"instructor_id");
    }

}
