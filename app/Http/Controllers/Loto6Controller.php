<?php

namespace App\Http\Controllers;

use DateTime;
use Illuminate\Http\Request;
use App\Models\Loto6Result;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class Loto6Controller extends Controller
{
    /**
     * @return \Inertia\Response
     */
    public function index()
    {
        $sqlQuery = Loto6Result::query();
        $sqlQuery->orderBy('id', 'desc');
        $sqlQuery->limit(30);
        $loto6Results = $sqlQuery->get();
//        return response()->json($loto6Results);
        return Inertia::render('Loto6', [
            'loto6Results' => $loto6Results,
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
        $sqlQuery = Loto6Result::query();
        $sqlQuery->orderBy('id', 'desc');
        $sqlQuery->limit(1);
        $loto6Results = $sqlQuery->get();
        $loto6Result = $loto6Results->first();

//        dd($loto6Result['times'] + 1);
        return Inertia::render('CreateLoto', [
            'times' => $loto6Result['times'] + 1
        ]);
    }

    /**
     * 新規追加
     * @param Request $request
     * @return \Inertia\Response|\Symfony\Component\HttpFoundation\Response
     * @throws \Exception
     */
    public function store(Request $request)
    {
//        dd($request->get("event_date"));

        $attributes = $request->validate([
            'times' => 'required | integer',
            'event_date' => 'required',
            'per_number_1' => 'required | integer | between:1,43',
            'per_number_2' => 'required | integer | between:1,43',
            'per_number_3' => 'required | integer | between:1,43',
            'per_number_4' => 'required | integer | between:1,43',
            'per_number_5' => 'required | integer | between:1,43',
            'per_number_6' => 'required | integer | between:1,43',
            'bonus_number_1' => 'required | integer | between:1,43',
            'win_units_1' => 'required | integer',
            'win_units_2' => 'required | integer',
            'win_units_3' => 'required | integer',
            'win_units_4' => 'required | integer',
            'win_units_5' => 'required | integer',
            'prize_1' => 'required | integer',
            'prize_2' => 'required | integer',
            'prize_3' => 'required | integer',
            'prize_4' => 'required | integer',
            'prize_5' => 'required | integer',
            'carry_over' => 'required | integer',
        ]);


        $let = new DateTime($attributes['event_date']);

        $attributes['event_date'] = $let->format('Y-m-d');

//        dd($attributes);

        $lotoResult = new Loto6Result();
        $lotoResult->fill($attributes)->save();

        return Inertia::location('/loto6');
    }
}
