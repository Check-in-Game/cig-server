<!DOCTYPE html>
<html lang="zh-CN" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="description" content="繁杂尘世间惊鸿一瞥，乱世红尘中昙花一现，少年郎远在他乡。">
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <meta name="viewport" content="width=device-width,height=device-height,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <link rel="shortcut icon" href="{{ asset('favicon.ico') }}">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="{{ $_APP_STATIC_ }}/stisla/2.2.0-modified/css/selectric.css">
    <link rel="stylesheet" href="{{ $_APP_STATIC_ }}/stisla/2.2.0-modified/css/style.min.css">
    <link rel="stylesheet" href="{{ $_APP_STATIC_ }}/stisla/2.2.0-modified/css/components.min.css">
    <link rel="stylesheet" href="{{ $_APP_STATIC_ }}/stisla/2.2.0-modified/css/custom.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.13.0/css/all.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/izitoast@1.4.0/dist/css/iziToast.min.css">
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js" charset="utf-8"></script>
    <script src="https://cdn.jsdelivr.net/npm/jquery-lazy@1.7.10/jquery.lazy.min.js" charset="utf-8"></script>
    <script src="https://cdn.jsdelivr.net/npm/jquery.nicescroll@3.7.6/jquery.nicescroll.min.js" charset="utf-8"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.bundle.min.js" charset="utf-8"></script>
    <script src="{{ $_APP_STATIC_ }}/stisla/2.2.0-modified/js/jquery.selectric.min.js" charset="utf-8"></script>
    <script src="{{ $_APP_STATIC_ }}/stisla/2.2.0-modified/js/moment.min.js" charset="utf-8"></script>
    <script src="{{ $_APP_STATIC_ }}/stisla/2.2.0-modified/js/stisla.min.js" charset="utf-8"></script>
    <script src="{{ $_APP_STATIC_ }}/stisla/2.2.0-modified/js/scripts.min.js" charset="utf-8"></script>
    <script src="https://cdn.jsdelivr.net/npm/izitoast@1.4.0/dist/js/iziToast.min.js" charset="utf-8"></script>
    @yield('meta')
    <title>@yield('title')</title>
  </head>
  <body class="layout-3">
    @yield('body')
    @yield('script')
  </body>
</html>
