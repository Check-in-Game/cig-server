<?php

namespace App\Http\Middleware;

use Closure;
use Cookie;
use \App\Http\Controllers\Controller as Controller;

class CheckAuth
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next) {
        $uid = $request->cookie('uid');
        $auth = $request->cookie('auth');
        // 未登录
        if (!$uid || !$auth) {
              if ($request->path() != '/') {
                self::delAuth();
                return redirect('/?redirect=' . urlencode($request->fullUrl()));
              }
        }else{
          // 检查是否正常登录
          $controller = new Controller;
          $real_auth = $controller->generate_auth($uid);
          if ($auth != $real_auth) {
            // 登录授权失效
            self::delAuth();
            return redirect('/?redirect=' . urlencode($request->fullUrl()));
          }else if ($request->path() == '/'){
            // 授权有效
            return redirect('/user');
          }else{
            $user = $controller->get_user($uid);
            view()->share('user', $user);
          }

        }
        return $next($request);
    }

    /**
     * Delete Auth Infomation
     *
     * @param  void
     * @return void
     */
    public function delAuth() {
        Cookie::queue(cookie()->forget('uid'));
        Cookie::queue(cookie()->forget('auth'));
        // response()->cookie('uid', null, -1);
        // response()->cookie('auth', null, -1);
    }


}
