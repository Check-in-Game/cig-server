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
        Schema::create('v4_users', function (Blueprint $table) {
            $table->bigIncrements('uid');
            $table->string('username', 16)->unique();
            $table->string('password', 32);
            $table->string('nickname', 16);
            $table->string('email', 64)->default('')->unique();
            $table->bigInteger('points')->default(0)->comment('积分');
            $table->bigInteger('stones')->default(0)->comment('石');
            $table->bigInteger('runes')->default(0)->comment('符');
            $table->bigInteger('brocades')->default(0)->comment('锦');
            $table->bigInteger('mys_stones')->default(0)->comment('神秘石');
            $table->bigInteger('star_stones')->default(0)->comment('星石');
            $table->boolean('is_admin')->default(false);
            $table->tinyInteger('status')->default(0);
            $table->dateTimeTz('last_login_at')->default('1970-01-01 00:00:00');
            $table->dateTimeTz('email_verified_at')->default('1970-01-01 00:00:00');
            $table->dateTimeTz('update_at');
            $table->dateTimeTz('create_at');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('v4_users');
    }
}
