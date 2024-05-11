<?php

namespace Database\Factories\Event;

use Illuminate\Database\Eloquent\Factories\Factory;
use Models\Event\Event;

class EventFactory extends Factory
{
    protected $model = Event::class;
 
    public function definition(): array
    {
        return [
            "title"=>fake()->word,
            "is_online"  => fake()->numberBetween(0,1),
            "room"  => fake()->url,
            "date_time_holding"  =>fake()->dateTime,
            "date_time_register"  => fake()->dateTime,
            "thumb"  => fake()->randomElement(['1.jpg', '2.jpg','3.jpg']),
            "description" => fake()->sentence,
            "lang"  => "en",
            "status_id" => fake()->numberBetween(0,1),
        ];
    }
}
