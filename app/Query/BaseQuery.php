<?php
namespace App\Query;

use Spatie\QueryBuilder\QueryBuilder;

abstract class BaseQuery
{
    public static function apply($query = null)
    {
        $filters = static::$filters ?? [];
        $sorts = static::$sorts ?? [];
        $includes = static::$includes ?? [];

        return QueryBuilder::for($query ?? static::$model::query())
            ->allowedFilters($filters)
            ->allowedSorts($sorts)
            ->allowedIncludes($includes);
    }
}
