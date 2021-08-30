/*
 * @Descripttion: 
 * @version: 
 * @Author: tangtianbao
 * @Date: 2021-08-29 18:13:57
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-30 09:31:04
 */
// mock.js
 
// 引入mockjs
const Mock = require('mockjs')

// mock用户信息loginInfo,username用户姓名,password用户密码
const produceNewsData = function () {
 let newsList = []
 let loginInfo={
     username:'ttb',
     password:'123456',
     token:'022232324325432',
 }

 newsList.push(loginInfo)
 return newsList
}
// 请求该url，就可以返回newsList
Mock.mock('/mock/userinformation', produceNewsData) // 后面讲这个api的使用细节