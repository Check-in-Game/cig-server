@extends('public.master')

@section('body')
<router-view></router-view>
@endsection

@section('script')
<script type="text/javascript">
  var code_url = "{{ captcha_src('mini') }}";
</script>
@endsection
