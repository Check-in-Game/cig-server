<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('/isLoggedIn', 'Api\PublicController@is_logged_in');

Route::post('/register', 'Api\PublicController@register');
Route::post('/login', 'Api\PublicController@login');

Route::get('/register/username/{username}', 'Api\PublicController@verify_username');

Route::get('/sysconf/{key}', 'Api\PublicController@sysConf');
