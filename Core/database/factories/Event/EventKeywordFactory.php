<?php

namespace Database\Factories\Event;

use Illuminate\Database\Eloquent\Factories\Factory;
use Models\Event\EventKeyword;

class EventKeywordFactory extends Factory
{
    protected $model = EventKeyword::class;
 
    public function definition(): array
    {
        return [
            "event_id" => fake()->numberBetween(1,10),
            "keyword_id" => fake()->numberBetween(1,10),
        ];
    }
}
