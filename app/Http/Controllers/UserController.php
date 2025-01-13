<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Spatie\QueryBuilder\QueryBuilder;

class UserController extends Controller
{

    public function index(Request $request)
    {
        $filters = $request->query();

        $data = QueryBuilder::for(User::class)
            ->allowedFilters(['name', 'email'])
            ->allowedSorts('name', 'email')
            ->paginate($filters['page_size'] ?? 25)
            ->appends(request()->query());

        return response()->json($data);
    }
}