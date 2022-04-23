import Router from "vue-router";
import Login from "./pages/Login.vue";
import Contacts from "./pages/Contacts.vue";
import SignIn from "./pages/SignIn.vue";
import NewContact from "./pages/NewContact.vue";
import Chat from "./pages/Chat.vue";

const router = new Router({
  mode: "history",
  routes: [
    { path: "/login", name: "Login", component: Login },
    { path: "/contacts", name: "Contacts", component: Contacts },
    { path: "/signin", name: "SignIn", component: SignIn },
    { path: "/newcontact", name: "NewContact", component: NewContact },
    { path: "/chat", name: "Chat", component: Chat },
  ],
});

function hasQueryParams(route) {
  return !!Object.keys(route.query).length;
}

router.beforeEach((to, from, next) => {
  if (!hasQueryParams(to) && hasQueryParams(from)) {
    next({ name: to.name, query: from.query });
  } else {
    next();
  }
});

export default router;
