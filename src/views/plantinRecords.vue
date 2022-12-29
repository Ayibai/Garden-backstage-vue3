<template>
  <el-scrollbar>
    <div class="plantR_body_all">
      <div
        style="
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        "
      >
        <div class="plantR_btn">
          <el-page-header title="返回" content="种植数据" @back="goBack" />
        </div>
        <div
          style="
            border-top: 2px solid rgba(242, 242, 242, 242);
            margin-top: 10px;
          "
        >
          <div
            style="
              margin: 10px 0 0 10px;
              color: rgb(64, 158, 255);
              font-weight: bolder;
              font-size: 20px;
              letter-spacing: 2px;
              display: flex;
              align-items: center;
              justify-content: center;
            "
          >
            第一天
          </div>
          <div
            style="display: flex; justify-content: center; align-items: center"
          >
            <div
              style="
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
              "
            >
              <div
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  margin-top: -26px;
                "
              >
                <div
                  ref="chartDom"
                  :style="{ width: '400px', height: '300px' }"
                ></div>
                <div class="plantR_ectext">环境温度</div>
              </div>
              <div
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  margin-top: -26px;
                "
              >
                <div
                  ref="chartDom1"
                  :style="{ width: '400px', height: '300px' }"
                ></div>
                <div class="plantR_ectext">环境湿度</div>
              </div>
              <div
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  margin-top: -26px;
                "
              >
                <div
                  ref="chartDom2"
                  :style="{ width: '400px', height: '300px' }"
                ></div>
                <div class="plantR_ectext">光照强度</div>
              </div>
              <div
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  margin-top: -26px;
                "
              >
                <div
                  ref="chartDom3"
                  :style="{ width: '400px', height: '300px' }"
                ></div>
                <div class="plantR_ectext">土壤湿度</div>
              </div>
              <div
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  margin-top: -26px;
                "
              >
                <div
                  ref="chartDom4"
                  :style="{ width: '400px', height: '300px' }"
                ></div>
                <div class="plantR_ectext">PH值</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style="margin-top: 20px">
        <el-pagination
          v-model:currentPage="currentPage4"
          v-model:page-size="pageSize4"
          :page-sizes="[100, 200, 300, 400]"
          :small="small"
          :disabled="disabled"
          :background="background"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </div>
    </div>
  </el-scrollbar>
</template>

<script>
import { getCurrentInstance, onMounted, reactive, ref } from "vue";
import * as echarts from "echarts/core";
import { GridComponent } from "echarts/components";
import { LineChart } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition]);
export default {
  name: "plantinRecords",
  setup() {
    const { proxy } = getCurrentInstance();
    const data = reactive({
      phX: [],
      phY: [],
    });
    const x = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const currentPage4 = ref(4);
    const pageSize4 = ref(100);
    const small = ref(false);
    const background = ref(false);
    const disabled = ref(false);
    //环境温度
    function setCharts() {
      const myChart = echarts.init(proxy.$refs.chartDom);
      let option;
      option = {
        xAxis: {
          type: "category",
          data: x,
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 300, 260],
            type: "line",
          },
        ],
      };
      option && myChart.setOption(option);
    }
    //环境湿度
    function setCharts1() {
      const myChart = echarts.init(proxy.$refs.chartDom1);
      let option;
      option = {
        xAxis: {
          type: "category",
          data: x,
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "line",
          },
        ],
      };
      option && myChart.setOption(option);
    }
    //光照重量
    function setCharts2() {
      const myChart = echarts.init(proxy.$refs.chartDom2);
      let option;
      option = {
        xAxis: {
          type: "category",
          data: x,
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "line",
          },
        ],
      };
      option && myChart.setOption(option);
    }
    //土壤湿度
    function setCharts3() {
      const myChart = echarts.init(proxy.$refs.chartDom3);
      let option;
      option = {
        xAxis: {
          type: "category",
          data: x,
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "line",
          },
        ],
      };
      option && myChart.setOption(option);
    }
    //PH值
    function setCharts4() {
      const myChart = echarts.init(proxy.$refs.chartDom4);
      let option;
      option = {
        xAxis: {
          type: "category",
          data: data.phX,
        },
        yAxis: {
          type: "category",
          data: ["4", "5", "6", "7", "8", "9", "10"],
        },
        series: [
          {
            data: data.phY,
            type: "line",
          },
        ],
      };
      option && myChart.setOption(option);
    }
    function handleSizeChange(val) {
      console.log(`${val} items per page`);
    }
    function handleCurrentChange(val) {
      console.log(`current page: ${val}`);
    }
    onMounted(() => {
      getPH();
      setCharts();
      setCharts1();
      setCharts2();
      setCharts3();
    });
    function goBack() {
      proxy.$router.go(-1);
    }
    function getPH() {
      proxy.$http
        .post("/plantinRecords/info", {
          username: "admin",
        })
        .then((res) => {
          console.log(res);
          console.log(res.data[0].time);
          res.data.forEach(function (item) {
            data.phX = data.phX.concat(item.time);
            data.phY = data.phY.concat(item.con);
          });
          setCharts4();
          console.log(data);
        });
    }
    return {
      data,
      goBack,
      currentPage4,
      pageSize4,
      small,
      background,
      disabled,
      handleSizeChange,
      handleCurrentChange,
      getPH,
    };
  },
};
</script>

<style>
.plantR_body_all {
  background-color: white;
  padding: 20px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.plantR_btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.plantR_ectext {
  margin-top: -30px;
  font-size: 18px;
  font-weight: bold;
  color: #2a3734;
  letter-spacing: 4px;
}
</style>
