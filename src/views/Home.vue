<!--
 * @Descripttion: 
 * @version: 
 * @Author: tangtianbao
 * @Date: 2021-08-09 17:02:58
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-30 15:09:11
-->
<template>
  <div class="login-container">
     <div class="navBox">
       <div class="avatar">
         <img src="../assets/logo.png" alt="">
       </div>
      
  <el-form :model="loginBox"  ref="loginBox" :rules="loginFormRules" label-width="0px" class="login-box">
          <el-form-item prop="username">
            <el-input prefix-icon="fontFamily tb-icon-user" v-model="loginBox.username"></el-input>
          </el-form-item>

          <el-form-item prop="password">
            <el-input prefix-icon="fontFamily tb-icon-mima"  v-model="loginBox.password" show-password></el-input>
          </el-form-item>

          <el-form-item class="btns">
            <el-button type="primary" @click="login('loginBox')">登陆</el-button>
            <el-button type="info" @click="resetLoginForm('loginBox')">重置</el-button>
          </el-form-item>

           <el-form-item class="tipinfo">
            <span>默认账号：ttb   </span>
            <span>默认密码：123456</span>
      
          </el-form-item>

  </el-form>
     </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data(){
    return{
      loginBox:{
        username:'ttb',//登陆账号
        password:'123456'//登陆名称
      },
      loginFormRules:{
        username:[{required:true,message:"请输入姓名",trigger:'blur'}, 
                  { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }],
        password:[{required:true,message:"密码格式错误",trigger:'blur'},
                  { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }]
      }
    }
    
  },
  methods:{
    resetLoginForm(formName) {
        this.$refs[formName].resetFields();
      },
      login(formName){
        this.$refs[formName].validate(async valid=>{
          if(!valid){
            return
          }
         const res = await this.$http.post("/mock/userinformation",this.loginBox);
  
         if((this.loginBox.username===res.body[0].username)&&(this.loginBox.password===res.body[0].password)){
           window.sessionStorage.setItem('token',res.data[0].token);//存储token信息
            this.$message({
                message: '登陆成功！',
                type: 'success'
            });
            this.$router.push('/main');//通过编程式导航对象实现页面跳转
         }
         else{
            return this.$message.error('用户名或者密码错误，请重新登陆！');
         }
        })
      },
  }
  
}
</script>
<style scoped>
.login-container{
  background-color: #2b4b6b;
  height: 100%;

}
.navBox{
  width:450px;
  height:350px;
  background-color: white;
  position: absolute;
  left: 50%;
  top:50%;
  transform: translate(-50%,-50%);
}
.avatar{
  width: 130px;
  height: 130px;
  position: absolute;
  border: whitesmoke 1px solid;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px #ddd;
  left: 50%;
  transform: translate(-50%,-50%);

}
.avatar img{
  width: 100%;
  height:100%;
  border-radius: 50%;
  border: whitesmoke 1px solid;
}
.btns{
  display: flex;
  justify-content: flex-end;
}
.login-box{
  position: absolute;
  box-sizing: border-box;
  padding: 40px 20px;
  width: 100%;
  bottom: -50px;
 
}
.tipinfo{
  position: relative;
  box-sizing: border-box;
  bottom: 0;
  width: 80%;
  
}
.tipinfo span{
  font-size: 5px;
  font-family: 'Times New Roman', Times, serif;
}
</style>
