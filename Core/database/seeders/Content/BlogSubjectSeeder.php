<?php

namespace Database\Seeders\Content;

use Illuminate\Database\Seeder;
use Models\Content\BlogSubject;

class BlogSubjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        BlogSubject::factory()->count(10)->create();
    }
}
