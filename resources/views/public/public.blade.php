@extends('public.master')

@section('body')
<router-view></router-view>
@endsection

@section('script')
<script type="text/javascript">
  var code_url = "{{ captcha_src('mini') }}";
  var path = window.location.href.split("#");
  if (path.length != 1) {
    // path = '#' + path[1];
    path = path[1] == '/' || path[1] == '/login' || path[1] == '/register' || path[1] == 'forgetPassword' ? '' : '#' + path[1];
  }else{
    path = '';
  }
  var redirect = "{{ $_GET['redirect'] ?? '' }}" + path;
</script>
@endsection
