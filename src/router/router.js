import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue"; // Home.vue is "loaded" at the app's creation - this is the most likely entry point for the app

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/projekt", // matched when URL contains the pattern /toys/*, slug's value will be whatever * is
    name: "Project",
    component: () => import("../views/Project.vue"), // "loading" toyPage.vue on-demand - to minimise the app's initialisation process
  },
  {
    path: "/page-not-found",
    name: "Page404",
    component: () => import("../views/Page404.vue"),
  },
  {
    path: "/:pathMatch(.*)*", // regular expression for "anything", the goal is to catch everything else that has not been matched before
    redirect: "/page-not-found", // redirecting to the "page-not-found" page
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 90,
        behavior: 'smooth',
      }
    }
    return { top: 0 };
  },
});

export default router;
