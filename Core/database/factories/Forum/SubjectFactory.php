<?php

namespace Database\Factories\Forum;

use Illuminate\Database\Eloquent\Factories\Factory;
use Models\Edu\Forum\Subject;

class SubjectFactory extends Factory
{
    protected $model = Subject::class;
 
    public function definition(): array
    {
        return [
            'title' => fake()->word,
            "lesson_id" => fake()->numberBetween(1,5),
            "creator_id" => fake()->numberBetween(1,10),
            "count_post" => 5,
            "lang" => "en",
        ];
    }
}
