<template>
  <el-scrollbar>
    <div class="artV_body_all">
      <div style="width: 100%">
        <el-page-header title="返回" content="文章详情" @back="goBack" />
      </div>

      <div style="width: 90%; padding: 20px">
        <div class="artV_title">{{ data.title }}</div>
        <div class="artV_info">
          <div class="artV_time">
            <div style="color: #409eff">时间：</div>
            <div>{{ data.time }}</div>
          </div>

          <div class="artV_author">
            <img :src="imgSrc" style="width: 50px; height: 50px" alt="" />
            <div class="artV_author_text">
              <div class="artV_time">
                <div style="color: #409eff">发布者：</div>
                <div>{{ data.nickname }}</div>
              </div>
              <div class="artV_time">
                <div style="color: #409eff">ID：</div>
                <div>{{ data.user_Id }}</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="artV_body">
            <div class="artV_content">
              {{ data.content }}
            </div>
            <div style="margin-left: 20px">
              <div class="artV_demo-image">
                <div v-for="fit in fits" :key="fit" class="actV_block">
                  <el-image
                    v-for="(item, index) in data.image"
                    :preview-src-list="data.image"
                    style="width: 280px; height: 280px;margin: 30px"
                    :key="index"
                    :src="item"
                    :fit="fit"
                  ></el-image>
                </div>
              </div>
            </div>
          </div>
          <div class="artV_bottom">
            <el-button type="warning">推荐</el-button>
            <el-button type="primary">通过</el-button>
            <el-button type="danger">拒绝</el-button>
            <el-button type="info">删除</el-button>
          </div>
        </div>
      </div>
    </div>
  </el-scrollbar>
</template>

<script>
import { getCurrentInstance, onMounted, reactive } from "vue";
export default {
  name: "articleV",
  setup() {
    const { proxy } = getCurrentInstance();
    const fits = ["scale-down"];
    const imgSrc = require("../assets/zyhylogo.png");
    const data = reactive({
      title: "",
      content: "",
      nickname: "",
      time: "",
      user_Id: "",
      image: [],
    });
    onMounted(() => {
      articleVInfo();
    });
    function articleVInfo() {
      proxy.$http
        .post("/articleV/info", {
          act_id: "12",
        })
        .then((res) => {
          console.log(res.data);
          data.title = res.data.title;
          data.content = res.data.content;
          data.nickname = res.data.nickname;
          data.time = res.data.time;
          data.user_Id = res.data.user_Id;
          let image = res.data.image;
          let url = image.split(",");
          let i = 0;
          for (i; i < url.length - 1; i = i + 2) {
            let src = url[i] + "," + url[i + 1];
            let src1 = src.split("'");
            data.image = data.image.concat(src1[1]);
          }
          console.log(data.image);
        });
    }
    function goBack() {
      proxy.$router.go(-1);
    }
    return {
      imgSrc,
      fits,
      data,
      goBack,
    };
  },
};
</script>

<style>
.artV_body_all {
  background-color: white;
  padding: 20px 20px 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.artV_title {
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 2px;
}
.artV_time {
  display: flex;
}
.artV_author {
  display: flex;
  align-items: center;
}
.artV_author_text {
  margin-left: 10px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.artV_info {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  padding-bottom: 20px;
  border-bottom: 2px solid #f2f2f2;
}
.artV_body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.artV_content {
  letter-spacing: 1px;
  font-size: 16px;
  line-height: 26px;
  margin-top: 20px;
  width: 95%;
}
.artV_demo-image {
  display: flex;
  flex-flow: wrap;
}
.actV_block {
  margin: 0 10px -20px 10px;
}
.artV_bottom {
  display: flex;
  justify-content: end;
}
</style>
