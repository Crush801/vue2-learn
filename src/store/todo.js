import { defineStore } from "pinia";

export const useTodoStore = defineStore("todo", {
  state: () => {
    return {
      tasks: [],
    };
  },
  getters: {
    total: (state) => state.tasks.length,
  },
  actions: {
    addTask(task) {
      this.tasks.push(task);
    },
    deleteTask(id) {
      const index = this.tasks.findIndex((task) => task.id == id);
      this.tasks.splice(index, 1);
    },
  },
  throttle: {
    addTask: 500,
  },
});

export default useTodoStore;
