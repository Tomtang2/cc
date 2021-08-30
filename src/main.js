/*
 * @Descripttion: 
 * @version: 
 * @Author: tangtianbao
 * @Date: 2021-08-09 17:02:58
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-30 00:00:03
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/global.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/font/iconfont.css'
import axios from 'axios'
import Mock from 'mockjs'
import VueResource from 'vue-resource'
require('./mock')
//配置请求的根路径
axios.defaults.baseURL=""
Vue.prototype.$http=axios
Vue.prototype.$Mock=Mock
Vue.use(ElementUI)
Vue.use(VueResource)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
