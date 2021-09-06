<!--
 * @Descripttion: 
 * @version: 
 * @Author: tangtianbao
 * @Date: 2021-08-30 17:38:18
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-03 17:47:28
-->
<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户信息</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-input
              placeholder="请输入内容"
              v-model="searchContent"
              class="input-with-select"
            >
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>
        </el-col>
        <el-col :span="6"
          ><div class="grid-content bg-purple">
            <el-button type="primary" @click="dialogVisible = true"
              >添加用户</el-button
            >
          </div></el-col
        >
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
      <!--用户列表区域-->
      <el-row>
        <el-col>
          <el-table :data="userList" style="width: 100%">
            <el-table-column type="index"> </el-table-column>
            <el-table-column label="姓名" prop="username" width="100px">
            </el-table-column>
            <el-table-column label="密码" prop="password"> </el-table-column>
            <el-table-column
              label="邮箱"
              prop="personalemail"
            ></el-table-column>
            <el-table-column label="手机号" prop="phone"> </el-table-column>
            <el-table-column label="状态" width="100px">
              <template slot-scope="scope">
                <el-switch
                  v-model="scope.row.msg_status"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                >
                </el-switch>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="300px">
              <template slot-scope="scope">
                <el-button
                  type="primary"
                  size="min"
                  icon="el-icon-edit"
                  @click="showEditDialog(scope.row.id)"
                ></el-button>
                <el-button
                  type="danger"
                  size="min"
                  icon="el-icon-delete"
                  @click="deleteUserAlert(scope.row.id)"
                ></el-button>
                <el-button
                  type="warning"
                  size="min"
                  icon="el-icon-s-check"
                ></el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            background
            layout="total, sizes,prev, pager, next,jumper"
            :page-sizes="[1, 2, 3, 6]"
            :total="total"
            size="small"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="queryInfo.pagenum"
            :page-size="queryInfo.pagesize"
          ></el-pagination>
        </el-col>
      </el-row>
    </el-card>
    <!-- 添加用户对话框-->
    <el-dialog
      title="添加用户"
      :visible.sync="dialogVisible"
      width="30%"
      @close="addDialogClosed('addFormRef')"
    >
      <el-form
        :model="addForm"
        :rules="rules"
        ref="addFormRef"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="姓名" prop="username">
          <el-input v-model="addForm.username"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input v-model="addForm.password"></el-input>
        </el-form-item>

        <el-form-item label="邮箱" prop="personalemail">
          <el-input v-model="addForm.personalemail"></el-input>
        </el-form-item>

        <el-form-item label="手机" prop="phone">
          <el-input v-model="addForm.phone"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addUser()">
          确 定
        </el-button>
      </span>
    </el-dialog>
    <!--编辑用户对话框-->
    <el-dialog
      title="修改用户"
      :visible.sync="editDialogVisible"
      width="30%"
    >
      <el-form
        :model="editForm"
        :rules="rules"
        ref="editFormRef"
        label-width="70px"
      >
        <el-form-item label="姓名" prop="username">
          <el-input v-model="editForm.username"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input v-model="editForm.password"></el-input>
        </el-form-item>

        <el-form-item label="邮箱" prop="personalemail">
          <el-input v-model="editForm.personalemail"></el-input>
        </el-form-item>

        <el-form-item label="手机" prop="phone">
          <el-input v-model="editForm.phone"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editUser()"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    //验证邮箱的正确性
    var checkEmail = (rule, value, cb) => {
      var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
      if (reg.test(value)) {
        cb();
      } else {
        cb("请输入合法的邮箱！");
      }
    };

    //验证手机号的正确性
    var checkPhone = (rule, value, cb) => {
      var reg = /^1[3|4|5|8][0-9]\d{4,8}$/;
      if (reg.test(value)) {
        cb();
      } else {
        cb("请输入合法的手机号！");
      }
    };

    return {
      queryInfo: {
        // 查询参数
        query: "",
        // 当前的页码数
        pagenum: 1,
        // 每页显示多少条数据
        pagesize: 2,
      },
      deleteId:0,
      total: 10,
      userList: [],
      searchContent: "",
      dialogVisible: false,
      editDialogVisible:false,
      //添加对话框参数
      addForm: {
        username: "",
        password: "",
        personalemail: "",
        phone: "",
      },
      //编辑对话框参数
      editForm:{
        id:0,
        username: "",
        password: "",
        personalemail: "",
        phone: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入姓名！", trigger: "blur" },
          { min: 1, max: 20, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur",
          },
        ],
        personalemail: [
          { required: true, message: "请输入合法的邮箱！", trigger: "blur" },
          { validator: checkEmail, trigger: "blur" },
        ],
        phone: [
          { required: true, message: "请输入合法的手机号", trigger: "blur" },
          { validator: checkPhone, trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    async getUserInfo() {
      const res  = await this.$http.get("http://localhost:8081/userlist", {
        params: this.queryInfo,
      });
      console.log(res.body.data);
      if (res.body.status !== 201) return;
      this.userList = res.body.data;
      this.queryInfo.pagesize =parseInt(res.data.pagesize) ;
      this.total = res.data.total;
      this.queryInfo.pagenum=parseInt(res.data.pagenum) ;

    },
    addUser() {
      this.$refs.addFormRef.validate(async (valid) => {
        if (!valid) {
          return;
        }
        //可以发起用户的网络请求
        const { data: res } = await this.$http.post("/mock/adduser", {
          params: [this.addForm, this.queryInfo],
        });
        if (res.meta.status !== 201) return;
        this.dialogVisible = false;
        this.userList = res.user;
        this.pagesize = res.pagesize;
        this.total = res.total;
        this.getUserInfo();
      });
    },
    //查询更新数据库信息
    editUser(){
       this.$refs.editFormRef.validate( async(valid)=>{
         if(!valid) return
         const {data:body}=await this.$http.post("/mock/editsql",{params:this.editForm});
         if(body.meta.status!==205){
           return
         }
         this.editDialogVisible=false
         this.getUserInfo()
       })
    },
    deleteUserAlert(id){
      this.deleteId=id;
      this.$confirm('将永久删除该用户, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.deleteUser(id);
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消删除'
          });          
        });

    },
    //删除数据库信息
   async deleteUser(id){
    const res= await this.$http.get("/mock/deletesql"+id);
     this.getUserInfo();
     
    },
    addDialogClosed(formName) {
      this.$refs[formName].resetFields();
    },
    //监听到的每页包括几条数据
    handleSizeChange(newSize) {
      this.queryInfo.pagesize = newSize;
      this.getUserInfo();
      //console.log(newSize);
    },
    //监听到的当前页码值
    handleCurrentChange(newPage) {
      this.queryInfo.pagenum = newPage;
      this.getUserInfo();
    },
    //显示用户修改对话框
    async showEditDialog(id){
      this.editDialogVisible=true;
       
      const{data:res}= await this.$http.get("/mock/edituser"+id);
      if(res.meta.status!==208)return
    //  console.log(res)
      this.editForm.id=res.user[0].id;
      this.editForm.username=res.user[0].username
      this.editForm.password=res.user[0].password
      this.editForm.personalemail=res.user[0].personalemail
      this.editForm.phone=res.user[0].phone
    },
  },
  created() {
    this.getUserInfo();
  },
};
</script>
<style scoped>
.box-card {
  margin-top: 20px;
  box-shadow: white !important;
}
.el-pagination {
  margin-top: 20px;
}
</style>
