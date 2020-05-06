<template>
  <div class="public-register">
    <div class="text-center" style="text-align:center;">
      <img :src="url" alt="logo" width="100px;"> </img>
    </div>
    <h1 style="text-align:center; margin-top:25px;">Checkin Game v4</h1>
    <div style="margin-top: 25px;">
      <a-spin :spinning="load_stat" tip="请稍候..." :delay="load_delay">
        <a-row>
          <a-col :xs="0" :sm="0" :md="4" :lg="6" :xl="8"></a-col>
          <a-col :xs="24" :sm="24" :md="16" :lg="12" :xl="8">
            <a-card title="注册" style="text-align:center;">
              <a-alert
                message="注册通道关闭"
                description="注册通道临时关闭了，稍候再来试试吧~"
                type="error"
                show-icon
                style="margin: 20px 0;"
                v-if="!register_available"
              />
              <div v-else>
                <a-input placeholder="在此输入用户名" v-model="username" allowClear tabindex="1" @change="verify_username" auto-focus>
                  <a-icon slot="prefix" type="user" />
                  <a-tooltip slot="suffix" :title="username_input_tooltip_title" v-show="username_input_tooltip_show">
                    <a-icon :type="username_input_tooltip_type" :style="username_input_tooltip_style" />
                  </a-tooltip>
                </a-input>
                <br />
                <br />
                <a-input-password placeholder="在此输入密码" v-model="password" allowClear tabindex="2">
                  <a-icon slot="prefix" type="lock" />
                </a-input-password>
                <br />
                <br />
                <a-input-password placeholder="重复输入一次密码" v-model="password2" allowClear tabindex="3">
                  <a-icon slot="prefix" type="lock" />
                </a-input-password>
                <br />
                <br />
                <a-row>
                  <a-col span="16">
                    <a-input placeholder="验证码" v-model="captcha" allowClear tabindex="4">
                      <a-icon slot="prefix" type="code" />
                    </a-input>
                  </a-col>
                  <a-col span="8" style="text-align:right;" @click="codeRefresh">
                    <img solt="addonAfter" :src="code" height="32px" />
                  </a-col>
                </a-row>
              </div>

              <div style="margin-top:32px;line-height:32px;clear:both;">
                <a-button type="link" style="float:left;padding-left:0;" @click="login">
                  <small>已有账户？马上登录！</small>
                </a-button>
                <div v-if="register_available">
                  <a-button type="primary" style="float:right;" @click="register">
                    注册
                  </a-button>
                </div>
              </div>

            </a-card>
          </a-col>
          <a-col :xs="0" :sm="0" :md="4" :lg="6" :xl="8"></a-col>
        </a-row>
      </a-spin>
    </div>
  </div>
</template>

<script>
export default {
  data: function(){
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
      'username_input_tooltip_title': '用户名需要使用字母开头，6~16位且不可使用字母、数字、下划线以外的字符',
    }
  },
  mounted: function() {
    this.codeRefresh();
    this.check_channel();
  },
  methods: {
    'check_channel': function() {
      // 判断注册通道是否开启
      this.load_stat = true
      this.$http.get(baseurl + '/api/sysconf/register')
        .then((response) => {
          // 关闭加载提示
          this.load_stat = false;
          if (response.data.body == 'false') {
            this.register_available = false;
            this.$message.error('十分抱歉，注册通道处于关闭状态！');
          }
        })
        .catch((error) => {
          this.$message.warning('暂时无法获取注册通道状态，请稍候再试！');
          this.load_delay = 0;
      });
    },
    'forgetPassword': function() {
      router.push({ name: 'forgetPassword'})
    },
    'login': function() {
      router.push({ name: 'login'})
    },
    'codeRefresh': function() {
      this.refresh_code ++;
      this.code = code_url + this.refresh_code;
    },
    'verify_username': function() {
      if (this.username.length > 5) {
        this.username_input_tooltip_show = true;
      }else{
        this.username_input_tooltip_show = false;
      }
      let pattern_username = /^[A-Za-z][A-Za-z0-9_]{5,15}$/;
      if (!pattern_username.test(this.username)){
        this.username_input_tooltip_type = 'close-circle';
        this.username_input_tooltip_style = 'color: rgba(255,0,0,.45)';
        this.username_input_tooltip_title = '用户名需要使用字母开头，6~16位且不可使用字母、数字、下划线以外的字符';
        return;
      }else{
        this.username_input_tooltip_type = 'check-circle';
        this.username_input_tooltip_style = 'color: rgba(12,140,12,.65)';
        this.username_input_tooltip_title = '用户名合法';
        return;
      }
    },
    'register': function() {
      let pattern_username = /^[A-Za-z][A-Za-z0-9_]{5,15}$/;
      let pattern_password = /^[\S\s]{8,16}$/;
      let pattern_captcha= /^.{4,8}$/;
      if (!pattern_username.test(this.username)){
        this.$message.error('用户名需要使用字母开头，6~16位且不可使用字母、数字、下划线以外的字符');
        return;
      }
      if (!pattern_password.test(this.password)){
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
      })
      .then((response) => {
        if (response.data.errno == '200') {
          this.load_stat = true;
          location.href = baseurl + '/user';
          return;
        }else{
          this.$message.error('注册失败：' + response.data.errzh);
          if (response.data.error == 'Bad captcha.') {
            this.codeRefresh();
            this.captcha = '';
            return;
          }
          if (response.data.error == 'Unavailable username.') {
            this.username = '';
            this.username_input_tooltip_type = 'close-circle';
            this.username_input_tooltip_style = 'color: rgba(255,0,0,.45)';
            this.username_input_tooltip_title = '用户名已经存在';
            return;
          }
          if (response.data.error == 'Channel closed.') {
            this.register_available = false;
            return;
          }
          return;
        }
      })
      .catch((error) => {
        this.$message.error('注册失败：服务器内部错误');
        this.codeRefresh();
        this.captcha = '';
        return;
      });
    }
  },
}
</script>

<style lang="css" scoped>
.public-register {
  margin-top: 50px;
}
.spin-content {
  border: 1px solid #91d5ff;
  background-color: #e6f7ff;
  padding: 30px;
}
</style>
