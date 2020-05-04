<template>
  <div class="public-register">
    <div class="text-center" style="text-align:center;">
      <img :src="url" alt="logo" width="100px;"> </img>
    </div>
    <h1 style="text-align:center; margin-top:25px;">Checkin Game v4</h1>
    <div style="margin-top: 25px;">
      <a-row>
        <a-col :xs="0" :sm="0" :md="4" :lg="6" :xl="8"></a-col>
        <a-col :xs="24" :sm="24" :md="16" :lg="12" :xl="8">
          <a-card title="注册" style="text-align:center;">

            <div>
              <a-input placeholder="在此输入用户名" v-model="username" allowClear tabindex="1" auto-focus>
                <a-icon slot="prefix" type="user" />
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
              <a-button type="primary" style="float:right;" @click="register">
                注册
              </a-button>
            </div>

          </a-card>
        </a-col>
        <a-col :xs="0" :sm="0" :md="4" :lg="6" :xl="8"></a-col>
      </a-row>
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
    }
  },
  methods: {
    'forgetPassword': function() {
      location.href = baseurl + '/forgetPassword';
    },
    'login': function() {
      location.href = baseurl + '/login';
    },
    'codeRefresh': function() {
      this.refresh_code ++;
      this.code = code_url + this.refresh_code;
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
      this.$http.post(baseurl + '/register', {
        'username': this.username,
        'password': this.password,
        'captcha': this.captcha
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
    }
  },
}
</script>

<style lang="css" scoped>
.public-register {
  margin-top: 50px;
}
</style>
