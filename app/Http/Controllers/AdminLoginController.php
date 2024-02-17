<?php

namespace App\Http\Controllers;

use App\Exceptions\CsvColumnMismatchException;
use App\Models\Loto6Result;
use App\Models\Loto7Result;
use App\Models\MinilotoResult;
use DateTime;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class AdminLoginController extends Controller
{
    //
    /**
     * 認証の試行を処理
     */
    public function login(Request $request)
    {
        $user_info = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        // ログインに成功したとき
        if (Auth::attempt($user_info)) {
            $request->session()->regenerate();
            return redirect()->intended('loto6');
        }

        // 上記のif文でログインに成功した人以外(=ログインに失敗した人)がここに来る
        return back()->withErrors(['email' => 'emailが一致しないかパスワードが違います。'])->onlyInput('email');
    }

    /**
     * ログアウト
     */
    public function logout(Request $request)
    {
        Auth::guard('admin')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/loto6');
    }

    public function import(Request $request)
    {

        $csvInfo = $request->validate([
            'category' => ['required'],
            'csvFile' => ['required'],
        ]);

        try {
            //ファイルの保存
            $newCsvFileName = $request->csvFile->getClientOriginalName();
            $request->csvFile->storeAs('public/csv', $newCsvFileName);
            //保存したCSVファイルの取得
            $csv = Storage::disk('local')->get("public/csv/{$newCsvFileName}");
            // OS間やファイルで違う改行コードをexplode統一
            $csv = str_replace(array("\r\n", "\r"), "\n", $csv);
            // $csvを元に行単位のコレクション作成。explodeで改行ごとに分解
            $uploadedData = collect(explode("\n", $csv));

            switch ($csvInfo['category']) {
                case 'loto6':
                    $this->bulkInsertLoto6($uploadedData);
                    break;
                case 'loto7':
                    $this->bulkInsertLoto7($uploadedData);
                    break;
                case 'miniloto':
                    $this->bulkInsertMiniloto($uploadedData);
                    break;
                default:
                    break;
            }
            return redirect()->intended($csvInfo['category']);
        } catch (CsvColumnMismatchException $e) {
            return back()->withErrors(['csvFile' => 'CSVのカラムが一致しません。'])->onlyInput('csvFile');
        } catch (Exception $e) {
            return back()->withErrors(['error' => 'インポート中にエラーが発生しました。'])->onlyInput('error');
        }

    }

    /**
     * @throws CsvColumnMismatchException
     */
    private function bulkInsertLoto6($uploadedData) : void
    {

        $header = collect(Loto6Result::csvHeader());
        $uploadedHeader = collect(explode(',', $uploadedData->shift()));
        if ($header->count() !== $uploadedHeader->count()) {
            throw new CsvColumnMismatchException();
        }

        // 最新を取得
        $sqlQuery = Loto6Result::query();
        $sqlQuery->orderByRaw('cast(times as DECIMAL) DESC');
        $sqlQuery->limit(1);
        $loto6Results = $sqlQuery->get();
        $latest = $loto6Results->first();

        $items = [];

        foreach ($uploadedData as $i => $data) {

            $attributes = [];
            $data = explode(',', $data);

            // 空白を無視
            if (empty($data[0])) {
                continue;
            }

            // DBに入っている最新以降が対象
            if ((int)$data[0] <= (int)$latest->times) {
                continue;
            }

            $attributes['times'] = $data[0];
            $attributes['event_date'] = $data[1];
            $attributes['per_number_1'] = $data[2];
            $attributes['per_number_2'] = $data[3];
            $attributes['per_number_3'] = $data[4];
            $attributes['per_number_4'] = $data[5];
            $attributes['per_number_5'] = $data[6];
            $attributes['per_number_6'] = $data[7];
            $attributes['bonus_number_1'] = $data[8];
            $attributes['win_units_1'] = $data[9];
            $attributes['win_units_2'] = $data[10];
            $attributes['win_units_3'] = $data[11];
            $attributes['win_units_4'] = $data[12];
            $attributes['win_units_5'] = $data[13];
            $attributes['prize_1'] = $data[14];
            $attributes['prize_2'] = $data[15];
            $attributes['prize_3'] = $data[16];
            $attributes['prize_4'] = $data[17];
            $attributes['prize_5'] = $data[18];
            $attributes['carry_over'] = $data[count($data) - 1];

            $let = new DateTime($attributes['event_date']);


            $attributes['event_date'] = $let->format('Y-m-d');

            $items[] = $attributes;

        }
//        dd($items);
        Loto6Result::insert($items);

    }

    private function bulkInsertLoto7($uploadedData) : void
    {

        $header = collect(Loto7Result::csvHeader());
        $uploadedHeader = collect(explode(',', $uploadedData->shift()));
        if ($header->count() !== $uploadedHeader->count()) {
            throw new CsvColumnMismatchException();
        }

        // 最新を取得
        $sqlQuery = Loto7Result::query();
        $sqlQuery->orderByRaw('cast(times as DECIMAL) DESC');
        $sqlQuery->limit(1);
        $loto7Results = $sqlQuery->get();
        $latest = $loto7Results->first();

        $items = [];

        foreach ($uploadedData as $i => $data) {

            $attributes = [];
            $data = explode(',', $data);

            // 空白を無視
            if (empty($data[0])) {
                continue;
            }

            // DBに入っている最新以降が対象
            if ((int)$data[0] <= (int)$latest->times) {
                continue;
            }

            $attributes['times'] = $data[0];
            $attributes['event_date'] = $data[1];
            $attributes['per_number_1'] = $data[2];
            $attributes['per_number_2'] = $data[3];
            $attributes['per_number_3'] = $data[4];
            $attributes['per_number_4'] = $data[5];
            $attributes['per_number_5'] = $data[6];
            $attributes['per_number_6'] = $data[7];
            $attributes['per_number_7'] = $data[8];
            $attributes['bonus_number_1'] = $data[9];
            $attributes['bonus_number_2'] = $data[10];
            $attributes['win_units_1'] = $data[11];
            $attributes['win_units_2'] = $data[12];
            $attributes['win_units_3'] = $data[13];
            $attributes['win_units_4'] = $data[14];
            $attributes['win_units_5'] = $data[15];
            $attributes['win_units_6'] = $data[16];
            $attributes['prize_1'] = $data[17];
            $attributes['prize_2'] = $data[18];
            $attributes['prize_3'] = $data[19];
            $attributes['prize_4'] = $data[20];
            $attributes['prize_5'] = $data[21];
            $attributes['prize_6'] = $data[22];
            $attributes['carry_over'] = $data[count($data) - 1];

            $let = new DateTime($attributes['event_date']);

            $attributes['event_date'] = $let->format('Y-m-d');

            $items[] = $attributes;

        }

//        dd($items);
        Loto7Result::insert($items);

    }

    private function bulkInsertMiniloto($uploadedData) : void
    {

        $header = collect(MinilotoResult::csvHeader());
        $uploadedHeader = collect(explode(',', $uploadedData->shift()));
        if ($header->count() !== $uploadedHeader->count()) {
            throw new CsvColumnMismatchException();
        }

        // 最新を取得
        $sqlQuery = MinilotoResult::query();
        $sqlQuery->orderByRaw('cast(times as DECIMAL) DESC');
        $sqlQuery->limit(1);
        $minilotoResults = $sqlQuery->get();
        $latest = $minilotoResults->first();

        $items = [];

        foreach ($uploadedData as $i => $data) {

            $attributes = [];
            $data = explode(',', $data);

            // 空白を無視
            if (empty($data[0])) {
                continue;
            }

            // DBに入っている最新以降が対象
            if ((int)$data[0] <= (int)$latest->times) {
                continue;
            }

            $attributes['times'] = $data[0];
            $attributes['event_date'] = $data[1];
            $attributes['per_number_1'] = $data[2];
            $attributes['per_number_2'] = $data[3];
            $attributes['per_number_3'] = $data[4];
            $attributes['per_number_4'] = $data[5];
            $attributes['per_number_5'] = $data[6];
            $attributes['bonus_number_1'] = $data[7];
            $attributes['win_units_1'] = $data[8];
            $attributes['win_units_2'] = $data[9];
            $attributes['win_units_3'] = $data[10];
            $attributes['win_units_4'] = $data[11];
            $attributes['prize_1'] = $data[12];
            $attributes['prize_2'] = $data[13];
            $attributes['prize_3'] = $data[14];
            $attributes['prize_4'] = $data[15];


            $let = new DateTime($attributes['event_date']);

            $attributes['event_date'] = $let->format('Y-m-d');

            $items[] = $attributes;

        }
//        dd($items);
        MinilotoResult::insert($items);

    }
}
