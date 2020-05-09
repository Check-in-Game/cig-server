@extends('master')

@section('title')
用户中心
@endsection

@section('js')
<script type="text/javascript">
  var user = [];
  user.username = "{{ $user->username }}";
  user.nickname = "{{ $user->nickname }}";
  user.points = "{{ $user->points }}";
  user.stones = "{{ $user->stones }}";
  user.papers = "{{ $user->papers }}";
  user.brocades = "{{ $user->brocades }}";
  user.mys_stones = "{{ $user->mys_stones }}";
  user.star_stones = "{{ $user->star_stones }}";
  user.is_admin = "{{ $user->is_admin }}";
  user.last_login_at = "{{ $user->last_login_at }}";
</script>
<script src="{{ mix('js/user.js') }}" charset="utf-8"></script>
@endsection
