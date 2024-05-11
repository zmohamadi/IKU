<?php

namespace Database\Seeders\Edu;

use Illuminate\Database\Seeder;
use Models\Edu\Enroll;

class EnrollSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Enroll::factory()->count(10)->create();
    }
}
