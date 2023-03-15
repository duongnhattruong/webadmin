import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import VehicleOwner from "../views/VehicleOwner.vue";
import Login from "../views/Login.vue";
import Chart from "../views/ChartView.vue";
import NotFound from "../views/NotFound.vue";
import Rescue from "../views/Rescue.vue";
import AddRescue from "../views/AddRescue.vue";
import AddVehicle from "../views/AddVehicle.vue";
import EditVehicle from "../views/EditVehicle.vue";
import EditRescue from "../views/EditRescue.vue";

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
  {
    path: "/add-rescue",
    name: "AddRescue",
    component: AddRescue,
  },
  {
    path: "/add-vehicle",
    name: "AddVehicle",
    component: AddVehicle,
  },
  {
    path: "/edit-vehicle",
    name: "EditVehicle",
    component: EditVehicle,
  },
  {
    path: "/edit-rescue",
    name: "EditRescue",
    component: EditRescue,
  },
  { path: "/:pathMatch(.*)*", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
