<?php

namespace Database\Seeders\Person;

use Illuminate\Database\Seeder;
use Models\Person\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::factory()->count(10)->create();
    }
}
