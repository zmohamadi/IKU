<?php

namespace Database\Factories\Edu;

use Illuminate\Database\Eloquent\Factories\Factory;
use Models\Edu\Enroll;

class EnrollFactory extends Factory
{
    protected $model = Enroll::class;
 
    public function definition(): array
    {
        return [
            "user_id" => fake()->numberBetween(5,10),
                "role_id" => 2,
                "course_id" => fake()->numberBetween(1,10),
                "status_id" => fake()->numberBetween(0,3),
        ];
    }
}
