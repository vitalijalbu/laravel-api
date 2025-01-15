#!/bin/sh

./vendor/zircote/swagger-php/bin/openapi ./app/Http/Controllers -o ./openapi.yaml -l
./vendor/zircote/swagger-php/bin/openapi ./app/Http/Controllers -f json -o ./openapi.json -l
