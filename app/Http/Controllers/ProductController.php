<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Spatie\QueryBuilder\QueryBuilder;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $filters = $request->query();

        $data = QueryBuilder::for(Product::with(['supplier', 'category']))
            ->allowedFilters(['name', 'sku', 'category', 'material', 'stock_quantity', 'pricings', 'uploaded', 'supplier.name'])
            ->allowedSorts('name', 'sku', 'created_at', 'updated_at')
            ->paginate($filters['page_size'] ?? 25)
            ->appends(request()->query());

        return response()->json($data);
    }
}