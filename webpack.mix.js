const mix = require('laravel-mix');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.babelConfig({
    "plugins": [
        "@babel/plugin-syntax-dynamic-import",
    ],
});

mix.webpackConfig({
    // output: {
    //     chunkFilename: '[name].[contenthash].js',
    // },
});

mix
  .js('resources/js/public.js', 'public/js').version([])
  .js('resources/js/user.js', 'public/js').version([])
  .js('resources/js/use2r.js', 'public/js').version([])
  .styles('resources/css/cig/main.css', 'public/css/cig/main.css').version([])
  .styles('resources/css/cig/main2.css', 'public/css/cig/main2.css').version([])
  // .extract(['vue', 'ant-design-vue']).version([])
  // .less('resources/less/cig.antd.less', 'public/css').version([])
;
