<?php

namespace Database\Seeders\Content;

use Illuminate\Database\Seeder;
use Models\Content\BlogKeyword;

class BlogKeywordSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        BlogKeyword::factory()->count(10)->create();
    }
}
