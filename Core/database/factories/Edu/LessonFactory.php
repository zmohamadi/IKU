<?php

namespace Database\Factories\Edu;

use Illuminate\Database\Eloquent\Factories\Factory;
use Models\Edu\Lesson;

class LessonFactory extends Factory
{
    protected $model = Lesson::class;
 
    public function definition(): array
    {
        return [
            'title' => fake()->sentence(4),
            "thumbnail" => fake()->randomElement(['1.jpg', '2.jpg','3.jpg']),
            "level_id" => fake()->numberBetween(1,4),
            "instructor_id" => fake()->numberBetween(1,5),
            "objectives" => fake()->paragraph,
            "description" => fake()->text,
            "start_date" => fake()->date,
            "end_date" => fake()->date,
            "registration_end_date" => fake()->date,
            "top_score" => fake()->numberBetween(1,100),
            "average_score" => fake()->numberBetween(1,100),
            "category_id" => fake()->numberBetween(1,5),
            "status_id" => fake()->numberBetween(0,1),
        ];
    }
}
