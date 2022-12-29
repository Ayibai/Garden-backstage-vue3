<template>
  <el-scrollbar>
    <div class="serD_body_all">
      <div style="width: 100%">
        <el-page-header title="返回" content="客服消息详情" @back="goBack" />
      </div>

      <div style="width: 90%; padding: 20px">
        <div class="serD_title">我的风扇出现了问题</div>
        <div class="serD_info">
          <div style="line-height: 30px">
            <div class="serD_time">
              <div style="color: #409eff">时间：</div>
              <div>2022-01-01-20:04</div>
            </div>
            <div class="serD_time">
              <div style="color: #409eff">手机号：</div>
              <div>15534281004</div>
            </div>
          </div>
          <div class="serD_author">
            <img :src="imgSrc" style="width: 50px; height: 50px" alt="" />
            <div class="serD_author_text">
              <div class="serD_time">
                <div style="color: #409eff">发布者：</div>
                <div>张三</div>
              </div>
              <div class="serD_time">
                <div style="color: #409eff">ID：</div>
                <div>1909109</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="serD_body">
            <div class="serD_content">
              新华社北京1月5日电
              中共中央总书记、国家主席、中央军委主席习近平近日在北京考
              察2022年冬奥会、冬残奥会筹办备赛工作时强调，办好北京冬奥会、冬残奥会，是我
              们向国际社会作出的庄严承诺。经过几年努力，各项筹备工作基本就绪，我们完全有信
              心、有能力为世界奉献一届精彩、非凡、卓越的奥运盛会。要坚定信心、振奋精神、再
              接再厉，全面落实简约、安全、精彩的办赛要求，抓紧抓好最后阶段各项赛事组织、赛
              会服务、指挥调度等准备工作，确保北京冬奥会、冬残奥会圆满成功。
              新华社北京1月5日电
              中共中央总书记、国家主席、中央军委主席习近平近日在北京考
              察2022年冬奥会、冬残奥会筹办备赛工作时强调，办好北京冬奥会、冬残奥会，是我
              们向国际社会作出的庄严承诺。经过几年努力，各项筹备工作基本就绪，我们完全有信
              心、有能力为世界奉献一届精彩、非凡、卓越的奥运盛会。要坚定信心、振奋精神、再
              接再厉，全面落实简约、安全、精彩的办赛要求，抓紧抓好最后阶段各项赛事组织、赛
              会服务、指挥调度等准备工作，确保北京冬奥会、冬残奥会圆满成功。
            </div>
            <div style="margin-left: 20px">
              <div class="serD_demo-image">
                <div v-for="fit in fits" :key="fit" class="serD_block">
                  <el-image
                    style="width: 280px; height: 280px"
                    :src="url"
                    :fit="fit"
                  ></el-image>
                </div>
                <div v-for="fit in fits" :key="fit" class="serD_block">
                  <el-image
                    style="width: 280px; height: 280px"
                    :src="url"
                    :fit="fit"
                  ></el-image>
                </div>
                <div v-for="fit in fits" :key="fit" class="serD_block">
                  <el-image
                    style="width: 280px; height: 280px"
                    :src="url"
                    :fit="fit"
                  ></el-image>
                </div>
                <div v-for="fit in fits" :key="fit" class="serD_block">
                  <el-image
                    style="width: 280px; height: 280px"
                    :src="url"
                    :fit="fit"
                  ></el-image>
                </div>
                <div v-for="fit in fits" :key="fit" class="serD_block">
                  <el-image
                    style="width: 280px; height: 280px"
                    :src="url"
                    :fit="fit"
                  ></el-image>
                </div>
              </div>
            </div>
          </div>
          <div class="serD_bottom">
            <el-button type="primary">确认解决</el-button>
          </div>
        </div>
      </div>
    </div>
  </el-scrollbar>
</template>

<script>
import { getCurrentInstance } from "vue";
export default {
  name: "serviceDetails",
  setup() {
    const { proxy } = getCurrentInstance();
    const fits = ["scale-down"];
    const imgSrc = require("../assets/zyhylogo.png");
    const url = require("../assets/background.png");
    function goBack() {
      proxy.$router.go(-1);
    }
    return {
      imgSrc,
      url,
      fits,
      goBack,
    };
  },
};
</script>

<style>
.serD_body_all {
  background-color: white;
  padding: 20px 20px 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.serD_title {
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 2px;
}
.serD_time {
  display: flex;
}
.serD_author {
  display: flex;
  align-items: center;
}
.serD_author_text {
  margin-left: 10px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.serD_info {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  padding-bottom: 20px;
  border-bottom: 2px solid #f2f2f2;
}
.serD_body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.serD_content {
  letter-spacing: 1px;
  font-size: 16px;
  line-height: 26px;
  margin-top: 20px;
  width: 95%;
}
.serD_demo-image {
  display: flex;
  flex-flow: wrap;
}
.serD_block {
  margin: 0 10px -20px 10px;
}
.serD_bottom {
  display: flex;
  justify-content: end;
}
</style>
