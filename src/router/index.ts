import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import VehicleOwner from "../views/VehicleOwner.vue";
import Login from "../views/Login.vue";
import Chart from "../views/ChartView.vue";
import NotFound from "../views/NotFound.vue";
import Rescue from "../views/Rescue.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Login",
    component: Login,
    meta: { layout: "empty" },
  },
  {
    path: "/vehicleOwner",
    name: "VehicleOwner",
    component: VehicleOwner,
  },
  {
    path: "/rescue",
    name: "Rescue",
    component: Rescue,
  },
  
  {
    path: "/charts",
    name: "Chart",
    component: Chart,
  },
  { path: "/:pathMatch(.*)*", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
