import Vue from "vue";
import VueRouter from "vue-router";
const Dialog = () => import("../view/dialog");
const Directive = () => import("../view/directive");
const ToDoList = () => import("../view/todolist");

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
];

const router = new VueRouter({
  mode: "hash",
  routes,
});

export default router;
