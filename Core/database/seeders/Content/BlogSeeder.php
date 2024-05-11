<?php

namespace Database\Seeders\Content;

use Illuminate\Database\Seeder;
use Models\Content\Blog;

class BlogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Blog::factory()->count(10)->create();
    }
}
