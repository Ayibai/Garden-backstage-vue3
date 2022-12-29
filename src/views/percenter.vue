<template>
  <div class="per_body_all">
    <div
      style="
        width: 40%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 30px;
      "
    >
      <el-card shadow="always" class="per_card1">
        <div>
          <div class="per_card-top">个人中心</div>
          <div class="per_personInfo">
            <img style="width: 90px; height: 90px" :src="imgSrc" alt="" />
            <div style="margin-left: 20px; font-size: 20px; font-weight: bold">
              超级管理员
            </div>
          </div>
        </div>
      </el-card>
      <el-card shadow="always" class="per_card2">
        <div>
          <div class="per_card-top">修改密码</div>
          <div style="margin-top: 40px">
            <el-form ref="formRef" :model="form" label-width="120px">
              <el-form-item label="账号">
                <el-input style="width: 240px" v-model="form.webId"></el-input>
              </el-form-item>
              <el-form-item label="密码">
                <el-input
                  style="width: 240px"
                  v-model="form.password"
                ></el-input>
              </el-form-item>
              <el-form-item label="确认密码">
                <el-input
                  style="width: 240px"
                  v-model="form.secondPassword"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">保存</el-button>
                <el-button>取消</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </el-card>
    </div>
    <div class="per_body_left0">
      <el-scrollbar>
        <div class="per_body_left">
          <div class="per_body_left_text">登录日志</div>
          <div class="per_block">
            <el-timeline>
              <el-timeline-item timestamp="2018/4/3" placement="top">
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
                        :src="imgSrc"
                        style="width: 40px; height: 40px"
                        alt="imgSrc"
                      />
                      <div style="margin-top: 6px; font-weight: bold">
                        超级管理员
                      </div>
                    </div>
                    <div style="margin-left: 20px">
                      <h4>登录城市：哈尔滨</h4>
                      <div style="display: flex; margin-top: 26px">
                        <p style="color: #409eff">登录IP：</p>
                        <p>192.168.137.23</p>
                      </div>
                    </div>
                  </div>
                </el-card>
              </el-timeline-item>
              <el-timeline-item timestamp="2018/4/3" placement="top">
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
                        :src="imgSrc"
                        style="width: 40px; height: 40px"
                        alt="imgSrc"
                      />
                      <div style="margin-top: 6px; font-weight: bold">
                        超级管理员
                      </div>
                    </div>
                    <div style="margin-left: 20px">
                      <h4>更新 Github 模板</h4>
                      <div style="display: flex; margin-top: 26px">
                        <p style="color: #409eff">提交时间：</p>
                        <p>2018/4/3 20:46</p>
                      </div>
                    </div>
                  </div>
                </el-card>
              </el-timeline-item>
              <el-timeline-item timestamp="2018/4/3" placement="top">
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
                        :src="imgSrc"
                        style="width: 40px; height: 40px"
                        alt="imgSrc"
                      />
                      <div style="margin-top: 6px; font-weight: bold">
                        超级管理员
                      </div>
                    </div>
                    <div style="margin-left: 20px">
                      <h4>更新 Github 模板</h4>
                      <div style="display: flex; margin-top: 26px">
                        <p style="color: #409eff">提交时间：</p>
                        <p>2018/4/3 20:46</p>
                      </div>
                    </div>
                  </div>
                </el-card>
              </el-timeline-item>
              <el-timeline-item timestamp="2018/4/3" placement="top">
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
                        :src="imgSrc"
                        style="width: 40px; height: 40px"
                        alt="imgSrc"
                      />
                      <div style="margin-top: 6px; font-weight: bold">
                        超级管理员
                      </div>
                    </div>
                    <div style="margin-left: 20px">
                      <h4>更新 Github 模板</h4>
                      <div style="display: flex; margin-top: 26px">
                        <p style="color: #409eff">提交时间：</p>
                        <p>2018/4/3 20:46</p>
                      </div>
                    </div>
                  </div>
                </el-card>
              </el-timeline-item>
              <el-timeline-item timestamp="2018/4/3" placement="top">
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
                        :src="imgSrc"
                        style="width: 40px; height: 40px"
                        alt="imgSrc"
                      />
                      <div style="margin-top: 6px; font-weight: bold">
                        超级管理员
                      </div>
                    </div>
                    <div style="margin-left: 20px">
                      <h4>更新 Github 模板</h4>
                      <div style="display: flex; margin-top: 26px">
                        <p style="color: #409eff">提交时间：</p>
                        <p>2018/4/3 20:46</p>
                      </div>
                    </div>
                  </div>
                </el-card>
              </el-timeline-item>
              <el-timeline-item timestamp="2018/4/3" placement="top">
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
                        :src="imgSrc"
                        style="width: 40px; height: 40px"
                        alt="imgSrc"
                      />
                      <div style="margin-top: 6px; font-weight: bold">
                        超级管理员
                      </div>
                    </div>
                    <div style="margin-left: 20px">
                      <h4>更新 Github 模板</h4>
                      <div style="display: flex; margin-top: 26px">
                        <p style="color: #409eff">提交时间：</p>
                        <p>2018/4/3 20:46</p>
                      </div>
                    </div>
                  </div>
                </el-card>
              </el-timeline-item>
            </el-timeline>
          </div>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "percenter",
  setup() {
    const imgSrc = require("../assets/zyhylogo.png");
    const form = reactive({
      webId: "",
      password: "",
      secondPassword: "",
    });
    function onSubmit() {
      console.log(this.form);
    }
    return {
      imgSrc,
      form,
      onSubmit,
    };
  },
};
</script>

<style>
.per_body_all {
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 20px;
}
.per_body_left0 {
  width: 50%;
  overflow: hidden;
  box-shadow: 0 0 10px 0 #0000001f;
  border-radius: 10px;
}
.per_body_left {
  width: 100%;
  height: 575px;
}
.per_body_left_text {
  letter-spacing: 2px;
  font-size: 18px;
  margin: 20px;
  font-weight: bold;
  padding-left: 20px;
}
.per_block {
  width: 90%;
  padding-left: 40px;
}
.per_card1 {
  margin-top: 10px;
  border-radius: 10px;
}
.per_card2 {
  margin-top: 10px;
  border-radius: 10px;
}
.per_card-top {
  display: flex;
  justify-content: space-between;
  color: black;
  font-weight: bold;
}
.per_personInfo {
  display: flex;
  align-items: center;
  padding: 30px;
}
</style>
