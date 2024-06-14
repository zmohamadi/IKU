<?php

namespace Database\Factories\Quiz;

use Illuminate\Database\Eloquent\Factories\Factory;
use Models\Edu\Quiz\Quiz;

class QuizFactory extends Factory
{
    protected $model = Quiz::class;
 
    public function definition(): array
    {
        return [
            "title" => fake()->word,
            "lesson_id" => fake()->numberBetween(1,10),
            "status_id" => fake()->numberBetween(0,1),
            "date" => fake()->date,
            "time" => fake()->time,
        ];
    }
}
