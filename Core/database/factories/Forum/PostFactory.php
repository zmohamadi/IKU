<?php

namespace Database\Factories\Forum;

use Illuminate\Database\Eloquent\Factories\Factory;
use Models\Edu\Forum\Post;

class PostFactory extends Factory
{
    protected $model = Post::class;
 
    public function definition(): array
    {
        return [
           
                "text" => fake()->text,
                "subject_id" => fake()->numberBetween(1,5),
                "creator_id" => fake()->numberBetween(1,10),
        ];
    }
}
