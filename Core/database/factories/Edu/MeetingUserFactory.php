<?php

namespace Database\Factories\Edu;

use Illuminate\Database\Eloquent\Factories\Factory;
use Models\Edu\Meet\MeetingUser;

class MeetingUserFactory extends Factory
{
    protected $model = MeetingUser::class;
 
    public function definition(): array
    {
        return [
            "student_id" => fake()->numberBetween(5,10),
            "meeting_id" => fake()->numberBetween(1,10),
        ];
    }
}
