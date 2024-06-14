<?php

namespace Database\Factories\HomeWork;

use Illuminate\Database\Eloquent\Factories\Factory;
use Models\Edu\HomeWork\HomeWork;

class HomeWorkFactory extends Factory
{
    protected $model = HomeWork::class;
 
    public function definition(): array
    {
        return [
            "text" => fake()->paragraph,
            "lesson_id" => fake()->numberBetween(1,10),
            "status_id" => fake()->numberBetween(0,1),
            "type_id" => fake()->numberBetween(1,2),
            "start_date" => fake()->date,
            "end_date" => fake()->date,
            "score" => fake()->numberBetween(1,10),
            "answer_count" => 1,
            "answer_correcting_count" => 0,
        ];
    }
}
