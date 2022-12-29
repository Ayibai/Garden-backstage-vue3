<template>
  <div class="ency_body_all">
    <div
      style="
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      "
    >
      <div class="ency_btn">
        <div class="ency_title">百科管理</div>
        <div class="ency_btn_all">
          <el-button type="success" @click="addEncy" round>添加百科</el-button>
          <el-button type="success" round>批量添加</el-button>
        </div>
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
          <div class="ency_search">
            <el-input
              style="width: 220px"
              v-model="input"
              placeholder="搜索关键字"
              clearable
            />
            <el-button type="primary">搜索</el-button>
          </div>
        </div>

        <el-table :data="data.encyInfo1" height="451px" style="width: 100%">
          <el-table-column prop="name" label="名称" />
          <el-table-column prop="category" label="类别" />
          <el-table-column prop="describe" label="描述" show-overflow-tooltip />
          <el-table-column prop="time" label="添加时间" />
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
          :total="data.encyInfo.length"
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
  name: "encyclopedias",
  setup() {
    const { proxy } = getCurrentInstance();
    const input = ref("");
    const currentPage4 = ref(4);
    const value = ref("");
    const data = reactive({
      page: 1,
      page_size: 10,
      encyInfo: [],
      encyInfo1: [],
    });
    const options = [
      {
        value: "全部",
        label: "全部",
      },
      {
        value: "蔬菜",
        label: "蔬菜",
      },
      {
        value: "水果",
        label: "水果",
      },
      {
        value: "昆虫",
        label: "昆虫",
      },
      {
        value: "病害",
        label: "病害",
      },
    ];
    onMounted(() => {
      encyclopediasInfo();
    });
    function getPageData() {
      let start = (data.page - 1) * data.page_size;
      let end = start + data.page_size;
      data.encyInfo1 = data.encyInfo.slice(start, end);
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
        .post("/encyclopedias/info", {
          username: "admin",
        })
        .then((res) => {
          // console.log(res);
          data.encyInfo = res.data;
          getPageData(); //分页
          // console.log(data);
        });
    }
     function editRow(index) {
      console.log(index);
    }
    function deleteRow (index) {
      console.log(index);
    }
    function addEncy(){
      proxy.$router.push("/encyAdd"); //切换路由
    }
    return {
      input,
      currentPage4,
      value,
      options,
      data,
      handleSizeChange,
      handleCurrentChange,
      addEncy,
      editRow,
      deleteRow
    };
  },
};
</script>

<style>
.ency_body_all {
  background-color: white;
  padding: 20px 20px 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.ency_title {
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 2px;
  margin: 20px 20px 10px 20px;
}
.ency_btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.ency_btn_all {
  margin-right: 60px;
}
.ency_search {
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
