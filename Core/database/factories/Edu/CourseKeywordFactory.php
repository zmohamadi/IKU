<?php

namespace Database\Factories\Edu;

use Illuminate\Database\Eloquent\Factories\Factory;
use Models\Edu\CourseKeyword;

class CourseKeywordFactory extends Factory
{
    protected $model = CourseKeyword::class;
 
    public function definition(): array
    {
        return [
            "keyword_id" => fake()->numberBetween(1,10),
            "course_id" => fake()->numberBetween(1,10),
        ];
    }
}
