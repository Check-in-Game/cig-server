<?php

namespace App\Http\Controllers\User;

use DB;
use Illuminate\Http\Request;

class UserController extends \App\Http\Controllers\Controller {

  public function index(Request $request) {
      return view('user.index');
  }

}
