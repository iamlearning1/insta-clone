import Vue from "vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App.vue";
import Button from "./components/Button.vue";
import Input from "./components/Input.vue";
import AuthContainer from "./components/AuthContainer.vue";

Vue.component("Button", Button);
Vue.component("Input", Input);
Vue.component("container", AuthContainer);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
