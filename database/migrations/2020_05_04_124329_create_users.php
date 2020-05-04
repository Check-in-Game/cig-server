<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cig_v4_users', function (Blueprint $table) {
            $table->id();
            $table->string('username', 16)->unique()->comment('用户名');
            $table->string('password', 32)->comment('密码');
            $table->string('nickname', 16)->unique()->comment('昵称');
            $table->string('email', 64)->unique()->comment('电子邮箱');
            $table->bigInteger('points')->comment('积分');
            $table->bigInteger('stones')->comment('石');
            $table->bigInteger('papers')->comment('符');
            $table->bigInteger('brocade')->comment('锦');
            $table->bigInteger('mys_stones')->comment('神秘石');
            $table->bigInteger('star_stones')->comment('星石');
            $table->tinyInteger('status')->comment('状态编号');
            $table->dateTimeTz('last_login_at')->comment('最后登录时间');
            $table->dateTimeTz('email_verified_at')->comment('电子邮箱验证时间');
            $table->dateTimeTz('update_at')->comment('更新时间');
            $table->dateTimeTz('create_at')->comment('创建时间');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cig_v4_users');
    }
}
