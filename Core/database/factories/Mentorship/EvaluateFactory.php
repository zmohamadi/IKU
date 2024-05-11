<?php

namespace Database\Factories\Mentorship;

use Illuminate\Database\Eloquent\Factories\Factory;
use Models\Mentorship\Evaluate;

class EvaluateFactory extends Factory
{
    protected $model = Evaluate::class;
    
    public function definition(): array
    {
        return [
            "score"  => fake()->numberBetween(1,5),
            "date"  => fake()->date,
            
        ];
    }
}
