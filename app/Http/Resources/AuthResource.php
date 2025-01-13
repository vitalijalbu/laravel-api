<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AuthResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'user' => $this->resource,
            'token' => $this->resource->createToken('myapptoken')->plainTextToken
        ];
    }
}
