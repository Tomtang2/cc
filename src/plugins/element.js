/*
 * @Descripttion: 
 * @version: 
 * @Author: tangtianbao
 * @Date: 2021-08-27 17:54:29
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-01 14:01:42
 */
import Vue from 'vue'
import {Button,Form,FormItem,Input,Message,Container,Header,Main,Aside,Menu,Submenu,MenuItemGroup,MenuItem,Breadcrumb,BreadcrumbItem,Card,Row,Col,Dialog,Option,
        Select,Table,TableColumn,Switch,Pagination,MessageBox} from 'element-ui'
Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input)
Vue.use(Container)
Vue.use(Header);
Vue.use(Main);
Vue.use(Aside);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Card);
Vue.use(Row);
Vue.use(Col);
Vue.use(Dialog);
Vue.use(Option);
Vue.use(Select);
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch);
Vue.use(Pagination);
Vue.use(MessageBox);
Vue.prototype.$message=Message
Vue.prototype.$confirm = MessageBox.confirm