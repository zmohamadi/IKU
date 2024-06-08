<?php

namespace Database\Factories\Edu;

use Illuminate\Database\Eloquent\Factories\Factory;
use Models\Edu\LessonCategory;

class LessonCategoryFactory extends Factory
{
    protected $model = LessonCategory::class;
 
    public function definition(): array
    {
        return [
            'title_en' => fake()->word
        ];
    }
}
