(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/components/publi/register"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/register.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/register.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      'url': staticurl + '/images/logo/logo_256.png',
      'username': '',
      'password': '',
      'password2': '',
      'captcha': '',
      'refresh_code': 1,
      'code': code_url,
      'load_stat': true,
      'load_delay': 1000,
      'register_available': true,
      'available_username': false,
      'username_input_tooltip_show': false,
      'username_input_tooltip_type': 'close-circle',
      'username_input_tooltip_style': 'color: rgba(255,0,0,.45)',
      'username_input_tooltip_title': '用户名需要使用字母开头，6~16位且不可使用字母、数字、下划线以外的字符'
    };
  },
  mounted: function mounted() {
    this.codeRefresh();
    this.check_channel();
  },
  methods: {
    'check_channel': function check_channel() {
      var _this = this;

      // 判断注册通道是否开启
      this.load_stat = true;
      this.$http.get(baseurl + '/api/sysconf/register').then(function (response) {
        // 关闭加载提示
        _this.load_stat = false;

        if (response.data.body == 'false') {
          _this.register_available = false;

          _this.$message.error('十分抱歉，注册通道处于关闭状态！');
        }
      })["catch"](function (error) {
        _this.$message.warning('暂时无法获取注册通道状态，请稍候再试！');

        _this.load_delay = 0;
      });
    },
    'forgetPassword': function forgetPassword() {
      router.push({
        name: 'forgetPassword'
      });
    },
    'login': function login() {
      router.push({
        name: 'login'
      });
    },
    'codeRefresh': function codeRefresh() {
      this.refresh_code++;
      this.code = code_url + this.refresh_code;
    },
    'verify_username': function verify_username() {
      if (this.username.length > 5) {
        this.username_input_tooltip_show = true;
      } else {
        this.username_input_tooltip_show = false;
      }

      var pattern_username = /^[A-Za-z][A-Za-z0-9_]{5,15}$/;

      if (!pattern_username.test(this.username)) {
        this.username_input_tooltip_type = 'close-circle';
        this.username_input_tooltip_style = 'color: rgba(255,0,0,.45)';
        this.username_input_tooltip_title = '用户名需要使用字母开头，6~16位且不可使用字母、数字、下划线以外的字符';
        return;
      } else {
        this.username_input_tooltip_type = 'check-circle';
        this.username_input_tooltip_style = 'color: rgba(12,140,12,.65)';
        this.username_input_tooltip_title = '用户名合法';
        return;
      }
    },
    'register': function register() {
      var _this2 = this;

      var pattern_username = /^[A-Za-z][A-Za-z0-9_]{5,15}$/;
      var pattern_password = /^[\S\s]{8,16}$/;
      var pattern_captcha = /^.{4,8}$/;

      if (!pattern_username.test(this.username)) {
        this.$message.error('用户名需要使用字母开头，6~16位且不可使用字母、数字、下划线以外的字符');
        return;
      }

      if (!pattern_password.test(this.password)) {
        this.$message.error('密码长度需要满足8~16位');
        return;
      }

      if (this.password != this.password2) {
        this.$message.error('两次密码输入不一致');
        return;
      }

      if (!pattern_captcha.test(this.captcha)) {
        this.captcha = '';
        this.$message.error('验证码错误');
        return;
      }

      this.$http.post(baseurl + '/api/register', {
        'username': this.username,
        'password': this.password,
        'captcha': this.captcha
      }).then(function (response) {
        if (response.data.errno == '200') {
          _this2.load_stat = true;
          location.href = baseurl + '/user';
          return;
        } else {
          _this2.$message.error('注册失败：' + response.data.errzh);

          if (response.data.error == 'Bad captcha.') {
            _this2.codeRefresh();

            _this2.captcha = '';
            return;
          }

          if (response.data.error == 'Unavailable username.') {
            _this2.username = '';
            _this2.username_input_tooltip_type = 'close-circle';
            _this2.username_input_tooltip_style = 'color: rgba(255,0,0,.45)';
            _this2.username_input_tooltip_title = '用户名已经存在';
            return;
          }

          if (response.data.error == 'Channel closed.') {
            _this2.register_available = false;
            return;
          }

          return;
        }
      })["catch"](function (error) {
        _this2.$message.error('注册失败：服务器内部错误');

        _this2.codeRefresh();

        _this2.captcha = '';
        return;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/register.vue?vue&type=style&index=0&id=4ee048e4&lang=css&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/register.vue?vue&type=style&index=0&id=4ee048e4&lang=css&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.public-register[data-v-4ee048e4] {\r\n  margin-top: 50px;\n}\n.spin-content[data-v-4ee048e4] {\r\n  border: 1px solid #91d5ff;\r\n  background-color: #e6f7ff;\r\n  padding: 30px;\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/register.vue?vue&type=style&index=0&id=4ee048e4&lang=css&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/register.vue?vue&type=style&index=0&id=4ee048e4&lang=css&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=style&index=0&id=4ee048e4&lang=css&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/register.vue?vue&type=style&index=0&id=4ee048e4&lang=css&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/register.vue?vue&type=template&id=4ee048e4&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/register.vue?vue&type=template&id=4ee048e4&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "public-register" }, [
    _c(
      "div",
      { staticClass: "text-center", staticStyle: { "text-align": "center" } },
      [_c("img", { attrs: { src: _vm.url, alt: "logo", width: "100px;" } })]
    ),
    _vm._v(" "),
    _c(
      "h1",
      { staticStyle: { "text-align": "center", "margin-top": "25px" } },
      [_vm._v("Checkin Game v4")]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticStyle: { "margin-top": "25px" } },
      [
        _c(
          "a-spin",
          {
            attrs: {
              spinning: _vm.load_stat,
              tip: "请稍候...",
              delay: _vm.load_delay
            }
          },
          [
            _c(
              "a-row",
              [
                _c("a-col", { attrs: { xs: 0, sm: 0, md: 4, lg: 6, xl: 8 } }),
                _vm._v(" "),
                _c(
                  "a-col",
                  { attrs: { xs: 24, sm: 24, md: 16, lg: 12, xl: 8 } },
                  [
                    _c(
                      "a-card",
                      {
                        staticStyle: { "text-align": "center" },
                        attrs: { title: "注册" }
                      },
                      [
                        !_vm.register_available
                          ? _c("a-alert", {
                              staticStyle: { margin: "20px 0" },
                              attrs: {
                                message: "注册通道关闭",
                                description:
                                  "注册通道临时关闭了，稍候再来试试吧~",
                                type: "error",
                                "show-icon": ""
                              }
                            })
                          : _c(
                              "div",
                              [
                                _c(
                                  "a-input",
                                  {
                                    attrs: {
                                      placeholder: "在此输入用户名",
                                      allowClear: "",
                                      tabindex: "1",
                                      "auto-focus": ""
                                    },
                                    on: { change: _vm.verify_username },
                                    model: {
                                      value: _vm.username,
                                      callback: function($$v) {
                                        _vm.username = $$v
                                      },
                                      expression: "username"
                                    }
                                  },
                                  [
                                    _c("a-icon", {
                                      attrs: { slot: "prefix", type: "user" },
                                      slot: "prefix"
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "a-tooltip",
                                      {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value:
                                              _vm.username_input_tooltip_show,
                                            expression:
                                              "username_input_tooltip_show"
                                          }
                                        ],
                                        attrs: {
                                          slot: "suffix",
                                          title:
                                            _vm.username_input_tooltip_title
                                        },
                                        slot: "suffix"
                                      },
                                      [
                                        _c("a-icon", {
                                          style:
                                            _vm.username_input_tooltip_style,
                                          attrs: {
                                            type:
                                              _vm.username_input_tooltip_type
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("br"),
                                _vm._v(" "),
                                _c("br"),
                                _vm._v(" "),
                                _c(
                                  "a-input-password",
                                  {
                                    attrs: {
                                      placeholder: "在此输入密码",
                                      allowClear: "",
                                      tabindex: "2"
                                    },
                                    model: {
                                      value: _vm.password,
                                      callback: function($$v) {
                                        _vm.password = $$v
                                      },
                                      expression: "password"
                                    }
                                  },
                                  [
                                    _c("a-icon", {
                                      attrs: { slot: "prefix", type: "lock" },
                                      slot: "prefix"
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("br"),
                                _vm._v(" "),
                                _c("br"),
                                _vm._v(" "),
                                _c(
                                  "a-input-password",
                                  {
                                    attrs: {
                                      placeholder: "重复输入一次密码",
                                      allowClear: "",
                                      tabindex: "3"
                                    },
                                    model: {
                                      value: _vm.password2,
                                      callback: function($$v) {
                                        _vm.password2 = $$v
                                      },
                                      expression: "password2"
                                    }
                                  },
                                  [
                                    _c("a-icon", {
                                      attrs: { slot: "prefix", type: "lock" },
                                      slot: "prefix"
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("br"),
                                _vm._v(" "),
                                _c("br"),
                                _vm._v(" "),
                                _c(
                                  "a-row",
                                  [
                                    _c(
                                      "a-col",
                                      { attrs: { span: "16" } },
                                      [
                                        _c(
                                          "a-input",
                                          {
                                            attrs: {
                                              placeholder: "验证码",
                                              allowClear: "",
                                              tabindex: "4"
                                            },
                                            model: {
                                              value: _vm.captcha,
                                              callback: function($$v) {
                                                _vm.captcha = $$v
                                              },
                                              expression: "captcha"
                                            }
                                          },
                                          [
                                            _c("a-icon", {
                                              attrs: {
                                                slot: "prefix",
                                                type: "code"
                                              },
                                              slot: "prefix"
                                            })
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "a-col",
                                      {
                                        staticStyle: { "text-align": "right" },
                                        attrs: { span: "8" },
                                        on: { click: _vm.codeRefresh }
                                      },
                                      [
                                        _c("img", {
                                          attrs: {
                                            solt: "addonAfter",
                                            src: _vm.code,
                                            height: "32px"
                                          }
                                        })
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticStyle: {
                              "margin-top": "32px",
                              "line-height": "32px",
                              clear: "both"
                            }
                          },
                          [
                            _c(
                              "a-button",
                              {
                                staticStyle: {
                                  float: "left",
                                  "padding-left": "0"
                                },
                                attrs: { type: "link" },
                                on: { click: _vm.login }
                              },
                              [_c("small", [_vm._v("已有账户？马上登录！")])]
                            ),
                            _vm._v(" "),
                            _vm.register_available
                              ? _c(
                                  "div",
                                  [
                                    _c(
                                      "a-button",
                                      {
                                        staticStyle: { float: "right" },
                                        attrs: { type: "primary" },
                                        on: { click: _vm.register }
                                      },
                                      [
                                        _vm._v(
                                          "\n                  注册\n                "
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                )
                              : _vm._e()
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("a-col", { attrs: { xs: 0, sm: 0, md: 4, lg: 6, xl: 8 } })
              ],
              1
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/public/register.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/public/register.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _register_vue_vue_type_template_id_4ee048e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.vue?vue&type=template&id=4ee048e4&scoped=true& */ "./resources/js/components/public/register.vue?vue&type=template&id=4ee048e4&scoped=true&");
/* harmony import */ var _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.vue?vue&type=script&lang=js& */ "./resources/js/components/public/register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _register_vue_vue_type_style_index_0_id_4ee048e4_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.vue?vue&type=style&index=0&id=4ee048e4&lang=css&scoped=true& */ "./resources/js/components/public/register.vue?vue&type=style&index=0&id=4ee048e4&lang=css&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _register_vue_vue_type_template_id_4ee048e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _register_vue_vue_type_template_id_4ee048e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4ee048e4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/public/register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/public/register.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/public/register.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/public/register.vue?vue&type=style&index=0&id=4ee048e4&lang=css&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/public/register.vue?vue&type=style&index=0&id=4ee048e4&lang=css&scoped=true& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_4ee048e4_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=style&index=0&id=4ee048e4&lang=css&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/register.vue?vue&type=style&index=0&id=4ee048e4&lang=css&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_4ee048e4_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_4ee048e4_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_4ee048e4_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_4ee048e4_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_4ee048e4_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/public/register.vue?vue&type=template&id=4ee048e4&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/public/register.vue?vue&type=template&id=4ee048e4&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_4ee048e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=template&id=4ee048e4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/register.vue?vue&type=template&id=4ee048e4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_4ee048e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_4ee048e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);