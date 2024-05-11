<?php

namespace Database\Factories\HomeWork;

use Illuminate\Database\Eloquent\Factories\Factory;
use Models\Edu\HomeWork\HomeWorkAnswer;

class HomeWorkAnswerFactory extends Factory
{
    protected $model = HomeWorkAnswer::class;
 
    public function definition(): array
    {
        return [
            "user_id" => fake()->numberBetween(10,50),
            "mark" => fake()->numberBetween(1,10),
            "answer" => fake()->word(5,10),
            "homework_id" => fake()->numberBetween(1,10)
        ];
    }
}
