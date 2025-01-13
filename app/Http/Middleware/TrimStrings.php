<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\TrimStrings as Middleware;

class TrimStrings extends Middleware
{
    /**
     * The names of the attributes that should not be trimmed.
     *
     * @var array<int, string>
     */
    protected $except = [
        'current_password',
        'password',
        'password_confirmation',
        'body.*'
    ];

    protected function transform($key, $value)
    {
        foreach($this->except as $match) {
            if(fnmatch($match, $key)) {
                return $value;
            }
        }
        
        return parent::transform($key, $value);
    }
}
