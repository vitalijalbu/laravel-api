<?php

namespace App\Models;

use App\Models\Traits\Cacheable;
use App\Models\Supplier;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    
    use Cacheable;

    // Allow all fields
    protected $guarded = [];

    protected $with = ['supplier'];

    public function supplier()
    {
        return $this->belongsTo(Supplier::class, 'supplier_id');
    }

}
