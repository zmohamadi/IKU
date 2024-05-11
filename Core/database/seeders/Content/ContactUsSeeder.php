<?php

namespace Database\Seeders\Content;

use Illuminate\Database\Seeder;
use Models\Content\ContactUs;

class ContactUsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ContactUs::factory()->count(10)->create();
    }
}
