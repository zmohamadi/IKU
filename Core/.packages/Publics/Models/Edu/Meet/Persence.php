<?php
namespace Models\Edu\Meet;

use Illuminate\Database\Eloquent\Model;
use Database\Factories\Edu\MeetingUserFactory;

class Persence extends Model
{
    
    protected $table   = 'edu_meeting_user';
    public static function factory()
    {
        return MeetingUserFactory::new();
    }

}
