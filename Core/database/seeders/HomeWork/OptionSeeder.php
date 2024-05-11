<?php

namespace Database\Seeders\HomeWork;

use Illuminate\Database\Seeder;
use Models\Edu\HomeWork\Option;

class OptionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Option::factory()->count(10)->create();   
    }
}
