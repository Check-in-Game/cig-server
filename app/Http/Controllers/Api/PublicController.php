<?php

namespace App\Http\Controllers\Api;

use DB;
use Illuminate\Http\Request;

class PublicController extends \App\Http\Controllers\Controller {

  /**
   * Query Public Sys Conf
   * @param  string key 查询的系统设置键
   * @return mixed
   */
  public function sysConf(string $key) {
      // 允许查询键
      $allow_keys = [
          'register'  => 'register_available',
          'login'     => 'login_available',
      ];
      // 非允许键
      if (!isset($allow_keys[$key])) {
          return response($this->json(400, 'Failed to get system configuration.', null, false));
      }else{
          $key = $allow_keys[$key];
      }
      // 查询系统设置
      $sys = $this->sysconfig($key);
      // 生成返回值
      $res = $this->json(200, 'Succeeded in getting system configuration.', null, $sys);
      return response($res);
  }

  /**
   * 验证用户名是否可用
   * @param  string username
   * @return mixed
   */
  public function verify_username(string $username) {
      $patt_username  = '/^[A-Za-z][A-Za-z0-9_]{5,15}$/';
      // 验证用户名
      if (!preg_match($patt_username, $username)) {
          $res = $this->json(400, 'Bad username.', '用户名需要使用字母开头，6~16位且不可使用字母、数字、下划线以外的字符', false);
          return response($res);
      }
      // 检查用户名重复
      $has_username = DB::table('v4_users')->where('username', $username)->first();
      if ($has_username) {
        $res = $this->json(403, 'Unavailable username.', '已经存在的用户名', false);
        return response($res);
      }
      $res = $this->json(200, 'Available username.', '可以使用的用户名', true);
      return response($res);
  }

  /**
   * 注册
   * @param  string username  用户名
   * @param  string password  密码
   * @param  string captcha   验证码
   * @return mixed
   */
  public function register(Request $request) {
      // 检查是否开启注册 reg channel
      $regc = DB::table('v4_system')->where('skey', 'register_available')->value('svalue');
      if ($regc != 'true') {
        $res = $this->json(403, 'Channel closed.', '注册通道已关闭', false);
        return response($res);
      }
      $patt_username  = '/^[A-Za-z][A-Za-z0-9_]{5,15}$/';
      $patt_password  = '/^[\S\s]{8,16}$/';
      if (!$request->has(['username', 'password', 'captcha'])) {
        $res = $this->json(400, 'Bad request.', '非法的请求', false);
        return response($res);
      }
      $username = $request->username;
      $password = $request->password;
      $captcha  = $request->captcha;
      // 验证用户名
      if (!preg_match($patt_username, $username)) {
          $res = $this->json(400, 'Bad username.', '用户名需要使用字母开头，6~16位且不可使用字母、数字、下划线以外的字符', false);
          return response($res);
      }
      // 验证密码
      if (!preg_match($patt_password, $password)) {
          $res = $this->json(400, 'Bad password.', '密码长度需要满足8~16位', false);
          return response($res);
      }
      // 验证码核验
      if (!\Captcha::check($captcha)) {
        $res = $this->json(400, 'Bad captcha.', '验证码错误', $captcha);
        return response($res);
      }
      // 检查用户名重复
      $has_username = DB::table('v4_users')->where('username', $username)->first();
      if ($has_username) {
        $res = $this->json(403, 'Unavailable username.', '已经存在的用户名', false);
        return response($res);
      }
      // 注册用户
      $now = date('Y-m-d H:i:s');
      $data['username'] = $username;
      $data['password'] = $this->generate_password($password);
      $data['nickname'] = $username;
      $data['status'] = 0; // 邮箱待验证
      $data['update_at'] = $now;
      $data['create_at'] = $now;
      $reg = DB::table('v4_users')->insert($data);
      if ($reg) {
        $res = $this->json(200, 'Succeeded in registering an account.', '注册成功', $reg);
        return response($res);
      }else{
        $res = $this->json(400, 'Failed to register an account.', '注册失败', $reg);
        return response($res);
      }
  }
}
