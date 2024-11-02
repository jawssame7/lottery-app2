<?php

namespace App\Http\Controllers;

use App\Models\MinilotoResult;
use DateTime;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class MinilotoController extends Controller
{
    //
    public function index()
    {
        $sqlQuery = MinilotoResult::query();
        $sqlQuery->orderByRaw('cast(times as DECIMAL) DESC');
        $sqlQuery->limit(24);
        $minilotoResults = $sqlQuery->get();
//        return response()->json($minilotoResults);
        return Inertia::render('MiniLoto', [
            'minilotoResults' => $minilotoResults,
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
        $sqlQuery = MinilotoResult::query();
        $sqlQuery->orderByRaw('cast(times as DECIMAL) DESC');
        $sqlQuery->limit(1);
        $miniResults = $sqlQuery->get();
        $miniResult = $miniResults->first();

//        dd($miniResults['times'] + 1);
        return Inertia::render('CreateMiniLoto', [
            'times' => $miniResult['times'] + 1
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
            'per_number_1' => 'required | integer | between:1,31',
            'per_number_2' => 'required | integer | between:1,31',
            'per_number_3' => 'required | integer | between:1,31',
            'per_number_4' => 'required | integer | between:1,31',
            'per_number_5' => 'required | integer | between:1,31',
            'bonus_number_1' => 'required | integer | between:1,43',
            'win_units_1' => 'required | integer',
            'win_units_2' => 'required | integer',
            'win_units_3' => 'required | integer',
            'win_units_4' => 'required | integer',
            'prize_1' => 'required | integer',
            'prize_2' => 'required | integer',
            'prize_3' => 'required | integer',
            'prize_4' => 'required | integer'
        ]);


        $let = new DateTime($attributes['event_date']);

        $attributes['event_date'] = $let->format('Y-m-d');

//        dd($attributes);

        $lotoResult = new MinilotoResult();
        $lotoResult->fill($attributes)->save();

        return Inertia::location('/miniloto');
    }
}
