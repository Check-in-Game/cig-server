<template>
  <div class="public-login">
    <div class="text-center" style="text-align:center;">
      <img :src="url" alt="logo" width="100px;"> </img>
    </div>
    <h1 style="text-align:center; margin-top:25px;">Checkin Game v4</h1>

    <div style="margin-top: 25px;">
      <a-spin :spinning="load_stat" tip="加载中...">
        <a-row>
          <a-col :xs="0" :sm="0" :md="4" :lg="6" :xl="8"></a-col>
          <a-col :xs="24" :sm="24" :md="16" :lg="12" :xl="8">
            <a-card title="登录" style="text-align:center;">
              <a-alert
                message="登录通道关闭"
                description="登录通道临时关闭了，稍候再来试试吧~"
                type="error"
                show-icon
                style="margin: 20px 0;"
                v-if="!login_available"
              />
              <div>
                <a-input placeholder="在此输入用户名" v-model="username" allowClear tabindex="1" autofocus>
                  <a-icon slot="prefix" type="user" />
                </a-input>
                <br />
                <div style="clear:both;">
                  <a-button type="link" style="float:right;padding-right:0;" @click="forgetPassword">
                    <small>忘记密码</small>
                  </a-button>
                </div>
                <a-input-password placeholder="在此输入密码" v-model="password" allowClear tabindex="2">
                  <a-icon slot="prefix" type="lock" />
                </a-input-password>
              </div>

              <div style="margin-top:32px;line-height:32px;clear:both;">
                <a-button type="link" style="float:left;padding-left:0;" @click="register">
                  <small>没有账户？创建一个！</small>
                </a-button>
                <a-button type="primary" style="float:right;" @click="login">
                  登录
                </a-button>
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
      'load_stat': true,
      'login_available': true,
    }
  },
  mounted: function() {
    // 判断注册通道是否开启
    this.$http.get(baseurl + '/api/sysconf/login')
      .then((response) => {
        // 关闭加载提示
        this.load_stat = false;
        if (response.data.body == 'false') {
          this.login_available = false;
          this.$message.error('当前登录通道暂时被关闭了，稍候再来登录吧！');
        }
      })
      .catch((error) => {
        this.$message.warning('暂时无法获取登录通道状态！');
      });
  },
  methods: {
    'forgetPassword': function() {
      location.href = baseurl + '/forgetPassword';
    },
    'register': function() {
      location.href = baseurl + '/register';
    },
    'login': function() {
      this.$http.get(baseurl + '/register')
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
.public-login {
  margin-top: 50px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
