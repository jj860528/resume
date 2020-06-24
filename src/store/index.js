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
    articles:[
      {
        id: 'Articles01',
        name:'Google第三方登入實作',
        date:'2020 06',
        img:'https://i.imgur.com/5Fa5Myg.jpg',//略縮圖
        content:[
          {
            order:'01',
            name:'text',
            content:'<p>現在其實可以發現<br />許多網站和線上遊戲<br />都有支援第三方登入<br />方便使用者不用記帳號(email)和密碼<br />GCP OAuth算是普遍大家都有的服務<br />所以開發使用者登入功能時<br />別忘了第三方登入這一塊</p>'
          },
          {
            order:"02",
            name:"pre",
            content:'<p><span style="vertical-align: inherit;"><span style="vertical-align: inherit;">&lt;p&gt;內容&lt;/ p&gt; </span></span><br /><span style="vertical-align: inherit;"><span style="vertical-align: inherit;">&lt;p&gt;＆nbsp; &lt;/ p&gt; </span></span><br /><span style="vertical-align: inherit;"><span style="vertical-align: inherit;">&lt;p&gt; function（）{&lt;/ p&gt; </span></span><br /><span style="vertical-align: inherit;"><span style="vertical-align: inherit;">&lt;p&gt;＆nbsp; </span><span style="vertical-align: inherit;">＆nbsp; 121 561 65 1 &lt;/ p&gt; </span></span><br /><span style="vertical-align: inherit;"><span style="vertical-align: inherit;">&lt;p&gt;} &lt;/ p&gt;</span></span></p>'
          },
          {
            order:"03",
            name:"img",
            content:"圖片地址"
          }
        ]
      },
      /*{
        id: 'Articles02',
        name:'Google第三方登入',
        date:'2020 06',
        img:'https://i.imgur.com/5Fa5Myg.jpg',//略縮圖
        content:[
          {
            order:'01',
            name:'text',
            content:'<p><em><strong>以下為例子~~</strong></em></p>'
          },
          {
            order:"02",
            name:"pre",
            content:'<p><span style="vertical-align: inherit;"><span style="vertical-align: inherit;">&lt;p&gt;內容&lt;/ p&gt; </span></span><br /><span style="vertical-align: inherit;"><span style="vertical-align: inherit;">&lt;p&gt;＆nbsp; &lt;/ p&gt; </span></span><br /><span style="vertical-align: inherit;"><span style="vertical-align: inherit;">&lt;p&gt; function（）{&lt;/ p&gt; </span></span><br /><span style="vertical-align: inherit;"><span style="vertical-align: inherit;">&lt;p&gt;＆nbsp; </span><span style="vertical-align: inherit;">＆nbsp; 121 561 65 1 &lt;/ p&gt; </span></span><br /><span style="vertical-align: inherit;"><span style="vertical-align: inherit;">&lt;p&gt;} &lt;/ p&gt;</span></span></p>'
          },
          {
            order:"03",
            name:"img",
            content:"圖片地址"
          }
        ]
      }*/
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
