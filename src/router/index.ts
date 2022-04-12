import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "@/pages/NotFound.vue";
import Callback from "@/components/Callback.vue";
import { authenticationGuard } from "@/services/authentication-guard";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Main",
    component: Home,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // eslint-disable-next-line prettier/prettier
    component: () => import(/* webpackChunkName: "plan" */ "../views/About.vue"),
    beforeEnter: authenticationGuard,
  },
  {
    path: "/callback",
    name: "callback",
    component: Callback,
  },
  {
    path: "/:catchAll(.*)",
    name: "Not Found",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
