import Vue from "vue";
import VueRouter from "vue-router";
const Dialog = () => import("../view/dialog");
const Directive = () => import("../view/directive");
const ToDoList = () => import("../view/todolist");
const Movie = () => import("../view/movie");
const Computed = () => import("../view/computed");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/dialog",
  },
  {
    path: "/dialog",
    component: Dialog,
  },
  {
    path: "/directive",
    component: Directive,
  },
  {
    path: "/todolist",
    component: ToDoList,
  },
  {
    path: "/movie",
    component: Movie,
  },
  {
    path: "/computed",
    component: Computed,
  },
];

const router = new VueRouter({
  mode: "hash",
  routes,
});

export default router;
