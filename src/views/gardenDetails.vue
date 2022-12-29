<template>
  <el-scrollbar>
    <div class="garD_body_all">
      <div style="width: 100%">
        <el-page-header title="返回" content="菜园详情" @back="goBack" />
      </div>
      <div
        style="
          display: flex;
          width: 100%;
          justify-content: space-between;
          margin-top: 20px;
          padding-bottom: 10px;
          border-bottom: 2px solid #f2f2f2;
        "
      >
        <div style="display: flex; align-items: center; margin-left: 20px">
          菜园IP：
          <div style="color: #409eff">192.168.137.4</div>
        </div>
        <div style="display: flex; align-items: center">
          注册时间：
          <div style="color: #409eff">2021-12-31</div>
        </div>
        <div class="garD_author">
          <img :src="imgSrc" style="width: 50px; height: 50px" alt="" />
          <div class="garD_author_text">
            <div class="garD_time">
              <div style="color: #409eff">所属人：</div>
              <div>吐个泡泡</div>
            </div>
            <div class="garD_time">
              <div style="color: #409eff">ID：</div>
              <div>1909109</div>
            </div>
          </div>
        </div>
      </div>
      <div
        style="
          display: flex;
          width: 100%;
          justify-content: space-around;
          margin-top: 20px;
          padding-bottom: 10px;
          border-bottom: 2px solid #f2f2f2;
          align-items: center;
        "
      >
        <div style="display: flex; align-items: center">
          <div
            style="display: flex; flex-direction: column; align-items: center"
          >
            <div v-for="fit in fits" :key="fit">
              <el-image
                style="width: 140px; height: 140px"
                :src="url"
                :fit="fit"
              ></el-image>
            </div>
            <div>山竹</div>
          </div>
          <div style="margin: -30px 0px 0px 40px; line-height: 40px">
            <div style="display: flex; align-items: center">
              风扇：
              <div style="color: #409eff">正常</div>
            </div>
            <div style="display: flex; align-items: center">
              光照：
              <div style="color: #c00909">异常</div>
            </div>
            <div style="display: flex; align-items: center">
              水泵：
              <div style="color: #409eff">正常</div>
            </div>
          </div>
        </div>
        <div style="display: flex">
          <div style="line-height: 40px">
            <div style="display: flex; align-items: center">
              种植天数：
              <div style="color: #409eff">20</div>
              天
            </div>
            <div style="display: flex; align-items: center">
              环境温度：
              <div style="color: #409eff">23</div>
              (℃)
            </div>
            <div style="display: flex; align-items: center">
              土壤湿度：
              <div style="color: #409eff">52</div>
              (%)
            </div>
            <div style="display: flex; align-items: center">
              发布种植日记：
              <div style="color: #409eff">20</div>
              篇
            </div>
          </div>
          <div style="line-height: 40px; margin-left: 30px">
            <div style="display: flex; align-items: center">
              环境湿度：
              <div style="color: #409eff">43</div>
              (hPa)
            </div>
            <div style="display: flex; align-items: center">
              光照总量：
              <div style="color: #409eff">1.0</div>
              (K/LUX)
            </div>
            <div style="display: flex; align-items: center">
              PH值：
              <div style="color: #409eff">7</div>
            </div>
          </div>
        </div>
      </div>

      <div
        style="
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        "
      >
        <div class="garD_btn">
          <div class="garD_title">种植记录</div>
        </div>
        <div style="width: 90%; margin-top: 10px">
          <div
            style="
              display: flex;
              align-items: center;
              justify-content: end;
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
          </div>

          <el-table :data="tableData" height="451px" style="width: 100%">
            <el-table-column prop="nickName" label="种植名称" />
            <el-table-column prop="userId" label="成功/失败" />
            <el-table-column prop="gardenIp" label="开始种植时间" />
            <el-table-column prop="createTime" label="结束种植时间" />
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
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="10"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </el-scrollbar>
</template>

<script>
import { ref, getCurrentInstance } from "vue";
export default {
  name: "gardenDetails",
  setup() {
    const { proxy } = getCurrentInstance();
    const fits = ["scale-down"];
    const imgSrc = require("../assets/zyhylogo.png");
    const url = require("../assets/background.png");
    const currentPage4 = ref(4);
    const value = ref("");
    const options = [
      {
        value: "全部",
        label: "全部",
      },
      {
        value: "成功",
        label: "成功",
      },
      {
        value: "失败",
        label: "失败",
      },
    ];
    const tableData = [
      {
        nickName: "魏麟",
        userId: "1909104",
        gardenIp: "192.168.137.9",
        createTime: "2022-01-01",
        phoneNumber: "15534281004",
        code: "已审核",
      },
      {
        nickName: "魏麟",
        userId: "1909104",
        gardenIp: "192.168.137.9",
        createTime: "2022-01-01",
        phoneNumber: "15534281004",
        code: "未审核",
      },
      {
        nickName: "魏麟",
        userId: "1909104",
        gardenIp: "192.168.137.9",
        createTime: "2022-01-01",
        phoneNumber: "15534281004",
        code: "已审核",
      },
      {
        nickName: "魏麟",
        userId: "1909104",
        gardenIp: "192.168.137.9",
        createTime: "2022-01-01",
        phoneNumber: "15534281004",
        code: "已审核",
      },
      {
        nickName: "魏麟",
        userId: "1909104",
        gardenIp: "192.168.137.9",
        createTime: "2022-01-01",
        phoneNumber: "15534281004",
        code: "已审核",
      },
      {
        nickName: "魏麟",
        userId: "1909104",
        gardenIp: "192.168.137.9",
        createTime: "2022-01-01",
        phoneNumber: "15534281004",
        code: "未审核",
      },
      {
        nickName: "魏麟",
        userId: "1909104",
        gardenIp: "192.168.137.9",
        createTime: "2022-01-01",
        phoneNumber: "15534281004",
        code: "未审核",
      },
      {
        nickName: "魏麟",
        userId: "1909104",
        gardenIp: "192.168.137.9",
        createTime: "2022-01-01",
        phoneNumber: "15534281004",
        code: "已审核",
      },
      {
        nickName: "魏麟",
        userId: "1909104",
        gardenIp: "192.168.137.9",
        createTime: "2022-01-01",
        phoneNumber: "15534281004",
        code: "未审核",
      },
      {
        nickName: "魏麟",
        userId: "1909104",
        gardenIp: "192.168.137.9",
        createTime: "2022-01-01",
        phoneNumber: "15534281004",
        code: "未审核",
      },
      {
        nickName: "魏麟",
        userId: "1909104",
        gardenIp: "192.168.137.9",
        createTime: "2022-01-01",
        phoneNumber: "15534281004",
        code: "已审核",
      },
    ];
    function goBack() {
      proxy.$router.go(-1);
    }
    function editRow(index) {
      console.log(index);
      proxy.$router.push("/plantinRecords");
    }
    function deleteRow(index) {
      console.log(index);
    }
    function handleSizeChange() {}
    function handleCurrentChange() {}
    return {
      imgSrc,
      url,
      fits,
      currentPage4,
      value,
      options,
      tableData,
      goBack,
      editRow,
      deleteRow,
      handleSizeChange,
      handleCurrentChange,
    };
  },
};
</script>

<style>
.garD_body_all {
  background-color: white;
  padding: 20px 20px 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.garD_time {
  display: flex;
}
.garD_author {
  display: flex;
  align-items: center;
  margin-right: 20px;
}
.garD_author_text {
  margin-left: 10px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.garD_title {
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 2px;
  margin: 20px 20px 10px 20px;
}
.garD_btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.demo-pagination-block {
  margin-top: 10px;
}
/*隐藏滚动条*/
.el-table__body-wrapper {
  padding-right: 20px;
}
</style>
