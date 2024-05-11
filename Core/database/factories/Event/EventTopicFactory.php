<?php

namespace Database\Factories\Event;

use Illuminate\Database\Eloquent\Factories\Factory;
use Models\Event\Topic;

class EventTopicFactory extends Factory
{
    protected $model = Topic::class;
 
    public function definition(): array
    {
        return [
            "title_en"=>fake()->word,
            "status_id" => fake()->numberBetween(0,1),
        ];
    }
}
