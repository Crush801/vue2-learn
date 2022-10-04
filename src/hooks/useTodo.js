import { computed, ref } from "@vue/composition-api";
import { useTodoStore } from "@/store/todo";

export default function useTodo() {
  const store = useTodoStore();
  const input = ref("");
  const tasks = computed(() => store.tasks);
  const total = computed(() => store.total);

  const methods = {
    addTask() {
      let time = new Date();
      const todo = {
        id: new Date().getTime(),
        value: input.value,
        taskDate: time,
      };
      input.value = "";
      store.addTask(todo);
    },
    deleteTask(id) {
      store.deleteTask(id);
    },
  };
  return {
    input,
    tasks,
    total,
    ...methods,
  };
}
