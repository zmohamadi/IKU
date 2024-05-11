<?php

namespace Database\Factories\Mentorship;

use Illuminate\Database\Eloquent\Factories\Factory;
use Models\Mentorship\Topic;

class TopicFactory extends Factory
{
    protected $model = Topic::class;

    public function definition(): array
    {
        return [
           
                "title_en"=>fake()->sentence,
                "description_en"=>fake()->text,
                "order" => fake()->numberBetween(1,5),
                "status_id" => fake()->numberBetween(0,1),
            
        ];
    }
}
