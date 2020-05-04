@extends('master')

@section('title')
注册
@endsection

@section('body')
<public-register></public-register>
@endsection

@section('script')
<script type="text/javascript">
  var code_url = "{{ captcha_src('mini') }}";
</script>
@endsection
