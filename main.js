// vue
import App from "./App.vue";
import router from "./router.js";
import VueRouter from "vue-router";
import Vue from 'vue';
import VueChatScroll from 'vue-chat-scroll'
//doc https://www.npmjs.com/package/vue2-touch-events
import Vue2TouchEvents from 'vue2-touch-events'


import * as FIREBASE from "./scripts/firebase.js";

// css
import "./styling/main.scss";

import { state, actions, getters } from "./scripts/store.js";

Vue.prototype.$state = state;
Vue.prototype.$actions = actions;
Vue.prototype.$getters = getters;
// vuex, store
// console.log(firebaseConfig);
Vue.use(VueRouter);
Vue.use(VueChatScroll);
Vue.use(Vue2TouchEvents);


FIREBASE.login(() => {
  new Vue({
    router,
    render: (h) => h(App),
  }).$mount("#app");
});

// actions.setCurrentUserID("-N0KbUzvL5Qrm8BEC10K");
//if logged in
console.log(state);

if(!state.isLoggedIn) {
  router.replace("/login");
} else {
  router.replace("/contacts");
}