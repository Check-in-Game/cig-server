<?php

namespace App\Http\Controllers;

use DB;
use Illuminate\Http\Request;

class PublicController extends Controller {

  public function index(Request $request) {
      // 检查是否登录
      $uid = $request->cookie('uid');
      $auth = $request->cookie('auth');
      if ($uid) {
        $real_auth = $this->generate_auth($uid);
        if ($auth == $real_auth) {
          return \redirect('/user');
        }
      }
      return view('public.public');
  }

}
