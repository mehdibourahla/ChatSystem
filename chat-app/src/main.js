import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import "./index.css";

Vue.config.productionTip = false;
Vue.config.devtools = true;
const token = localStorage.getItem("token");
if (token) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  axios.defaults.headers.common["Content-type"] = "application/json";
}

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
