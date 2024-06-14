<?php

namespace Database\Seeders\Forum;

use Illuminate\Database\Seeder;
use Models\Edu\Forum\Post;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Post::factory()->count(10)->create();
    }
}
