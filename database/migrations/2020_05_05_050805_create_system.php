<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSystem extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('v4_system', function (Blueprint $table) {
            $table->string('skey', 64)->primary();
            $table->string('svalue', 256);
            $table->string('description', 64);
        });
        // 基础设置
        $db = DB::table('v4_system')->insert([
          'skey' => 'login_available',
          'svalue' => 'false',
          'description' => '是否允许登录'
        ]);
        $db = DB::table('v4_system')->insert([
          'skey' => 'register_available',
          'svalue' => 'false',
          'description' => '是否允许注册'
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('v4_system');
    }
}
