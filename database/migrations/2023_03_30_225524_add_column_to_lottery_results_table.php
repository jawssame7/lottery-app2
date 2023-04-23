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
        Schema::table('lottery_results', function (Blueprint $table) {
            // 当選口数1等〜5等
            $table->bigInteger('win_units_1')->after('bonus_number_2');
            $table->bigInteger('win_units_2')->after('win_units_1');
            $table->bigInteger('win_units_3')->after('win_units_2');
            $table->bigInteger('win_units_4')->after('win_units_3');
            $table->bigInteger('win_units_5')->after('win_units_4');
            // 賞金1等〜5等
            $table->bigInteger('prize_1')->after('win_units_5');
            $table->bigInteger('prize_2')->after('prize_1');
            $table->bigInteger('prize_3')->after('prize_2');
            $table->bigInteger('prize_4')->after('prize_3');
            $table->bigInteger('prize_5')->after('prize_4');


        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('lottery_results', function (Blueprint $table) {
            //
        });
    }
};
