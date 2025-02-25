<?php 
namespace App\Helpers;

use Illuminate\Pagination\LengthAwarePaginator;

class ResponseHelper
{
   /**
     * Format the response structure.
     *
     * @param array $data
     * @param array $pagination
     * @param array $filters
     * @return array
     */
    public static function formatResponse(array $data, array $pagination, array $filters = []): array
    {
        return [
            'data' => $data,
            'filter' => $filters['filter'] ?? null,
            'meta' => [
                'pagination' => [
                    'total' => $pagination['total'] ?? 0,
                    'page_size' => $pagination['per_page'] ?? 25,
                    'current_page' => $pagination['current_page'] ?? 1,
                    'total_pages' => $pagination['last_page'] ?? 1,
                ],
            ],
        ];
    }
}
