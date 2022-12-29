<template>
  <div :style="background" class="body">
    <div class="top">
      <div class="top_bac">
        <div class="top_content">
          <div
            style="display: flex; align-items: center; justify-content: center"
          >
            <!--        <img :src="imgSrc" style="width: 50px;height: 50px;" alt="imgSrc">-->
            <div class="title">智慧菜园管理端</div>
          </div>
          <!--  输入账号-->
          <div class="top1">
            <div class="text">账号：</div>
            <el-input v-model="username" placeholder="请输入账号" clearable />
          </div>
          <!--  输入密码-->
          <div class="top1">
            <div class="text">密码：</div>
            <el-input
              v-model="password"
              type="password"
              placeholder="请输入密码"
              show-password
            />
          </div>
          <div class="remember">
            <el-checkbox v-model="checked">记住我</el-checkbox>
            <!--        <button class="btn-rem"><span>忘记密码？</span></button>-->
          </div>
          <el-button class="btn" type="primary" @click="login">登录</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, getCurrentInstance, onMounted } from "vue";
import VanillaTilt2 from "vanilla-tilt";
export default {
  name: "login",
  setup() {
    const { proxy } = getCurrentInstance();
    // console.log(proxy.$http)
    const username = ref("");
    const password = ref("");
    const background = {
      backgroundImage: "url(" + require("../assets/background.png") + ")",
    };
    onMounted(() => {
      VanillaTilt1();
    });
    const VanillaTilt = VanillaTilt2;
    function VanillaTilt1() {
      VanillaTilt.init(document.querySelectorAll(".top_bac"), {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 1,
      });
    }
    function login() {
      console.log(username.value);
      console.log(password.value);
      // console.log(proxy.$http.post)
      proxy.$http
        .post("/login/users", {
          users: username.value,
          password: password.value,
        })
        .then((res) => {
          console.log(res);
          if (res.code === "1") {
            proxy.$router.push("/index"); //切换路由
          }
        });
    }

    return {
      username,
      password,
      background,
      login,
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.body {
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-size: 100% 100%;
  height: 100%;
  position: fixed;
  width: 100%;
}

.title {
  font-size: x-large;
  font-weight: bolder;
  letter-spacing: 6px;
}

.top {
  display: flex;
  flex-direction: column;
  align-items: center;
  /*justify-content: center;*/
  height: 400px;
}

.top_bac {
  padding: 40px;
  border-radius: 15px;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  position: relative;
  background-color: rgba(255, 255, 255, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
}
.top_content {
  transform: translateY(100px);
  opacity: 0;
  transition: 0.5s;
}
.top_bac:hover .top_content {
  transform: translateY(0);
  opacity: 1;
}
.top1 {
  display: flex;
  align-items: center;
  width: 300px;
  margin-top: 20px;
  font-weight: bolder;
}

.text {
  width: 80px;
}

.btn {
  margin-top: 20px;
  width: 300px;
}

.remember {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  width: 300px;
}

.btn-rem {
  background: transparent;
  color: #409eff;
  border: 1px solid #ffffff00;
}

.btn-rem:hover {
  color: #76b8ff;
}
</style>
