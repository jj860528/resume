import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import '@/assets/style.sass';
/*引入fontawesome套件*/
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/*引入的icon分類*/
/*分類solid*/
import { faUserSecret ,faEnvelope} from '@fortawesome/free-solid-svg-icons'
/*分類brands*/
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'

library.add(faUserSecret ,faGithubSquare ,faEnvelope)
 /*註冊font-awesome-icon*/
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
