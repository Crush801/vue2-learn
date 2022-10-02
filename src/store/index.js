import Vue from "vue";
import Vuex from "vuex";

//1.安装插件
Vue.use(Vuex);

//2.创建对象
const store = new Vuex.Store({
  state: {
    tasks: [],
  },
  getters: {
    total: (state) => {
      return state.tasks.length;
    },
  },
  mutations: {
    addTask(state, todo) {
      state.tasks.push(todo);
    },
    deleteTask(state, id) {
      const index = state.tasks.findIndex((task) => task.id == id);
      state.tasks.splice(index, 1);
    },
  },
  actions: {},
});
//3.导出使用
export default store;
