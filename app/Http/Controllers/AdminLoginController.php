<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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
}
