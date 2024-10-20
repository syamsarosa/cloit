<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpsertMenuRequest;
use App\Models\Menu;
use Illuminate\Http\Request;

class MenuController extends Controller
{
    private $menu;

    public function __construct()
    {
        $this->menu = new Menu();
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $menu = $this->menu->tree();
        return response()->json($menu);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(UpsertMenuRequest $menu)
    {
        $mn = $this->menu;
        $mn->title = $menu->title;
        $mn->parent_id = $menu->parent_id;
        $mn->position = $menu->position;

        if ($mn->save()) {
            return response()->json(["message" => "New Menu has been added"], 200);
        } else {
            return response()->json(["message" => "Something went wrong. Please try again."], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $menu = $this->menu->where('id', '=', $id)->get();
        return response()->json($menu);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpsertMenuRequest $menu, string $id)
    {
        $mn = $this->menu->where('id', $id);

        if (count($mn->get()) == 0) {
            return response()->json(["message" => "Menu not found"], 404);
        }

        $parent = $this->menu->where('id', $menu->parent_id)->get();

        if (count($parent) == 0) {
            return response()->json(["message" => "Parent Menu not found. Cannot add Sub Menu"], 404);
        }

        $update = $mn->update([
            'title' => $menu->title,
            'parent_id' => $menu->parent_id,
            'position' => $menu->position,
        ]);

        if ($update) {
            return response()->json(["message" => "Menu has been updated"], 200);
        } else {
            return response()->json(["message" => "Something went wrong. Please try again."], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $menu = $this->menu->find($id);
        $menu->delete();
    }
}
