<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::rename('lottery_results', 'loto7_results');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::rename('loto7_results', 'lottery_results');
    }
};
