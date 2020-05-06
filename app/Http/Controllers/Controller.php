<?php

namespace App\Http\Controllers;

use DB;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /**
     * 生成json
     * @param  string error 错误提示
     * @param  string errzh 中文错误提示
     * @param  mixed  body  报文主体
     * @return array
     */
    public function json(string $errno, string $error, $errzh, $body = null) : array {
        return [
            'errno'     => $errno,
            'error'     => $error,
            'errzh'     => $errzh,
            'body'      => $body
        ];
    }

    /**
     * 查询系统设置
     * @param  string key 系统设置名称
     * @return mixed
     */
    public function sysconfig(string $key) {
        if (empty($key)) {
            return false;
        }
        $sys = DB::table('v4_system')
                ->where('skey', $key)
                ->sharedLock()
                ->value('svalue');
        return $sys;
    }

    /**
     * 生成密码
     * @param  string password
     * @return string
     */
    public function generate_password(string $password) {
        return md5(md5($password).'*7xlk2"[x/..2]');
    }

    /**
     * 生成AUTH
     * @param  string password
     * @return string
     */
    public function generate_auth(string $uid) {
        $user = DB::table('v4_users')->where('uid', $uid)->first();
        if ($user) {
            $login_channel = $this->sysconfig('login_available');
            return md5(md5($user->uid . $user->username . $user->status . $user->is_admin . $login_channel));
        }else{
            return false;
        }
    }


    // 发送邮件
    public function sendMail(string $view, string $recipient, string $name, string $subject, array $data) : bool {
        set_time_limit(60);
        $data['_recipient'] = $recipient;
        $data['_name'] = $name;
        $data['_subject'] = $subject;
        Mail::send($view, $data, function($message) use($data){
              $message->to($data['_recipient'], $data['_name'])->subject($data['_subject']);
        });
        if (count(Mail::failures()) < 1) {
            return true;
        }else{
            return false;
        }
    }

}
