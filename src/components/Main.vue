<!--
 * @Descripttion: 
 * @version: 
 * @Author: tangtianbao
 * @Date: 2021-08-30 09:19:21
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-01 10:49:25
-->
<template>
  <el-container class="main-container">
    <el-header>
      <div class="brand">
        <img src="../assets/brand.jpg" alt="" />
        <span>电商后台管理平台</span>
      </div>

      <el-button type="info" @click="loginOut()">退出</el-button>
    </el-header>
    <el-container>
      <el-aside :width="isCollapse? '60px':'200px'">
          <div class="toggle-button" @click="toggleCollapse()" v-show="!isCollapse">
              |||
          </div>
          <div class="toggle-button" @click="toggleCollapse()" v-show="isCollapse">
              ---
          </div>
        <el-menu
          :default-active="activePath"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#409eff"
          :collapse="isCollapse"
          :collapse-transition="false"
          router
        >
          <el-submenu :index="item.id+''" v-for="item in navList" :key="item.id">
            <template slot="title">
              <i :class="iconsobj[item.id]"></i>
              <span class="iconfont">{{item.authName}}</span>
            </template>
            <el-menu-item-group>
                <el-menu-item :index="'/'+subItem.path" v-for="subItem in item.children" :key="subItem.id" @click="saveNavState('/'+subItem.path)"><i class="el-icon-menu"></i>{{subItem.authName}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
         <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  name: "Main",
  data(){
      return{
         navList:[], 
         iconsobj:{
             '101':'fontFamily tb-icon-shangpin',
             '102':'fontFamily tb-icon-user',
             '103':'fontFamily tb-icon-tijikongjian',
             '104':'fontFamily tb-icon-baobiao',
         },
         isCollapse:false,
         activePath:'',
      }
      
  },
  methods: {
    loginOut() {
      window.sessionStorage.clear();
      this.$router.push("/home");
    },
     async getMenuList(){
        const {data:res}=await this.$http.get('/mock/navinfomation');
        if(res.meta.status!==200){
            this.$message.error();
        }
        else{
            this.navList=res.data;
        }  
    },
    //菜单折叠和展开
    toggleCollapse(){
        this.isCollapse=(!this.isCollapse);

    },
    saveNavState(activePath){
        window.sessionStorage.setItem('activePath',activePath);
        this.activePath=activePath;
    }
  },
  created(){
      this.getMenuList();
      this.activePath=window.sessionStorage.getItem('activePath');
  },
  
};
</script>
<style scoped>
.main-container {
  width: 100%;
  height: 100%;
}
.el-header {
  background-color: #373d41;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
}
.brand {
  align-items: center;
  height: 60px;
  display: flex;
}
.brand img {
  border-radius: 50%;
  width: 60px;
  height: 100%;
}
.brand span {
  margin-left: 20px;
}
.el-aside {
  background-color: #333744;
}
.el-main {
  background-color: #eaedf1;
}
.el-button {
  align-content: center;
  right: 20px;
}
.iconfont{
    margin-left: 15px;
}
.toggle-button{
    background-color: #4a5064;
    font-size: 10px;
    text-align: center;
    line-height: 20px;
    color:white;
    letter-spacing: .2em;
    cursor: pointer;
}
</style>
