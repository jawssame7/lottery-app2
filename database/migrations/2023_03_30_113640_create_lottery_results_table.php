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
        Schema::create('lottery_results', function (Blueprint $table) {
            $table->id();
            $table->tinyInteger('category');
            $table->text('times');
            $table->date('event_date');
            $table->text('per_number_1');
            $table->text('per_number_2');
            $table->text('per_number_3');
            $table->text('per_number_4');
            $table->text('per_number_5');
            $table->text('per_number_6');
            $table->text('per_number_7');
            $table->text('bonus_number_1');
            $table->text('bonus_number_2');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lottery_results');
    }
};
