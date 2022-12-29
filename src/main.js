import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import tool from "./utils/tool";
import qs from "qs";
import axios from "./utils/axios";
const app = createApp(App);
app.config.globalProperties.$TOOL = tool;
app.config.globalProperties.$qs = qs;
app.config.globalProperties.$http = axios;
app.use(ElementPlus);
app
  .use(store)
  .use(router)
  .mount("#app");
