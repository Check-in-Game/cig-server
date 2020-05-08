<template>
    <el-container class="all-min-height" style="height: 100%">
        <el-aside :width="aside_width" style="overflow-x: hidden; outline: none; background-color: rgb(84, 92, 100);">
            <el-menu
                    :default-active="$route.name"
                    :router=true
                    class="el-menu-vertical"
                    :collapse="navBarIsCollapse"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b"
              >
              <el-menu-item index="index" route="/" style="height: 60px;">
                <h1 style="margin: 0; padding: 0; line-height: 60px; text-align: center;" @click="home">
                  Checkin Game
                </h1>
              </el-menu-item>
                <el-menu-item index="index" route="/">
                  <i class="el-icon-s-home"></i>
                  <span slot="title">用户中心</span>
                </el-menu-item>
                <el-menu-item index="checkin" route="checkin">
                  <i class="el-icon-circle-check"></i>
                  <span slot="title">每日签到</span>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <el-container>
            <el-header style="clear: both;">
                <el-button type="success" round style="float: left; margin-top: 10px;" @click="navbar">
                    <i class="el-icon-menu"></i>
                </el-button>
                <h1 v-show="this.aside_width == '0px'" style="margin: 0; padding: 0; line-height: 60px; text-align: center; background-color: #545c64; color: #fff;">
                  Checkin Game
                </h1>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
            <!-- <el-footer>
              footer
            </el-footer> -->
        </el-container>

    </el-container>
</template>

<script>
export default {
  data: function() {
    return {
      "navBarIsCollapse": false,
      "aside_width": "200px",
      "menu_item_home": {'name': 'index'},
    }
  },
  mounted: function() {
    let _this = this;
    document.getElementsByTagName('body')[0].style.height = window.innerHeight+'px';
    // 小窗口自动隐藏
    if (window.innerWidth <= 768) {
      _this.aside_width = "0px";
    }
    // 窗口监听
    window.onresize = function (){
      document.getElementsByTagName('body')[0].style.height = window.innerHeight+'px';
      // 小窗口自动隐藏
      if (window.innerWidth <= 768) {
        console.log('1');
        _this.aside_width = "0px";
      }else{
        _this.aside_width = "200px";
      }
    }
  },
  methods: {
    'home': function() {
      router.push({ name: 'index'})
    },
    'navbar': function (){
      this.aside_width = this.aside_width == "200px" ? "0px" : "200px" ;
    },
  }
}
</script>

<style lang="css" scoped>
.el-header {
  background-color: #545c64;
  color: #fff;
  text-align: center;
  line-height: 60px;
}
.el-footer {
  background-color: #545c64;
  color: #fff;
  text-align: center;
  line-height: 60px;
}
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
}
.el-aside::-webkit-scrollbar {
    display: none;
}
</style>
