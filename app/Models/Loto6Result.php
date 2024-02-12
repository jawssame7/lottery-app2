<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Loto6Result extends Model
{
    use HasFactory;

    protected $fillable = [
        'times',
        'event_date',
        'per_number_1',
        'per_number_2',
        'per_number_3',
        'per_number_4',
        'per_number_5',
        'per_number_6',
        'bonus_number_1',
        'win_units_1',
        'win_units_2',
        'win_units_3',
        'win_units_4',
        'win_units_5',
        'prize_1',
        'prize_2',
        'prize_3',
        'prize_4',
        'prize_5',
        'carry_over'
    ];

    public static function csvHeader(): array
    {
        return (new static)->fillable;
    }
}
