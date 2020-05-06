<!DOCTYPE html>
<html lang="zh-CN" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="description" content="繁杂尘世间惊鸿一瞥，乱世红尘中昙花一现，少年郎远在他乡。">
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <meta name="viewport" content="width=device-width,height=device-height,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <link rel="shortcut icon" href="{{ asset('favicon.ico') }}">
    @yield('meta')
    <title>@yield('title') - Checkin Game</title>
  </head>
  <body>
    <div id="app">
      @yield('body')
    </div>
    <script type="text/javascript">
      var baseurl = "{{ url('/') }}";
      var staticurl = "{{ $_APP_STATIC_ }}";
    </script>
    @yield('script')
    <script src="{{ mix('js/manifest.js') }}" charset="utf-8"></script>
    <script src="{{ mix('js/vendor.js') }}" charset="utf-8"></script>
    <script src="{{ mix('js/public.js') }}" charset="utf-8"></script>
  </body>
</html>
