/*
 * @Descripttion:
 * @version:
 * @Author: tangtianbao
 * @Date: 2021-08-29 18:13:57
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-30 15:58:36
 */
// mock.js

// 引入mockjs
const Mock = require("mockjs");

// mock用户信息loginInfo,username用户姓名,password用户密码
const produceNewsData = function() {
  let newsList = [];
  let loginInfo = {
    username: "ttb",
    password: "123456",
    token: "022232324325432",
  };

  newsList.push(loginInfo);
  return newsList;
};

const navTitle = function() {
  let navInfo = {
    data: [
      {
        id: 101,
        authName: "商品管理",
        path: null,
        children: [
          {
            id: 104,
            authName: "商品列表",
            path: null,
            children: [],
          },
        ],
      },
      {
        id: 102,
        authName: "用户管理",
        path: null,
        children: [
            {
              id: 104,
              authName: "用户信息",
              path: null,
              children: [],
            },
          ],
      },
      {
        id: 103,
        authName: "权限管理",
        path: null,

      },
      {
        id: 104,
        authName: "订单管理",
        path: null,

      },
    ],
    meta: {
      msg: "获取列表成功",
      status: 200,
    },
  };
  return navInfo;
};
// 请求该url，就可以返回newsList
Mock.mock("/mock/userinformation", produceNewsData); // 后面讲这个api的使用细节
Mock.mock("/mock/navinfomation", navTitle);//返回导航栏信息表
