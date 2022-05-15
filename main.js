// vue
import Vue from "vue";
import App from "./App.vue";
import router from "./router.js";
import VueRouter from "vue-router";

import * as FIREBASE from "./scripts/firebase.js";

// css
import "./styling/main.scss";

import { store, actions, getters } from "./scripts/store.js";

Vue.prototype.$store = store;
Vue.prototype.$actions = actions;
Vue.prototype.$getters = getters;
// vuex, store
// console.log(firebaseConfig);
Vue.use(VueRouter);

FIREBASE.login(() => {
  new Vue({
    router,
    render: (h) => h(App),
  }).$mount("#app");
});

router.replace("/login");
