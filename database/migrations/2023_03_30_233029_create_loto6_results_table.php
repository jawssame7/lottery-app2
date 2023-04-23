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
        Schema::create('loto6_results', function (Blueprint $table) {
            $table->id();
            $table->text('times');
            $table->date('event_date');
            $table->text('per_number_1');
            $table->text('per_number_2');
            $table->text('per_number_3');
            $table->text('per_number_4');
            $table->text('per_number_5');
            $table->text('per_number_6');
            $table->text('bonus_number_1');
            // 当選口数1等〜5等
            $table->bigInteger('win_units_1');
            $table->bigInteger('win_units_2');
            $table->bigInteger('win_units_3');
            $table->bigInteger('win_units_4');
            $table->bigInteger('win_units_5');
            // 賞金1等〜5等
            $table->bigInteger('prize_1');
            $table->bigInteger('prize_2');
            $table->bigInteger('prize_3');
            $table->bigInteger('prize_4');
            $table->bigInteger('prize_5');
            $table->bigInteger('carry_over');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('loto6_results');
    }
};
