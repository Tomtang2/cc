<!--
 * @Descripttion: 
 * @version: 
 * @Author: tangtianbao
 * @Date: 2021-08-30 09:19:21
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-30 15:58:13
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
      <el-aside width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>商品操作</span>
            </template>
            <el-menu-item index="1-1">
              <i class="el-icon-info"></i>
              <span>{{navList[0].authName}}</span>
            </el-menu-item>
            <el-menu-item index="1-2">
              <i class="el-icon-goods"></i>
              <span>{{navList[1].authName}}</span>
            </el-menu-item>
            <el-menu-item index="1-3">
              <i class="el-icon-s-tools"></i>
              <span>{{navList[2].authName}}</span>
            </el-menu-item>
            <el-menu-item index="1-4">
              <i class="el-icon-setting"></i>
              <span>{{navList[3].authName}}</span>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>导航二</span>
            </template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-menu-item index="2-4">选项4</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  name: "Main",
  data(){
      return{
         navList:[], 
      }
      
  },
  methods: {
    loginOut() {
      window.sessionStorage.clear();
      this.$router.push("/home");
    },
     async getMenuList(){
        const {data:res}=await this.$http.get('/mock/navinfomation');
        console.log(res.data);
        if(res.meta.status!==200){
            this.$message.error();
        }
        this.navList=res.data;
    }
  },
  created(){
      this.getMenuList();
  }
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
</style>
