<?php

namespace Database\Factories\Event;

use Illuminate\Database\Eloquent\Factories\Factory;
use Models\Event\EventUserPresence;

class EventUserPresenceFactory extends Factory
{
    protected $model = EventUserPresence::class;
 
    public function definition(): array
    {
        return [
            "event_id" => fake()->numberBetween(1,10),
            "user_id" => fake()->numberBetween(5,10),
        ];
    }
}
