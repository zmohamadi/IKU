<?php

namespace Database\Seeders\Person;

use Illuminate\Database\Seeder;
use Models\Person\SessionManager;

class ManagerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        SessionManager::factory()->count(5)->create();
    }
}
