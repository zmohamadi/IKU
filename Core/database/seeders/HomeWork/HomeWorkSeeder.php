<?php

namespace Database\Seeders\HomeWork;

use Illuminate\Database\Seeder;
use Models\Edu\HomeWork\HomeWork;

class HomeWorkSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        HomeWork::factory()->count(10)->create();
    }
}
