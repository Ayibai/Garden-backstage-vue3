<template>
  <div class="home-body">
    <el-container
      class="layout-container-demo"
      style="border: 1px solid #eee; height: 100%"
    >
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
        router
      >
        <el-menu-item index="/index">
          <img
            :src="imgSrc"
            style="width: 30px; height: 30px; margin-right: 5px"
            alt="imgSrc"
          />
          <span>智慧菜园管理端</span>
        </el-menu-item>
        <el-menu-item index="/users">
          <el-icon><icon-menu /></el-icon>
          <template #title>用户管理</template>
        </el-menu-item>
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>内容管理</span>
          </template>
          <el-menu-item index="/encyclopedias">百科管理</el-menu-item>
          <el-menu-item index="/ordarticle">普通文章</el-menu-item>
          <el-menu-item index="/tecarticle">技术文章</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="/activity">
          <el-icon><document /></el-icon>
          <template #title>活动</template>
        </el-menu-item>
        <el-menu-item index="/veggarden">
          <el-icon><setting /></el-icon>
          <template #title>菜园管理</template>
        </el-menu-item>
        <el-menu-item index="custservice">
          <el-icon><setting /></el-icon>
          <template #title>客服消息</template>
        </el-menu-item>
        <el-menu-item index="testMap">
          <el-icon><setting /></el-icon>
          <template #title>地图测试</template>
        </el-menu-item>
      </el-menu>

      <el-container>
        <el-header
          class="home-header"
          style="text-align: right; font-size: 12px"
        >
          <div class="home-header-top">
            <el-radio-group v-model="isCollapse">
              <el-radio-button :label="false"
                ><el-icon><expand /></el-icon
              ></el-radio-button>
              <el-radio-button :label="true"
                ><el-icon><fold /></el-icon
              ></el-radio-button>
            </el-radio-group>
            <div class="toolbar">
              <el-dropdown @command="handleCommand">
                <el-icon style="margin-right: 8px; margin-top: 1px"
                  ><setting
                /></el-icon>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item command="person"
                      >个人中心</el-dropdown-item
                    >
                    <el-dropdown-item command="exit">退出</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
              <span>超级管理员</span>
            </div>
          </div>
        </el-header>
        <el-main class="home-main">
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { ref, getCurrentInstance } from "vue";
import {
  Location,
  Document,
  Menu as IconMenu,
  Setting,
  Expand,
  Fold,
} from "@element-plus/icons-vue";
export default {
  components: {
    Location,
    Document,
    IconMenu,
    Setting,
    Expand,
    Fold,
  },
  setup() {
    const { proxy } = getCurrentInstance();
    const isCollapse = ref(false);
    const imgSrc = require("../assets/zyhylogo.png");
    function handleOpen(key, keyPath) {
      console.log(key, keyPath);
    }
    function handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
    function handleCommand(command) {
      if (command === "exit") {
        this.$router.push("/");
      } else if (command === "person") {
        proxy.$router.push("/percenter");
      }
    }
    return {
      isCollapse,
      imgSrc,
      handleOpen,
      handleClose,
      handleCommand,
    };
  },
};
</script>

<style>
.home-body {
  height: 100%;
}
#app,
html,
body,
.el-container {
  height: 100%;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.home-header {
  background-color: white;
  border: 1px solid #f2f2f2;
  box-shadow: 0 0 6px 0 #0000004a;
  display: flex;
  align-items: center;
}
.home-header-top {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.home-main {
  padding: 20px;
  background-color: #f2f2f2;
  width: 100%;
}
.toolbar {
  display: flex;
  right: 30px;
  position: absolute;
  margin-top: 20px;
}

.layout-container-demo .toolbar {
  transform: translateY(-50%);
}
</style>
