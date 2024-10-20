<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Menu extends Model
{
    use SoftDeletes;
    protected $fillable = ["title", "parent_id", "position"];

    public function parent()
    {
        return $this->hasOne('App\Models\Menu', 'id', 'parent_id')->orderBy('position');
    }

    public function children()
    {
        return $this->hasMany('App\Models\Menu', 'parent_id', 'id')->orderBy('position');
    }

    public static function tree()
    {
        return static::with(implode('.', array_fill(0, 100, 'children')))
            ->where('parent_id', '=', '0')
            ->orderBy('position')
            ->get();
    }
}
