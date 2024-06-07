<?php
namespace Models\Edu\Meet;

use Illuminate\Database\Eloquent\Model;
use Database\Factories\Edu\MeetingFactory;

class MeetingUser extends Model
{
    
    protected $table   = 'meeting_user';
    public $timestamps = false;
    
    public static function factory()
    {
        return MeetingUserFactory::new();
    }


}
