<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'email' => $this->email,
            'name' => $this->name,
            'pricing' => $this->pricing,
            'supplier' => [
                'name' => $this->supplier->name,
                'demo' => 'demo',
                'created_at' => $this->supplier->created_at,
            ],
            'demo' => 'demo',
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
