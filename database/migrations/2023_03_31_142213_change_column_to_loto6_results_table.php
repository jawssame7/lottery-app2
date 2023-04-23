<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('loto6_results', function (Blueprint $table) {
            //
            $table->bigInteger('per_number_1')->change();
            $table->bigInteger('per_number_2')->change();
            $table->bigInteger('per_number_3')->change();
            $table->bigInteger('per_number_4')->change();
            $table->bigInteger('per_number_5')->change();
            $table->bigInteger('per_number_6')->change();
            $table->bigInteger('bonus_number_1')->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('loto6_results', function (Blueprint $table) {
            //
        });
    }
};
