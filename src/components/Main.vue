<!--
 * @Descripttion: 
 * @version: 
 * @Author: tangtianbao
 * @Date: 2021-08-30 09:19:21
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-30 10:11:07
-->
<template>
  <div>
    <el-button type="info" @click="loginOut()">退出</el-button>
  </div>
</template>
<script>
export default {
  name: "Main",
  methods: {
    loginOut() {
      window.sessionStorage.clear();
      this.$router.push("/home");
    },
  },
};
</script>
