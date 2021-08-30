/*
 * @Descripttion: 
 * @version: 
 * @Author: tangtianbao
 * @Date: 2021-08-09 17:02:58
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-30 10:05:49
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../components/Main.vue'


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
    component: Main
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
