<?php

namespace Database\Factories\Event;

use Illuminate\Database\Eloquent\Factories\Factory;
use Models\Event\EventUser;

class EventUserFactory extends Factory
{
    protected $model = EventUser::class;
 
    public function definition(): array
    {
        return [
            "event_id" => fake()->numberBetween(1,10),
            "user_id" => fake()->numberBetween(1,50),
            "role_id"  => "1",
        ];
    }
}
