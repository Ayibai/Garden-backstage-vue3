<template>
  <router-view />
</template>
<script>
//引入vue方法
import { ElConfigProvider } from "element-plus";
//中文包
import zhCn from "element-plus/lib/locale/lang/zh-cn";
export default {
  name: "app",
  components: {
    [ElConfigProvider.name]: ElConfigProvider,
  },
  setup() {
    let locale = zhCn;
    return {
      locale,
    };
  },
};
</script>
