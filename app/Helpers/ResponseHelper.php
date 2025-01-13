<?php 
namespace App\Helpers;

use Illuminate\Pagination\LengthAwarePaginator;

class ResponseHelper
{
    public static function formatResponse(LengthAwarePaginator $paginatedData, $filter = null)
    {
        return [
            'data' => $paginatedData->items(),
            'filter' => isset($filter['filter']) ?? null,
            'meta' => [
                'current_page' => $paginatedData->currentPage(),
                'next_page_url' => $paginatedData->nextPageUrl(),
                'prev_page_url' => $paginatedData->previousPageUrl(),
                'from' => $paginatedData->firstItem(),
                'last_page' => $paginatedData->lastPage(),
                'path' => $paginatedData->path(),
                'per_page' => $paginatedData->perPage(),
                'to' => $paginatedData->lastItem(),
                'total' => $paginatedData->total(),
            ],
        ];
    }
}
