<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Supplier extends Model
{
    use HasFactory;
    
    
    protected $fillable = [ 
        "name",
        "slug",
        "website",
        "email",
        "notes",
        "logo",
        "percentage"
    ];

    protected $casts = [
        "products" => "array"
    ];

    protected $appends = ['total_products'];

    public function products()
    {
        return $this->hasMany(Product::class, 'supplier_id');
    }
    
    public function getTotalProductsAttribute()
    {
        return $this->products()->count() ?? 0;
    }
}
