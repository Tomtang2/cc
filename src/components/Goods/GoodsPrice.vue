<!--
 * @Descripttion: 
 * @version: 
 * @Author: tangtianbao
 * @Date: 2021-09-01 15:00:34
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-01 17:53:56
-->
<template>
  <div>
      <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品价格</el-breadcrumb-item>
     </el-breadcrumb>
     <div style="position:relative;top:10px">
         <el-row :gutter="20">
      <el-col :span="6">
        <el-card class="box-card">
          <img
                src="../../assets/goodsprice/MixFOLD.png"
                class="image"
              />
        </el-card>
      </el-col>
      <el-col :span="30">
        <el-row :gutter="40">
          <el-col :span="6">
            <el-card :body-style="{ padding: '0px' }">
              <img src="../../assets/goodsprice/XiaomiMix4.png" class="image" />
              <span>小米Mix</span><br />
              <span style="color:red;bottom:10px">4999起</span>
            </el-card>
          </el-col>
          <el-col :span="6"
            ><el-card :body-style="{ padding: '0px' }">
              <img
                src="../../assets/goodsprice/XiaomiMixFOLD.png"
                class="image"
              />
              <span>小米MixFOLD</span><br />
              <span style="color:red;bottom:10px">6999起</span>
            </el-card></el-col
          >
          <el-col :span="6"
            ><el-card :body-style="{ padding: '0px' }">
              <img
                src="../../assets/goodsprice/XiaomiNote10.png"
                class="image"
              />
              <span>小米Note10</span><br />
              <span style="color:red;bottom:10px">3589起</span>
            </el-card></el-col
          >
          <el-col :span="6"
            ><el-card :body-style="{ padding: '0px' }">
              <img
                src="../../assets/goodsprice/XiaomiUltra11.png"
                class="image"
              />
              <span>小米Ultra11</span><br />
              <span style="color:red;bottom:10px">3478起</span>
            </el-card></el-col
          >
        </el-row>
        <el-row :gutter="40">
          <el-col :span="6"
            ><el-card :body-style="{ padding: '0px' }">
              <img
                src="../../assets/goodsprice/K40Increase.png"
                class="image"
              />
              <span>K40游戏增强版</span><br />
              <span style="color:red;bottom:10px">4999起</span>
            </el-card></el-col
          >
          <el-col :span="6"
            ><el-card :body-style="{ padding: '0px' }">
              <img
                src="../../assets/goodsprice/RedmiNote10.png"
                class="image"
              />
              <span>红米Note10</span><br />
              <span style="color:red;bottom:10px">4999起</span>
            </el-card></el-col
          >
          <el-col :span="6"
            ><el-card :body-style="{ padding: '0px' }">
              <img
                src="../../assets/goodsprice/Xiaomi11Pro.png"
                class="image"
              />
              <span>小米11Pro</span><br />
              <span style="color:red;bottom:10px">4999起</span>
            </el-card></el-col
          >
          <el-col :span="6"
            ><el-card :body-style="{ padding: '0px' }">
              <img
                src="../../assets/goodsprice/Xiaomi11qingchun.png"
                class="image"
              />
              <span>小米11青春版</span><br />
              <span style="color:red;bottom:10px">4999起</span>
            </el-card></el-col
          >
        </el-row>
        <el-row :gutter="40">
          <el-col :span="6"
            ><el-card :body-style="{ padding: '0px' }">
              <img
                src="../../assets/goodsprice/K40Increase.png"
                class="image"
              />
              <span>K40游戏增强版</span><br />
              <span style="color:red;bottom:10px">4999起</span>
            </el-card></el-col
          >
          <el-col :span="6"
            ><el-card :body-style="{ padding: '0px' }">
              <img
                src="../../assets/goodsprice/RedmiNote10.png"
                class="image"
              />
              <span>红米Note10</span><br />
              <span style="color:red;bottom:10px">4999起</span>
            </el-card></el-col
          >
          <el-col :span="6"
            ><el-card :body-style="{ padding: '0px' }">
              <img
                src="../../assets/goodsprice/Xiaomi11Pro.png"
                class="image"
              />
              <span>小米11Pro</span><br />
              <span style="color:red;bottom:10px">4999起</span>
            </el-card></el-col
          >
          <el-col :span="6"
            ><el-card :body-style="{ padding: '0px' }">
              <img
                src="../../assets/goodsprice/Xiaomi11qingchun.png"
                class="image"
              />
              <span>小米11青春版</span><br />
              <span style="color:red;bottom:10px">4999起</span>
            </el-card></el-col
          >
        </el-row>
      </el-col>
    </el-row>
     </div>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
    };
  },
};
</script>
<style scoped>
.el-row {
  margin-bottom: 20px;
}
.el-row :last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.el-card {
  position: relative;
  display: table;
  text-align: center;
}
.el-card span {
  font-size: 10px;
  letter-spacing: 0.2em;
  position: relative;
  width: 150px;
  display: table-cell;
  vertical-align: middle;
}

.el-card img {
  display: table-cell;
  height: 120px;
}
.el-card:hover{
    transform: scale(1.1);
}
.box-card{
    width: 100%;
}
.box-card img{
    width: 80%;
    height:60%;
}

</style>
