<template>
  <div class="body_all">
    <div class="body_left0">
      <el-scrollbar>
        <div class="body_left">
          <div class="body_left_title">欢迎体验智慧菜园管理端</div>
          <div class="body_left_text">操作日志</div>
          <div class="block">
            <el-timeline>
              <div v-for="(journal, index) in data.journal" :key="index">
                <el-timeline-item :timestamp="journal.time" placement="top">
                  <el-card>
                    <div style="display: flex; align-items: center">
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          align-items: center;
                          width: 100px;
                        "
                      >
                        <img
                          :src="journal.image"
                          style="width: 40px; height: 40px; border-radius: 100%"
                          alt="imgSrc"
                        />
                        <div style="margin-top: 6px; font-weight: bold">
                          {{ journal.name }}
                        </div>
                      </div>
                      <div style="margin-left: 20px">
                        <h4>{{ journal.things }}</h4>
                        <div style="display: flex; margin-top: 26px">
                          <p style="color: #409eff">提交时间：</p>
                          <p>{{ journal.time }}</p>
                        </div>
                      </div>
                    </div>
                  </el-card>
                </el-timeline-item>
              </div>
            </el-timeline>
          </div>
        </div>
      </el-scrollbar>
    </div>
    <div style="width: 20%; margin-right: 90px">
      <el-card shadow="always" class="item-background">
        <div>
          <div class="card-top">
            <div>时钟</div>
          </div>
          <div class="time">
            <h2>{{ time }}</h2>
            <p>{{ day }}</p>
          </div>
        </div>
      </el-card>
      <el-card shadow="always" class="card1">
        <div>
          <div class="card-top">
            <div>总人数</div>
            <div>人</div>
          </div>
          <div class="card_body_text">{{ data.peopleNum }}</div>
        </div>
      </el-card>
      <el-card shadow="always" class="card2">
        <div>
          <div class="card-top">
            <div>待审核</div>
            <div>条</div>
          </div>
          <div class="card_body_text">{{ data.examineNum }}</div>
        </div>
      </el-card>
      <el-card shadow="always" class="card3">
        <div>
          <div class="card-top">
            <div>客服消息数</div>
            <div>条</div>
          </div>
          <div class="card_body_text">{{ data.serviceNum }}</div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { ref, getCurrentInstance, onMounted, reactive } from "vue";
export default {
  name: "index",
  setup() {
    const { proxy } = getCurrentInstance();
    const time = ref("");
    const day = ref("");
    const imgSrc = require("../assets/zyhylogo.png");
    const data = reactive({
      peopleNum: "",
      examineNum: "",
      serviceNum: "",
      journal: [],
    });
    onMounted(() => {
      showTime(); //时间
      peopleNum(); //数量
      journal(); //操作日志
      setInterval(() => {
        showTime();
      }, 1000);
    });
    //时间方法
    function showTime() {
      time.value = proxy.$TOOL.dateFormat(new Date(), "hh:mm:ss");
      day.value = proxy.$TOOL.dateFormat(new Date(), "yyyy年MM月dd日");
      //获取当前时间
      // console.log(proxy.$TOOL.dateFormat(new Date()));
    }
    function peopleNum() {
      proxy.$http
        .post("/index/num", {
          username: "admin",
        })
        .then((res) => {
          // console.log(res);
          data.peopleNum = res.peopleNum;
          data.examineNum = res.examineNum;
          data.serviceNum = res.serviceNum;
          // console.log(data);
        });
    }
    function journal() {
      proxy.$http
        .post("/index/journal", {
          username: "admin",
        })
        .then((res) => {
          // console.log(res);
          data.journal = res.data;
          console.log(data.journal);
        });
    }
    return {
      time,
      day,
      imgSrc,
      data,
    };
  },
};
</script>

<style>
.item-background {
  background: linear-gradient(to right, #8e54e9, #4776e6);
  color: #fff;
  border-radius: 10px;
}
.time h2 {
  font-size: 30px;
  margin-top: 16px;
  display: flex;
  justify-content: center;
  letter-spacing: 2px;
}
.time p {
  font-size: 14px;
  margin-top: 10px;
  opacity: 0.7;
}
.body_all {
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 20px;
}
.body_left0 {
  width: 60%;
  overflow: hidden;
  box-shadow: 0 0 10px 0 #0000001f;
  border-radius: 10px;
  margin-left: 40px;
}
.body_left {
  width: 100%;
  height: 575px;
}
.body_left_title {
  display: flex;
  justify-content: center;
  letter-spacing: 2px;
  font-size: 20px;
  color: #409eff;
  margin-right: 20px;
  padding: 20px 20px 0 20px;
}
.body_left_text {
  letter-spacing: 2px;
  font-size: 18px;
  margin: 20px;
  font-weight: bold;
  padding-left: 20px;
}
.block {
  width: 90%;
  padding-left: 40px;
}
.card1 {
  background-color: #84a2d4;
  margin-top: 10px;
  border-radius: 10px;
}
.card2 {
  background-color: #1bd1a5;
  margin-top: 10px;
  border-radius: 10px;
}
.card3 {
  background-color: #cb3a56;
  margin-top: 10px;
  border-radius: 10px;
}
.card-top {
  display: flex;
  justify-content: space-between;
  color: white;
  font-weight: bold;
}
.card_body_text {
  display: flex;
  justify-content: center;
  font-size: 28px;
  font-weight: bold;
  color: white;
  margin-top: 16px;
  padding-bottom: 30px;
}
</style>
