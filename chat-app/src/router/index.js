import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Main from "../views/Main";
import Authentication from "../views/Authentication";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/main",
    name: "Main",
    component: Main,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Authentication,
  },
  {
    path: "/login",
    name: "Login",
    component: Authentication,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLoggedIn) {
      next({
        path: "/login",
      });
    } else {
      next();
    }
  } else {
    next();
  }
  if (
    (to.name !== "Login" || to.name !== "Register") &&
    !store.getters.isLoggedIn
  ) {
    next();
  } else {
    next({
      path: "/main",
    });
  }
});

export default router;
