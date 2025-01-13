<?php

namespace App\Http\Controllers;

use App\Helpers\ResponseHelper;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Spatie\QueryBuilder\QueryBuilder;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $filters = $request->query() ?? [];

        $data = QueryBuilder::for(Product::class)
            ->allowedFilters(['name', 'sku', 'category', 'supplier.name'])
            ->allowedSorts('name', 'sku', 'created_at', 'updated_at')
            ->paginate($filters['page_size'] ?? 25)
            ->appends(request()->query());


        $pagination = $data->toArray();

        $response = ResponseHelper::formatResponse(
            ProductResource::collection($data)->toArray($request),
            $pagination,
            $filters
        );

        return response()->json($response, 200);
    }
}