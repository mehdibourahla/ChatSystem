import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import Main from "../views/Main";
import Authentication from "../views/Authentication";
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

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
