import Vue from "vue";
import Vuex from "vuex";

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
    projects:[
      {
        ID:"01",
        Date:"2020 05",
        name:"仿訂票網站",
        introduction: "選座系統開發",
        url:"https://jj860528.github.io/movie/",
        img:"https://i.imgur.com/jxpDywk.png",
        skills:[
          {skill:"Element-Vue"},
          {skill:"Vue"},
          {skill:"Veux"},
          {skill:"Vue-Router"},
        ],
      },
      {
        ID:"02",
        Date:"2020 06",
        name:"Web切版",
        introduction: "純css切版",
        url:"https://ucjjje6de17g51zkpwk3uq-on.drv.tw/web/webRWD/webDesign1.html#header",
        img:"https://i.imgur.com/jAmpNkm.png",
        skills:[
          {skill:"CSS3"},
          {skill:"RED切版"},
          {skill:"fontawesome-Icon"},
          {skill:"imgur線上圖片"},
        ],
      }
    ],
  },
  mutations: {},
  actions: {},
  modules: {}
});
