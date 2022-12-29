<template>
  <div class="act_body_all">
    <div
      style="
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      "
    >
      <div class="act_btn">
        <div class="act_title">活动管理</div>
        <div class="act_btn_all">
          <el-button type="success" @click="addActivity" round
            >添加活动</el-button
          >
        </div>
      </div>
      <div style="width: 90%; margin-top: 10px">
        <div
          style="
            display: flex;
            align-items: center;
            margin-top: 20px;
            justify-content: end;
            margin-bottom: 10px;
          "
        >
          <div class="act_search">
            <el-input
              style="width: 220px"
              v-model="input"
              placeholder="搜索关键字"
              clearable
            />
            <el-button type="primary">搜索</el-button>
          </div>
        </div>

        <el-table :data="data.actInfo1" height="451px" style="width: 100%">
          <el-table-column prop="title" label="活动标题" />
          <el-table-column prop="introduce" label="活动介绍" />
          <el-table-column prop="starttime" label="开始时间" />
          <el-table-column prop="endtime" label="结束时间" />
          <el-table-column fixed="right" label="操作" width="120px">
            <template #default="scope">
              <div style="display: flex">
                <el-button
                  type="primary"
                  size="small"
                  @click.prevent="editRow(scope.$index)"
                >
                  编辑
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
          :total="data.actInfo.length"
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
  name: "activity",
  setup() {
    const { proxy } = getCurrentInstance();
    const input = ref("");
    const currentPage4 = ref(4);
    const value = ref("");
    const data = reactive({
      page: 1,
      page_size: 10,
      actInfo: [],
      actInfo1: [],
    });
    onMounted(() => {
      encyclopediasInfo();
    });
    function addActivity() {
      proxy.$router.push("/activityAdd"); //切换路由
    }
    function getPageData() {
      let start = (data.page - 1) * data.page_size;
      let end = start + data.page_size;
      data.actInfo1 = data.actInfo.slice(start, end);
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
        .post("/activity/info", {
          username: "admin",
        })
        .then((res) => {
          // console.log(res);
          data.actInfo = res.data;
          getPageData(); //分页
          // console.log(data);
        });
    }
    function editRow(index) {
      console.log(index);
      // proxy.$router.push("/"); //切换路由
    }
    function deleteRow(index) {
      console.log(index);
    }
    return {
      input,
      currentPage4,
      data,
      value,
      editRow,
      deleteRow,
      handleSizeChange,
      handleCurrentChange,
      addActivity,
    };
  },
};
</script>

<style>
.act_body_all {
  background-color: white;
  padding: 20px 20px 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.act_title {
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 2px;
  margin: 20px 20px 10px 20px;
}
.act_btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.act_btn_all {
  margin-right: 60px;
}
.act_search {
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
