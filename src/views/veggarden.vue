<template>
  <div class="veg_body_all">
    <div
      style="
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      "
    >
      <div class="veg_btn">
        <div class="veg_title">菜园管理</div>
      </div>
      <div style="width: 90%; margin-top: 10px">
        <div
          style="
            display: flex;
            align-items: center;
            margin-top: 20px;
            justify-content: space-between;
            margin-bottom: 10px;
          "
        >
          <div class="veg_search">
            <el-input
              style="width: 220px"
              v-model="input"
              placeholder="输入菜园IP"
              clearable
            />
            <el-button type="warning" round>添加菜园</el-button>
          </div>
          <div class="veg_search">
            <el-input
              style="width: 220px"
              v-model="input"
              placeholder="搜索菜园IP/用户ID"
              clearable
            />
            <el-button type="primary">搜索</el-button>
          </div>
        </div>

        <el-table :data="data.gardenInfo1" height="451px" style="width: 100%">
          <el-table-column prop="gardenIP" label="菜园IP" />
          <el-table-column prop="gardenName" label="菜园名称" />
          <el-table-column prop="user_Id" label="用户ID" />

          <el-table-column prop="time" label="注册时间" />
          <el-table-column fixed="right" label="操作" width="120px">
            <template #default="scope">
              <div style="display: flex">
                <el-button
                  type="primary"
                  size="small"
                  @click.prevent="editRow(scope.$index)"
                >
                  详情
                </el-button>
                <el-button
                  type="danger"
                  size="small"
                  @click.prevent="deleteRow(scope.$index)"
                  >删除</el-button
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
          :total="data.gardenInfo.length"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, getCurrentInstance, onMounted, reactive } from "vue";
export default {
  name: "veggarden",
  setup() {
    const { proxy } = getCurrentInstance();
    const input = ref("");
    const currentPage4 = ref(4);
    const value = ref("");
    const data = reactive({
      page: 1,
      page_size: 10,
      gardenInfo: [],
      gardenInfo1: [],
    });
    const options = [
      {
        value: "全部",
        label: "全部",
      },
      {
        value: "点赞量",
        label: "点赞量",
      },
      {
        value: "收藏量",
        label: "收藏量",
      },
    ];
    onMounted(() => {
      encyclopediasInfo();
    });
    function getPageData() {
      let start = (data.page - 1) * data.page_size;
      let end = start + data.page_size;
      data.gardenInfo1 = data.gardenInfo.slice(start, end);
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
    function encyclopediasInfo() {
      proxy.$http
        .post("/garden/info", {
          username: "admin",
        })
        .then((res) => {
          // console.log(res);
          data.gardenInfo = res.data;
          getPageData(); //分页
          // console.log(data);
        });
    }
    function editRow(index) {
      console.log(index);
      proxy.$router.push("/gardenDetails"); //切换路由
    }
    function deleteRow(index) {
      console.log(index);
    }
    return {
      input,
      currentPage4,
      value,
      data,
      options,
      editRow,
      deleteRow,
      handleSizeChange,
      handleCurrentChange,
    };
  },
};
</script>

<style>
.veg_body_all {
  background-color: white;
  padding: 20px 20px 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.veg_title {
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 2px;
  margin: 20px 20px 10px 20px;
}
.veg_btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.veg_search {
  display: flex;
  justify-content: end;
}
.demo-pagination-block {
  margin-top: 10px;
}
/*隐藏滚动条*/
.el-table__body-wrapper {
  padding-right: 20px;
}
</style>
