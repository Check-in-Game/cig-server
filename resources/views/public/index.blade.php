@extends('public.master')

@section('body')
<section class="section">
    <div class="container mt-5">
      <div class="row">
        <div class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
          <div class="login-brand">
            <img src="{{ $_APP_STATIC_ }}/images/logo/logo_256.png" alt="logo" width="100" class="shadow-light rounded-circle">
          </div>

          <h1 class="text-center text-success">Checkin Game</h1>

          <div class="card card-success">
            <div class="card-header"><h4 class="text-success font-weight-bold">登录</h4></div>

            <div class="card-body">

                <div class="form-group">
                  <label for="username">用户名</label>
                  <input id="username" type="text" class="form-control" tabindex="1" required autofocus>
                </div>

                <div class="form-group">
                  	<label for="password" class="control-label">密码</label>
                    <div class="float-right">
                      <a href="auth-forgot-password.html" class="text-small text-success">
                        忘记密码？
                      </a>
                    </div>
                  <input id="password" type="password" class="form-control" tabindex="2" required>
                </div>

                <div class="form-group">
                  <button type="submit" class="btn btn-success btn-lg btn-block" tabindex="4">
                    登录
                  </button>
                </div>

            </div>
          </div>
          <div class="mt-5 text-muted text-center">
            没有账户？ <a href="auth-register.html" class="text-success">创建账户</a>
          </div>
          <div class="simple-footer">
            Copyright &copy; Checkin Game Team
          </div>
        </div>
      </div>
    </div>
  </section>
@endsection

@section('script')
@endsection
