<?php

namespace Database\Factories\HomeWork;

use Illuminate\Database\Eloquent\Factories\Factory;
use Models\Edu\HomeWork\Option;

class OptionFactory extends Factory
{
    protected $model = Option::class;
 
    public function definition(): array
    {
        return [
            "title" => fake()->word,
            "homework_id" => fake()->numberBetween(1,10)
        ];
    }
}
