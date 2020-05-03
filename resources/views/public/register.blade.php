@extends('public.master')

@section('body')
<section class="section">
  <div class="container mt-5">
    <div class="row">
      <div class="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2">
        <div class="login-brand">
          <img src="{{ $_APP_STATIC_ }}/images/logo/logo_256.png" alt="logo" width="100" class="shadow-light rounded-circle">
        </div>

        <h1 class="text-center text-success">Checkin Game</h1>

        <div class="card card-success">
          <div class="card-header"><h4 class="text-success">注册</h4></div>

          <div class="card-body">

              <div class="form-group">
                <label for="username">用户名</label>
                <input id="username" type="text" class="form-control">
              </div>

              <div class="form-group">
                <label for="email">电子邮箱</label>
                <input id="email" type="email" class="form-control">
              </div>

              <div class="row">
                <div class="form-group col-6">
                  <label for="password" class="d-block">密码</label>
                  <input id="password" type="password" class="form-control pwstrength" data-indicator="pwindicator">
                  <div id="pwindicator" class="pwindicator">
                    <div class="bar"></div>
                    <div class="label"></div>
                  </div>
                </div>
                <div class="form-group col-6">
                  <label for="password2" class="d-block">确认密码</label>
                  <input id="password2" type="password" class="form-control">
                </div>
              </div>

              <div class="form-group">
                <button type="submit" class="btn btn-success btn-lg btn-block">
                  注册
                </button>
              </div>
          </div>
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
<script src="{{ $_APP_STATIC_ }}/stisla/2.2.0-modified/js/jquery.pwstrength.min.js" charset="utf-8"></script>
<script type="text/javascript">
  $(".pwstrength").pwstrength();
</script>
@endsection
