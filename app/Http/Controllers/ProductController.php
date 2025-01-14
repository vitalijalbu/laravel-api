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
    /**
     * @OA\Get(
     *   tags={"Product"},
     *   path="/api/path",
     *   summary="Product index",
     *   @OA\Response(
     *     response=200,
     *     description="OK",
     *     @OA\JsonContent(
     *       type="object",
     *       @OA\Property(
     *         property="data",
     *         type="array",
     *         @OA\Items(ref="#/components/schemas/ProductResource")
     *       ),
     *       @OA\Property(property="links", ref="#/components/schemas/PageLinks"),
     *       @OA\Property(property="meta", ref="#/components/schemas/PageMeta")
     *     )
     *   )
     * )
     */
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

    /**
     * @OA\Get(
     *   tags={"Product"},
     *   path="/api/path/{id}",
     *   summary="Product show",
     *   @OA\Parameter(ref="#/components/parameters/id"),
     *   @OA\Response(
     *     response=200,
     *     description="OK",
     *     @OA\JsonContent(ref="#/components/schemas/ProductResource")
     *   ),
     *   @OA\Response(response=404, description="Not Found")
     * )
     */
    public function show($id)
    {
        $data = Product::find($id)->firstOrFail();

        if (!$data) {
            return response()->json([
                'message' => 'Product not found'
            ], 404);
        }

        return response()->json(new ProductResource($data), 200);
    }
}