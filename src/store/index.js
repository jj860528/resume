import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
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
          {skill:"Sass"},
        ],
      },
      {
        ID:"02",
        Date:"2020 06",
        name:"Web切版",
        introduction: "RWD",
        url:"https://ucjjje6de17g51zkpwk3uq-on.drv.tw/web/webRWD/webDesign1.html#header",
        img:"https://i.imgur.com/jAmpNkm.png",
        skills:[
          {skill:"Element-Vue"},
          {skill:"Vue"},
          {skill:"Veux"},
          {skill:"Vue-Router"},
          {skill:"Sass"},
        ],
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
