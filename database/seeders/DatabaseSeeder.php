<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Role;
use App\User;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        Role::create(['name'=>'doctor']);
        Role::create(['name'=>'admin']);
        Role::create(['name'=>'patient']);
    }
}
