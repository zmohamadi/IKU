<?php

namespace Database\Seeders\Content;

use Illuminate\Database\Seeder;
use Models\Content\BlogComment;

class BlogCommentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        BlogComment::factory()->count(10)->create();
    }
}
