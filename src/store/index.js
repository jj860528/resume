import Vue from "vue";
import Vuex from "vuex";
import FrebaseData from "../firebase.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    skills:[
      {
        name:"HTML&CSS",
        skills:[
          {skill:"熟悉Html5"},
          {skill:"熟悉CSS3"},
          {skill:"熟悉RWD 手寫響應式網站"},
          {skill:"Sass預處理器"}
        ]
      },
      {
        name:"JavaScript",
        skills:[
          {skill:"使用 Vue.js 開發"},
          {skill:"使用 React-hook 開發"},
          {skill:"使用 redux 開發"},
          {skill:"Antd 規劃網頁排版"},
          {skill:"熟悉 AJAX / JSON 串接 RESTful API"},
          {skill:"Element-UI 規劃網頁排版"},
          {skill:"Bootstrap 規劃網頁排版"}
        ]
      },
      {
        name:"Others",
        skills:[
          {skill:"Github"},
          {skill:"npm"},
          {skill:"Webpack"}
        ]
      }
    ],
    projects:FrebaseData.project,
    articles:FrebaseData.articles
  },
  mutations: {},
  actions: {},
  modules: {}
});
