<?php

namespace Database\Factories\HomeWork;

use Illuminate\Database\Eloquent\Factories\Factory;
use Models\Edu\HomeWork\Answer;

class AnswerFactory extends Factory
{
    protected $model = Answer::class;
 
    public function definition(): array
    {
        return [
            "answer" => fake()->paragraph,
            "user_id" => fake()->numberBetween(5,10),
            "homework_id" => fake()->numberBetween(1,10),
            "lesson_id" => fake()->numberBetween(1,10),
            "status_id" => fake()->numberBetween(0,1),
            "mark" => fake()->numberBetween(1,10),
        ];
    }
}
