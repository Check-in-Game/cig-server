(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{EN8g:function(t,a,e){var s=e("i0E3");"string"==typeof s&&(s=[[t.i,s,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e("7B2p")(s,r);s.locals&&(t.exports=s.locals)},SOI0:function(t,a,e){"use strict";e.r(a);var s={data:function(){return{url:staticurl+"/images/logo/logo_256.png",username:"",password:"",load_stat:!0,load_delay:1e3,login_available:!0}},mounted:function(){var t=this;this.$http.get(baseurl+"/api/sysconf/login").then((function(a){"false"==a.data.body&&(t.login_available=!1,t.$message.error("当前登录通道暂时被关闭了，稍候再来登录吧！"))})).catch((function(a){t.$message.warning("暂时无法获取登录通道状态！")})).then((function(){t.load_stat=!1,t.load_delay=0}))},methods:{forgetPassword:function(){router.push({name:"forgetPassword"})},register:function(){router.push({name:"register"})},login:function(){var t=this;/^[A-Za-z][A-Za-z0-9_]{5,15}$/.test(this.username)?/^[\S\s]{8,16}$/.test(this.password)?(this.load_stat=!0,this.$http.post(baseurl+"/api/login",{username:this.username,password:this.password}).then((function(a){return"200"==a.data.errno?void(location.href=baseurl+"/user"):(t.$message.error("登录失败："+a.data.errzh),"Channel closed."==a.data.error?void(t.login_available=!1):void 0)})).catch((function(a){t.$message.error("登录失败：服务器内部错误")})).then((function(){t.load_stat=!1}))):this.$message.error("密码错误"):this.$message.error("用户名错误")}}},r=(e("eTOI"),e("QCOi")),i=Object(r.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"public-login"},[e("div",{staticClass:"text-center",staticStyle:{"text-align":"center"}},[e("img",{attrs:{src:t.url,alt:"logo",width:"100px;"}})]),t._v(" "),e("h1",{staticStyle:{"text-align":"center","margin-top":"25px"}},[t._v("Checkin Game v4")]),t._v(" "),e("div",{staticStyle:{"margin-top":"25px"}},[e("a-spin",{attrs:{spinning:t.load_stat,tip:"加载中...",delay:t.load_delay}},[e("a-row",[e("a-col",{attrs:{xs:0,sm:0,md:4,lg:6,xl:8}}),t._v(" "),e("a-col",{attrs:{xs:24,sm:24,md:16,lg:12,xl:8}},[e("a-card",{staticStyle:{"text-align":"center"},attrs:{title:"登录"}},[t.login_available?t._e():e("a-alert",{staticStyle:{margin:"20px 0"},attrs:{message:"登录通道关闭",description:"登录通道临时关闭了，稍候再来试试吧~",type:"error","show-icon":""}}),t._v(" "),e("div",[e("a-input",{attrs:{placeholder:"在此输入用户名",allowClear:"",tabindex:"1","auto-focus":""},model:{value:t.username,callback:function(a){t.username=a},expression:"username"}},[e("a-icon",{attrs:{slot:"prefix",type:"user"},slot:"prefix"})],1),t._v(" "),e("br"),t._v(" "),e("div",{staticStyle:{clear:"both"}},[e("a-button",{staticStyle:{float:"right","padding-right":"0"},attrs:{type:"link"},on:{click:t.forgetPassword}},[e("small",[t._v("忘记密码")])])],1),t._v(" "),e("a-input-password",{attrs:{placeholder:"在此输入密码",allowClear:"",tabindex:"2"},model:{value:t.password,callback:function(a){t.password=a},expression:"password"}},[e("a-icon",{attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1)],1),t._v(" "),e("div",{staticStyle:{"margin-top":"32px","line-height":"32px",clear:"both"}},[e("a-button",{staticStyle:{float:"left","padding-left":"0"},attrs:{type:"link"},on:{click:t.register}},[e("small",[t._v("没有账户？创建一个！")])]),t._v(" "),e("a-button",{staticStyle:{float:"right"},attrs:{type:"primary"},on:{click:t.login}},[t._v("\n                登录\n              ")])],1)],1)],1),t._v(" "),e("a-col",{attrs:{xs:0,sm:0,md:4,lg:6,xl:8}})],1)],1)],1)])}),[],!1,null,"287cd4f6",null);a.default=i.exports},eTOI:function(t,a,e){"use strict";var s=e("EN8g");e.n(s).a},i0E3:function(t,a,e){(t.exports=e("aQ7W")(!1)).push([t.i,"\n.public-login[data-v-287cd4f6] {\r\n  margin-top: 50px;\n}\n.fade-enter-active[data-v-287cd4f6], .fade-leave-active[data-v-287cd4f6] {\r\n  transition: opacity .5s;\n}\n.fade-enter[data-v-287cd4f6], .fade-leave-to[data-v-287cd4f6] /* .fade-leave-active below version 2.1.8 */ {\r\n  opacity: 0;\n}\r\n",""])}}]);