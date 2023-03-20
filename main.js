// vue
import App from "./App.vue";
import router from "./router.js";
import VueRouter from "vue-router";
import Vue from "vue";
import VueChatScroll from "vue-chat-scroll";
//doc https://www.npmjs.com/package/vue2-touch-events
import Vue2TouchEvents from "vue2-touch-events";
import moment from 'moment';
import ToggleButton from "vue-js-toggle-button";

import * as FIREBASE from "./scripts/firebase.js";

// css
import "./styling/main.scss";

import { state, actions, getters } from "./scripts/store.js";
import { Bus } from "./scripts/eventBus";
import { getCity, stopWatch, watchPos } from "./scripts/location";

Vue.prototype.$state = state;
Vue.prototype.$actions = actions;
Vue.prototype.$getters = getters;
// vuex, store
// console.log(firebaseConfig);
Vue.use(VueRouter);
Vue.use(VueChatScroll);
Vue.use(Vue2TouchEvents);
Vue.use(ToggleButton);

FIREBASE.login(() => {
  new Vue({
    router,
    render: (h) => h(App),
  }).$mount("#app");
});

watchPos(onPose);

document.addEventListener("visibilitychange", () => {
  // console.log(document.visibilityState);
  //console.log(test sync vercel)
  if (document.visibilityState === "visible") {
    watchPos(onPose);

    getCity().then(({ city }) => {
      Bus.$emit("location:citychange", city);
    });
  } else {
    stopWatch();
  }
});

function onPose(event) {
  actions.setLocation(event.coords);
}

Bus.$on("location:citychange", (event) => {
  console.log("Current City: ", event);
  actions.setUserCity(event);
});


// document.onvisibilitychange = function() {
//  console.log('dy');
// };

// actions.setCurrentUserID("-N0KbUzvL5Qrm8BEC10K");


// let bodyColor = document.querySelector("body");
// if(router.options.routes[i].path){
//   console.log("youre in");
//   // $background-color
// }else{
//   console.log("fail");
// }



console.log(moment().format());
console.log(state);

if (!state.isLoggedIn) {
  router.replace("/login");
} else {
  router.replace("/contacts");
}

