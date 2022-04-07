import Router from "vue-router";
import Login from "./pages/Login.vue";
import Contacts from "./pages/Contacts.vue";

export default new Router({
  routes: [
    { path: "/login", name: "Login", component: Login },
    { path: "/", name: "Contacts", component: Contacts },
  ],
});
