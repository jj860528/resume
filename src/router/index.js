import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Projects from "@/views/Projects.vue";
import Article from "@/views/Articles.vue";
import Editor from "@/views/Editor.vue"
import Paper from "@/views/Paper.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: { name: 'About' },//重定向 初始子組件
    children:[
      {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About.vue")
      },
      {
        path: "/project",
        name: "Project",
        component: Projects
      },
      {
        path: "/article",
        name: "Article",
        component: Article,
      },
      {
        path: "/editor",
        name: "editor",
        component: Editor
      },
      {
        //動態路由開頭加問號表示非必填
        path: "paper",
        name: "paper",
        component: Paper
      }
    ]
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
