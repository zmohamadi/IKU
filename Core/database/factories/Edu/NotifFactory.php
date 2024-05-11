<?php

namespace Database\Factories\Edu;

use Illuminate\Database\Eloquent\Factories\Factory;
use Models\Edu\Notif\Notification;

class NotifFactory extends Factory
{
    protected $model = Notification::class;
 
    public function definition(): array
    {
        return [
            "title"=>fake()->sentence,
            "course_id"  => fake()->numberBetween(1,10),
            "date_release"  =>fake()->date,
            "date_exp"  =>fake()->date,
            "thumb"  => fake()->randomElement(['1.jpg', '2.jpg','3.jpg']),
            "description" => fake()->text,
            "lang"  => "en",
            "display_status_id"  => 1,
            "status_id" => fake()->numberBetween(0,1)
        ];
    }
}
