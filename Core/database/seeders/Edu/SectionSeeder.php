<?php

namespace Database\Seeders\Edu;

use Illuminate\Database\Seeder;
use Models\Edu\Section\Section;

class SectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Section::factory()->count(10)->create();
    
    }
}
