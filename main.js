// vue
import Vue from "vue";
import App from "./App.vue";
import router from "./router.js";
import VueRouter from "vue-router";

import * as FIREBASE from "./scripts/firebase.js";

// css
import "./styling/main.scss";

// vuex, store
// console.log(firebaseConfig);
Vue.use(VueRouter);

FIREBASE.login(() => {
  new Vue({
    router,
    render: (h) => h(App),
  }).$mount("#app");
});

router.replace('/chat')