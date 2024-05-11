<?php
namespace Models\Person;

use Models\Person\User;
use Database\Factories\Person\ManagerFactory;

class SessionManager extends User
{
    protected $attributes = [
        'role_id' => 3
    ];
    public static function factory()
    {
        return ManagerFactory::new();
    }


    public function newQuery($excludeDeleted = true)
    {
        return parent::newQuery($excludeDeleted)->where($this->table.'.role_id', 3);
    }
    function enroll()
    {
        return $this->hasMany(\Models\Edu\Enroll::class,'user_id');
    }
}
