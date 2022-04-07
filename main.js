import Vue from 'vue';
import App from './App.vue';
import router from './router.js'
import './styling/main.scss'

//? https://medium.com/@anas.mammeri/vue-2-firebase-how-to-build-a-vue-app-with-firebase-authentication-system-in-15-minutes-fdce6f289c3c

import VueRouter from 'vue-router';
Vue.use(VueRouter);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');