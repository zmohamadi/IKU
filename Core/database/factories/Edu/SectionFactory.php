<?php

namespace Database\Factories\Edu;

use Illuminate\Database\Eloquent\Factories\Factory;
use Models\Edu\Section\Section;

class SectionFactory extends Factory
{
    protected $model = Section::class;
 
    public function definition(): array
    {
        return [
            'title' => fake()->sentence(4),
            "description" => fake()->text,
            "duration" => fake()->time,
            "lesson_id" => fake()->numberBetween(1,10),
            "status_id" => fake()->numberBetween(0,1),
            "youtube" => 'https://www.youtube.com/embed/G57-56fnMsY?si=tbLqImdDRXzYLwek',
        ];
    }
}
