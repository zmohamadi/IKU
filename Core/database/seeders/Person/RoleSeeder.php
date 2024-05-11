<?php

namespace Database\Seeders\Person;

use Illuminate\Database\Seeder;
use Models\Person\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            [
                "title_en"=>"instructor"
            ],
            [
                "title_en"=>"student"
            ],
            [
                "title_en"=>"session manager"
            ],
            [
                "title_en"=>"mentor"
            ],
            [
                "title_en"=>"mentee"
            ],
            [
                "title_en"=>"speaker"
            ],
           
        ];
        foreach($items as $item)
        {
            Role::create($item);
        }
    }
}
