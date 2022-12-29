<template>
  <div class="tec_body_all">
    <div
      style="
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      "
    >
      <div class="tec_btn">
        <div class="tec_title">技术文章管理</div>
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
          <el-select
            style="width: 150px"
            v-model="value"
            class="m-2"
            placeholder="全部"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <div class="tec_search">
            <el-input
              style="width: 220px"
              v-model="input"
              placeholder="搜索关键字"
              clearable
            />
            <el-button type="primary">搜索</el-button>
          </div>
        </div>

        <el-table :data="data.tecInfo1" height="451px" style="width: 100%">
          <el-table-column prop="name" label="用户微信名" />
          <el-table-column prop="userid" label="用户ID" />
          <el-table-column prop="title" label="标题" />
          <el-table-column prop="time" label="发布时间" />
          <el-table-column prop="code" label="状态">
            <template v-slot="scope">
              <p v-if="scope.row.code == 1" style="color: #409eff">已通过</p>
              <p v-if="scope.row.code == 0" style="color: #f56c6c">已拒绝</p>
              <p v-if="scope.row.code == 2" style="color: #67c23a">已推荐</p>
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="120px">
            <template #default="scope">
              <div style="display: flex">
                <el-button
                  type="primary"
                  size="small"
                  @click.prevent="editRow(scope.$index)"
                >
                  查看
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
          :total="data.tecInfo.length"
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
  name: "tecarticle",
  setup() {
    const { proxy } = getCurrentInstance();
    const input = ref("");
    const currentPage4 = ref(4);
    const value = ref("");
    const data = reactive({
      page: 1,
      page_size: 10,
      tecInfo: [],
      tecInfo1: [],
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
      data.tecInfo1 = data.tecInfo.slice(start, end);
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
        .post("/tecarticle/info", {
          username: "admin",
        })
        .then((res) => {
          // console.log(res);
          data.tecInfo = res.data;
          getPageData(); //分页
          // console.log(data);
        });
    }
    function editRow(index) {
      console.log(index);
      proxy.$router.push("/articleV"); //切换路由
    }
    function deleteRow(index) {
      console.log(index);
    }
    return {
      input,
      data,
      currentPage4,
      value,
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
.tec_body_all {
  background-color: white;
  padding: 20px 20px 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.tec_title {
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 2px;
  margin: 20px 20px 10px 20px;
}
.tec_btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.tec_search {
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
