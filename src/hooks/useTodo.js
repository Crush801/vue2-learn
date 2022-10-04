import { computed, ref } from "@vue/composition-api";
import store from "@/store";

export default function useTodo() {
  const input = ref("");
  const tasks = computed(() => store.state.tasks);
  const total = computed(() => store.getters.total);

  const methods = {
    addTask() {
      let time = new Date();
      const todo = {
        id: new Date().getTime(),
        value: input.value,
        taskDate: time,
      };
      input.value = "";
      store.commit("addTask", todo);
    },
    deleteTask(id) {
      store.commit("deleteTask", id);
    },
  };
  return {
    input,
    tasks,
    total,
    ...methods,
  };
}
