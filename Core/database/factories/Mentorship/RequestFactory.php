<?php

namespace Database\Factories\Mentorship;

use Illuminate\Database\Eloquent\Factories\Factory;
use Models\Mentorship\Request;

class RequestFactory extends Factory
{
    protected $model = Request::class;
    public function definition(): array
    {
        return [
            "calendar_id"  => fake()->numberBetween(1,5),
            "mentor_id"  => fake()->numberBetween(1,5),
            "mentee_id"  => fake()->numberBetween(1,5),
            
            
        ];
    }
}
