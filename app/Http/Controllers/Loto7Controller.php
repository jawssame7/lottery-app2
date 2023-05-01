<?php

namespace App\Http\Controllers;

use App\Models\Loto7Result;
use DateTime;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class Loto7Controller extends Controller
{
    //
    /**
     * @return \Inertia\Response
     */
    public function index()
    {
        $sqlQuery = Loto7Result::query();
        $sqlQuery->orderBy('id', 'desc');
        $sqlQuery->limit(30);
        $loto7Results = $sqlQuery->get();
//        return response()->json($loto7Results);
        return Inertia::render('Loto7', [
            'loto7Results' => $loto7Results,
            'authorizedId' => Auth::id()
        ]);
    }

    /**
     * 作成画面へ
     * @param Request $request
     * @return \Inertia\Response
     * @throws \Exception
     */
    public function create(Request $request)
    {
        $sqlQuery = Loto7Result::query();
        $sqlQuery->orderBy('id', 'desc');
        $sqlQuery->limit(1);
        $loto7Results = $sqlQuery->get();
        $loto7Result = $loto7Results->first();

//        dd($loto7Result['times'] + 1);
        return Inertia::render('CreateLoto', [
            'times' => $loto7Result['times'] + 1
        ]);
    }

    /**
     * 新規追加
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     * @throws \Exception
     */
    public function store(Request $request)
    {

        $attributes = $request->validate([
            'times' => 'required | integer',
            'event_date' => 'required',
            'per_number_1' => 'required | integer | between:1,37',
            'per_number_2' => 'required | integer | between:1,37',
            'per_number_3' => 'required | integer | between:1,37',
            'per_number_4' => 'required | integer | between:1,37',
            'per_number_5' => 'required | integer | between:1,37',
            'per_number_6' => 'required | integer | between:1,37',
            'per_number_7' => 'required | integer | between:1,37',
            'bonus_number_1' => 'required | integer | between:1,37',
            'bonus_number_2' => 'required | integer | between:1,37',
            'win_units_1' => 'required | integer',
            'win_units_2' => 'required | integer',
            'win_units_3' => 'required | integer',
            'win_units_4' => 'required | integer',
            'win_units_5' => 'required | integer',
            'win_units_6' => 'required | integer',
            'prize_1' => 'required | integer',
            'prize_2' => 'required | integer',
            'prize_3' => 'required | integer',
            'prize_4' => 'required | integer',
            'prize_5' => 'required | integer',
            'prize_6' => 'required | integer',
            'carry_over' => 'required | integer',
        ]);


        $let = new DateTime($attributes['event_date']);

        $attributes['event_date'] = $let->format('Y-m-d');

//        dd($attributes);

        $lotoResult = new Loto7Result();
        $lotoResult->fill($attributes)->save();

        return Inertia::location('/loto7');
    }
}
