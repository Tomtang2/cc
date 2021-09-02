/*
 * @Descripttion: 
 * @version: 
 * @Author: tangtianbao
 * @Date: 2021-08-09 17:02:58
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-01 15:16:24
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../components/Main.vue'
import Welcome from '../components/Welcome.vue'
import UserInfo from '../components/User/UserInfo.vue'
import GoodsList from '../components/Goods/GoodsList.vue'
import GoodsPrice from '../components/Goods/GoodsPrice.vue'


Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/main',
    name: 'Main',
    component: Main,
    redirect:'/welcome',
    children:[
      {
        path:'/welcome',
        component:Welcome
      },
      {
        path:'/userinfo',
        component:UserInfo
      },
      {
        path:'/goodslist',
        component:GoodsList
      },
      {
        path:'/goodsprice',
        component:GoodsPrice
      },
    ]
    
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from ,next)=>{
  if(to.path==='/home'){
    return next();
  }
    const tok=window.sessionStorage.getItem('token');
    if(!tok){
     return next('/home');
    }
    next();
})
export default router
