import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MainPage from '../views/MainPage/MainPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: MainPage,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
