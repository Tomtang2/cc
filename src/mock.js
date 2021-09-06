/*
 * @Descripttion:
 * @version:
 * @Author: tangtianbao
 * @Date: 2021-08-29 18:13:57
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-02 17:30:05
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
            id: 105,
            authName: "商品列表",
            path: 'goodslist',
            children: [],
          },
          {
            id: 106,
            authName: "商品价格",
            path: 'goodsprice',
            children: [],
          },
          {
            id: 107,
            authName: "商品回收",
            path: 'goodsrecycle',
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
              id: 108,
              authName: "用户信息",
              path: 'userinfo',
              children: [],
            },
          ],
      },
      {
        id: 103,
        authName: "权限管理",
        path: null,
        children: [
            {
              id: 109,
              authName: "管理员",
              path: 'management',
              children: [],
            },
          ],

      },
      {
        id: 104,
        authName: "订单管理",
        path: null,
        children: [
            {
              id: 109,
              authName: "添加订单",
              path: 'addorder',
              children: [],
            },
            {
                id: 110,
                authName: "删除订单",
                path: 'deleteorder',
                children: [],
              },
          ],

      },
    ],
    meta: {
      msg: "获取列表成功",
      status: 200,
    },
  };
  return navInfo;
};
let userinfo=[
  {
    id:1,
    username: "张三",
    password: "1234",
    personalemail: "1902242890@qq.com",
    phone: "1869087654",
    msg_status:true,
  },
  {
    id:2,
    username: "李四",
    password: "34567",
    personalemail: "admin@168.com",
    phone: "13789654023",
    msg_status:true,
  },
  {
    id:3,
    username: "王五",
    password: "4327948375",
    personalemail: "1347983@163.com",
    phone: "15098765678",
    msg_status:false,
    
  },
  {
    id:4,
    username: "秦奋",
    password: "2352346",
    personalemail: "47435252@qq.com",
    phone: "15054782345",
    msg_status:false,
    
  },
  {
    id:5,
    username: "雪女",
    password: "246546537",
    personalemail: "7848576@enn.com",
    phone: "17156903427",
    msg_status:false,
  } 
]
let total=5
//修改用户
const editList=function(user){
    userinfo[user.id-1].username=user.username
    userinfo[user.id-1].password=user.password
    userinfo[user.id-1].personalemail=user.personalemail
    userinfo[user.id-1].phone=user.phone
    userinfo[user.id-1].status=false
    let userlist={
      user:[],
    meta: {
      msg: "修改用户信息",
      status: 205,
     },
    }
    userlist.user.push(userinfo[user.id-1]);
    return userlist

}

//查询数据
const findList=function(id){
  let userlist={
    user:[],
    meta: {
      msg: "修改用户信息",
      status: 208,
    },
  }
  userlist.user.push(userinfo[id-1]);
  return userlist
}
//用户列表数据
const userList=function(query,pagenum,pagesize){
  let userlist = {
      total:total,
      pagenum:pagenum,
      pagesize:pagesize,
      user:[],
      meta: {
        msg: "获取用户信息成功",
        status: 201,
      },
  };
  var clickTotal=pagenum*pagesize;
  if(userlist.total%2==0){
    if(clickTotal>userlist.total){
      for(var i=pagenum-1;i<userlist.total;i++){
        userlist.user.push(userinfo[i]);
      }
    }
    else{
      for(var i=(pagenum-1)*pagesize;i<clickTotal;i++){
        userlist.user.push(userinfo[i]);
      }
    }
  }
  else{
    if(clickTotal>userlist.total+1){
      for(var i=pagenum-1;i<userlist.total;i++){
        userlist.user.push(userinfo[i]);
      }
    }
    else{
      for(var i=(pagenum-1)*pagesize;i<clickTotal;i++){
        userlist.user.push(userinfo[i]);
      }
    }

  }
  
  return userlist;
}
//把传入的参数取出来
const getParams=(url,name)=>{
  //console.log(url,name);
  const index=url.indexOf('?');
  //console.log(index);
  if(index!==-1){
      const newArr=url.substring(index+1).split('&');
      //console.log(newArr)
      for(var i=0;i<newArr.length;i++){
          const itemArr=newArr[i].split('=');
          //console.log(itemArr)
          if(itemArr[0]==name){
              return itemArr[1];
          }
      }
  }
  return null;
  
}
//删除元素
const deleteList=function(id){
  
       var newlist=[];
       for(var i=0;i<total;i++){
         if(i!=(id-1)){
           newlist.push(userinfo[i]);
         }
       }
       userinfo=newlist
    //   return newlist
}
// 请求该url，就可以返回newsList
//Mock.mock("/mock/userinformation", produceNewsData); // 后面讲这个api的使用细节
Mock.mock("/mock/navinfomation", navTitle);//返回导航栏信息表
Mock.mock(RegExp("/mock/userList"+".*"), 'get',(options)=>{
  var pagenum=parseInt(getParams(options.url,'pagenum'));
  var pagesize=parseInt(getParams(options.url,'pagesize'));
  return Mock.mock(userList('',pagenum,pagesize)) ;

});
Mock.mock("/mock/adduser",'post',(options)=>{
   var data= JSON.parse(options.body);
   const {username,password,personalemail,phone} = data.params[0]; 
   const {query,pagenum,pagesize}=data.params[1];
   let obj={
    username:username,
    password: password,
    personalemail:personalemail,
    phone:phone,
    msg_status:true,
  } 
  
  userinfo.push(obj);
  total+=1;
  return Mock.mock(userList('',parseInt(pagenum) ,parseInt(pagesize)));
});

//截取字符串，起始位置是url位置
Mock.mock(RegExp("/mock/edituser"+".*"),"get",(options)=>{
  var num=parseInt(options.url.substring(14,options.url.length))
  return Mock.mock(findList(num))
})
Mock.mock("/mock/editsql",'post',(options)=>{
  var data= JSON.parse(options.body);
  const {id,username,password,personalemail,phone} = data.params;
  let obj={
    id:id,
    username:username,
    password: password,
    personalemail:personalemail,
    phone:phone,
  } 
  editList(obj);
  return Mock.mock(editList(obj));
})
Mock.mock(RegExp("/mock/deletesql"+".*"),'get',(options)=>{
  var num=parseInt(options.url.substring(15,options.url.length))
  deleteList(num);
  return Mock.mock(userinfo)
})