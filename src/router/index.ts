import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/calendar",
    name: "calendar",
    // route level code-splitting
    // this generates a separate chunk (calendar.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "calendar" */ "@/views/Calendar.vue"),
  },
  {
    path: "/results",
    name: "results",
    component: () =>
      import(/* webpackChunkName: "results" */ "@/views/Results.vue"),
  },
  {
    path: "/team/:id",
    name: "team",
    component: () => import(/* webpackChunkName: "team" */ "@/views/Team.vue"),
  },
  {
    path: "/team_list",
    name: "team_list",
    component: () =>
      import(/* webpackChunkName: "team_list" */ "@/views/TeamList.vue"),
  },
  {
    path: "/post_season/:year/:month",
    name: "post_season",
    component: () =>
      import(/* webpackChunkName: "post_season" */ "@/views/ChangeSeason.vue"),
  },
  {
    path: "/day_events/:date_id",
    name: "day_events",
    component: () =>
      import(/* webpackChunkName: "day_events" */ "@/views/DayEvents.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
