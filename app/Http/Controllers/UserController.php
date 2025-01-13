<?php

namespace App\Http\Controllers;

use App\Helpers\ResponseHelper;
use App\Http\Resources\UserResource;
use App\Models\User;
use Database\Factories\UserFactory;
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

        $pagination = $data->toArray();

        $response = ResponseHelper::formatResponse(
            UserResource::collection($data)->toArray($request),
            $pagination,
            $filters
        );

        return response()->json($response, 200);
    }

    public function show($id)
    {
        $data = User::find($id)->firstOrFail();

        if (!$data) {
            return response()->json([
                'message' => 'Product not found'
            ], 404);
        }

        return response()->json(new UserResource($data), 200);
    }
}