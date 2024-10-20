<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class MenuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $menus = [
            ['uuid' => Str::uuid(), 'title' => 'system management', 'parent_id' => 0, 'position' => 1],
            ['uuid' => Str::uuid(), 'title' => 'System Management', 'parent_id' => 1, 'position' => 1],
            ['uuid' => Str::uuid(), 'title' => 'Systems', 'parent_id' => 2, 'position' => 1],
            ['uuid' => Str::uuid(), 'title' => 'System Code', 'parent_id' => 3, 'position' => 1],
            ['uuid' => Str::uuid(), 'title' => 'Code Registration', 'parent_id' => 4, 'position' => 1],
            ['uuid' => Str::uuid(), 'title' => 'Code Registration-2', 'parent_id' => 3, 'position' => 2],
            ['uuid' => Str::uuid(), 'title' => 'Properties', 'parent_id' => 3, 'position' => 3],
            ['uuid' => Str::uuid(), 'title' => 'Menus', 'parent_id' => 3, 'position' => 4],
            ['uuid' => Str::uuid(), 'title' => 'Menu Registration', 'parent_id' => 8, 'position' => 1],
            ['uuid' => Str::uuid(), 'title' => 'API List', 'parent_id' => 3, 'position' => 5],
            ['uuid' => Str::uuid(), 'title' => 'API Registration', 'parent_id' => 10, 'position' => 1],
            ['uuid' => Str::uuid(), 'title' => 'API Edit', 'parent_id' => 10, 'position' => 2],
            ['uuid' => Str::uuid(), 'title' => 'Users & Groups', 'parent_id' => 1, 'position' => 2],
            ['uuid' => Str::uuid(), 'title' => 'Users', 'parent_id' => 13, 'position' => 1],
            ['uuid' => Str::uuid(), 'title' => 'User Account Registration', 'parent_id' => 14, 'position' => 1],
            ['uuid' => Str::uuid(), 'title' => 'Groups', 'parent_id' => 13, 'position' => 2],
            ['uuid' => Str::uuid(), 'title' => 'User Group Registration', 'parent_id' => 16, 'position' => 1],
        ];

        foreach ($menus as $menu) {
            \App\Models\Menu::Create($menu);
        }
    }
}
