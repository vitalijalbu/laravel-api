<?php
namespace App\Query;

use App\Models\Product;

class ProductQuery extends BaseQuery
{
    protected static $model = Product::class;

    public static array $filters = [
        'name', 
        'price', 
        'category', 
        'supplier.name'
    ];

    public static array $sorts = [
        'price', 
        'created_at',
        'price', 
        'category', 
        'supplier.name'
    ];
    
    public static array $includes = [
        'category', 
        'tags'
    ];
}
