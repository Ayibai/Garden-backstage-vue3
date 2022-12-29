<template>
  <div class="users_body_all">
    <div style="width: 100%">
      <div class="users_title">用户管理</div>
      <div class="users_search">
        <el-input
          style="width: 220px"
          v-model="input"
          placeholder="输入用户名/用户ID/菜园IP"
          clearable
        />
        <el-button type="primary">搜索</el-button>
      </div>
    </div>
    <div style="width: 95%; margin-top: 10px">
      <el-table :data="data.userInfo1" height="433.4px" style="width: 100%">
        <el-table-column prop="nickName" label="用户微信名" />
        <el-table-column prop="user_id" label="用户ID" />
        <el-table-column prop="gardenIp" label="菜园IP" />
        <el-table-column prop="time" label="注册时间" />
        <el-table-column prop="phone" label="联系方式" />
        <el-table-column fixed="right" label="操作" width="120px">
          <template #default="scope">
            <div style="display: flex">
              <el-button
                type="danger"
                size="small"
                @click.prevent="deleteRow(scope.$index)"
              >注销</el-button
              >
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="demo-pagination-block">
      <el-pagination
        v-model:currentPage="currentPage4"
        :page-sizes="[10, 20, 30, 40]"
        v-model:page-size="data.page_size"
        v-model:current-page="data.page"
        layout="total, sizes, prev, pager, next, jumper"
        :total="data.userinfo.length"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import {
  ref,
  getCurrentInstance,
  onMounted,
  reactive,
} from "vue";
export default {
  name: "users",
  setup() {
    const { proxy } = getCurrentInstance();
    const input = ref("");
    const currentPage4 = ref(4);
    const data = reactive({
      page: 1,
      page_size: 10,
      userinfo: [],
      userInfo1: [],
    });
    onMounted(() => {
      userInfo(); //用户信息
    });
    function getPageData() {
      let start = (data.page - 1) * data.page_size;
      let end = start + data.page_size;
      data.userInfo1 = data.userinfo.slice(start, end);
      // console.log(start)
      // console.log(end)
      // console.log(data.userinfo)
    }
    function handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      data.page_size = val;
      getPageData();
    }
    function handleCurrentChange(val) {
      data.page = val;
      console.log(val);
      getPageData();
    }
    function userInfo() {
      proxy.$http
        .post("/users/info", {
          username: "admin",
        })
        .then((res) => {
          // console.log(res);
          data.userinfo = res.data;
          getPageData(); //分页
          // console.log(data);
        });
    }
    //注销按钮
    function deleteRow(index) {
      console.log(index);
    }
    return {
      input,
      currentPage4,
      data,
      handleSizeChange,
      handleCurrentChange,
      deleteRow,
      getPageData,
    };
  },
};
</script>

<style>
.users_body_all {
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.users_title {
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 2px;
  margin: 20px 20px 10px 20px;
}
.users_search {
  display: flex;
  justify-content: end;
  margin-right: 40px;
}
.demo-pagination-block {
  margin-top: 10px;
}
/*隐藏滚动条*/
.el-table__body-wrapper {
  padding-right: 20px;
}
</style>
