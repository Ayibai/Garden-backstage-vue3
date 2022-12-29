import { createRouter, createWebHistory } from "vue-router";
import login from "@/components/login"; //登录页面

const routes = [
  { path: "/", name: "login", component: login },
  {
    path: "/home", //主界面
    name: "home",
    component: () => import("../components/home"),
    children: [
      {
        path: "/users", //用户管理
        name: "users",
        component: () => import("../views/users"),
      },
      {
        path: "/index", //首页
        name: "index",
        component: () => import("../views/index"),
      },
      {
        path: "/encyclopedias", //百科
        name: "encyclopedias",
        component: () => import("../views/encyclopedias"),
      },
      {
        path: "/ordarticle", //普通文章
        name: "ordarticle",
        component: () => import("../views/ordarticle"),
      },
      {
        path: "/tecarticle", //技术文章
        name: "tecarticle",
        component: () => import("../views/tecarticle"),
      },
      {
        path: "/activity", //活动管理
        name: "activity",
        component: () => import("../views/activity"),
      },
      {
        path: "/activityAdd", //添加活动
        name: "activityAdd",
        component: () => import("../views/activityAdd"),
      },
      {
        path: "/veggarden", //菜园管理
        name: "veggarden",
        component: () => import("../views/veggarden"),
      },
      {
        path: "/custservice", //客服消息
        name: "custservice",
        component: () => import("../views/custservice"),
      },
      {
        path: "/percenter", //个人中心
        name: "percenter",
        component: () => import("../views/percenter"),
      },
      {
        path: "/encyAdd", //添加百科
        name: "encyAdd",
        component: () => import("../views/encyAdd"),
      },
      {
        path: "/articleV", //查看文章
        name: "articleV",
        component: () => import("../views/articleV"),
      },
      {
        path: "/gardenDetails", //查看菜园详情页
        name: "gardenDetails",
        component: () => import("../views/gardenDetails"),
      },
      {
        path: "/serviceDetails", //查看客服详情页
        name: "serviceDetails",
        component: () => import("../views/serviceDetails"),
      },
      {
        path: "/plantinRecords", //查看客服详情页
        name: "plantinRecords",
        component: () => import("../views/plantinRecords"),
      },
      {
        path: "/demo",
        name: "demo",
        component: () => import("../views/demo"),
      },
      {
        path: "/testMap",
        name: "testMap",
        component: () => import("../views/testMap"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
