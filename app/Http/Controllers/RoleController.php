<?php

namespace App\Http\Controllers;

use App\Helpers\ResponseHelper;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Http\RedirectResponse;
use Spatie\QueryBuilder\QueryBuilder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;


class RoleController extends Controller
{


    public function index(Request $request)
    {

        $filters = $request->query();
        $data = QueryBuilder::for(Role::class)
            ->allowedFilters(['name'])
            ->paginate($filters['label_size'] ?? 25)
            ->appends(request()->query());

        return response()->json($data, 200);
    }



    public function store(Request $request)
    {
        $store = Role::create([
            'name' => $request->name,
        ]);


        return redirect()->route('')->with('success', '
                Role created successfully');
    }

}
