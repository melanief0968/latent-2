import Router from "vue-router";
import Login from "./pages/Login.vue";
import Contacts from "./pages/Contacts.vue";
import SignIn from "./pages/SignIn.vue";
import NewContact from "./pages/NewContact.vue";
import Chat from "./pages/Chat.vue";
import Index from "./pages/Index.vue";
import Book from "./pages/Book.vue";
import Account from "./pages/Account.vue";
import AllConversations from "./pages/AllConversations.vue";
import WebVersion from "./pages/WebVersion.vue";

const router = new Router({
  mode: "history",
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    { path: "/login", name: "Login", component: Login },
    { path: "/contacts", name: "Contacts", component: Contacts },
    { path: "/signin", name: "SignIn", component: SignIn },
    { path: "/newcontact", name: "NewContact", component: NewContact },
    { path: "/chat", name: "Chat", component: Chat },
    { path: "/index", name: "Index", component: Index },
    { path: "/book", name: "Book", component: Book },
    { path: "/account", name: "Account", component: Account },
    { path: "/allconversations", name: "AllConversations", component: AllConversations },
    { path: "/web", name: "WebVersion", component: WebVersion },
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
