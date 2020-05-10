<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider
      breakpoint="lg"
      collapsed-width="0"
      v-model="collapsed"
      :trigger="null"
    >
      <div class="logo">
        <h1>Checkin Game</h1>
      </div>

      <transition name="slide">
        <a-menu theme="dark" mode="inline" :default-selected-keys="['user']" :selectedKeys="$route.name == null ? ['user'] : [$route.name]">
            <a-menu-item key="user">
              <router-link :to="{ name: 'user' }">
                <a-icon type="user" />
                用户中心
              </router-link>
            </a-menu-item>
            <a-menu-item key="checkin">
              <router-link :to="{ name: 'checkin' }">
                <a-icon type="check" />
                签到中心
              </router-link>
            </a-menu-item>
            <a-menu-item @click="logout">
              <a-icon type="logout" />
              <span>退出登录</span>
            </a-menu-item>
        </a-menu>
      </transition>

    </a-layout-sider>
    <a-layout :style="{ marginLeft: '0px' }">
      <a-layout-header style="background: #fff; padding-left: 10px;">
        <div style="clear:both;">
          <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
          style="float: left; margin-top:25px;"
          />
          <h3 style="float:left; margin:0;padding:0 0 0 24px;">{{ pageTitle }}</h3>
        </div>
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px 0', overflow: 'initial' }">
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          <router-view @getTitle="set_title"></router-view>
        </div>
      </a-layout-content>
      <a-layout-footer style="textAlign: center">
        Powered by
        <strong>Checkin Game Team</strong>
        with <a-icon type="heart" theme="filled" style="color:#ff8080" />
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  data: function() {
    return {
      'collapsed': false,
      'pageTitle': 'CIG',
    }
  },
  mounted: function() {

  },
  methods: {
    set_title: function(title) {
      this.pageTitle = title;
    },
    logout: function() {
      this.$http.get(baseurl + '/api/logout')
      .then((response) => {
        if (response.data.errno == '200'){
          this.$message.success(response.data.errzh);
          location.href = baseurl;
        }else{
          this.$message.warning(response.data.errzh);
        }
      })
      .catch(() => {
        this.$message.error('登出失败：服务器连接错误');
      });
    },
  },
}
</script>

<style lang="css" scoped>
.logo {
  height: 32px;
  margin: 16px;
  text-align: center;
}
.logo h1 {
  color: #d5d5d5;
}
</style>
