<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     * php artisan migrate:refresh --path=/database/migrations/create_products_table.php
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('woocommerce_id')->nullable();
            $table->foreignId('supplier_id')->nullable(false)->constrained('app_suppliers');
            $table->string('name')->nullable(false);
            $table->boolean('is_variable')->default(false);
            $table->boolean('parent_id')->nullable(true)->constrained('app_products');
            $table->string('model_code')->nullable();
            $table->string('ref')->nullable();
            $table->string('type')->nullable();
            $table->string('category')->nullable();
            $table->string('material')->nullable();
            $table->text('description')->nullable();
            $table->text('short_description')->nullable();
            $table->string('slug')->nullable();
            $table->string('sku')->nullable()->unique();
            $table->boolean('manage_stock')->default(true);
            $table->string('printcode')->nullable();
            $table->integer('stock_quantity')->default(0);
            $table->string('model')->nullable();
            $table->json('colors')->nullable();
            $table->json('images')->nullable();
            $table->string('main_image')->nullable();
            $table->json('pricings')->nullable();
            $table->decimal('price', 10, 2)->default(0)->nullable();
            $table->decimal('length', 10, 2)->default(0)->nullable();
            $table->decimal('height', 10, 2)->default(0)->nullable();
            $table->decimal('width', 10, 2)->default(0)->nullable();
            $table->decimal('diameter', 10, 2)->default(0)->nullable();
            $table->decimal('weight', 10, 2)->default(0)->nullable();
            $table->boolean('uploaded')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // // Drop the foreign key constraint first
        // Schema::table('app_variants', function (Blueprint $table) {
        //     $table->dropForeign(['product_id']);
        // });

        // Now drop the app_products table
        Schema::dropIfExists('app_products');
    }
};
