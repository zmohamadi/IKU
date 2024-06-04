<?php

namespace Database\Seeders\Person;

use Illuminate\Database\Seeder;
use Models\Person\AdminUser;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            // ["name"=>"Superadmin", "lname"=>"Sanegar", "admin_role_id"=>"1", "email"=>"sanegar.info@gmail.com", "mobile"=>"sanegar", "username"=>"sanegar.info", "password"=>bcrypt("09191964745"), "status_id"=>"1", "lang"=>"en","pic"=>"1.jpg",],
            ["name"=>"Superadmin", "lname"=>"Sanegar", "admin_role_id"=>"1", "email"=>"sanegar.info@gmail.com", "mobile"=>"sanegar", "password"=>bcrypt("09191964745"), "status_id"=>"1", "lang"=>"en","pic"=>"1.jpg",],
            [
                "name"=>"admin", "lname"=>"WIT",
                "admin_role_id"=>"2",
                "email"=>"WIT@gmail.com",
                "mobile"=>"WIT",
                // "username"=>"WIT@gmail.com",
                "password"=>bcrypt("wit"),
                "status_id"=>"1",
                "lang"=>"en",
                "pic"=>"2.jpg",
            ],
        ];
        foreach($items as $item)
        {
            AdminUser::create($item);
        }
    }
}
