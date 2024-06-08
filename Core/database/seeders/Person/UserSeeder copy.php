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
        $items = [
            ["name"=>"Superadmin", "lname"=>"Sanegar","role_id"=>"1", "email"=>"sanegar.info@gmail.com", "mobile"=>"09191964745", "password"=>bcrypt("09191964745"), "status_id"=>"1", "lang"=>"fa","pic"=>"1.jpg",],
        ];
        foreach($items as $item)
        {
            User::create($item);
        }
    }
}
