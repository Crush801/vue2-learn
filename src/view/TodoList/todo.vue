<template>
  <div>
    <ToDoItem v-for="task in tasks" :key="task.id" :task="task"></ToDoItem>
  </div>
</template>

<script>
import useTodo from "@/hooks/useTodo";
import ToDoItem from "./ToDoItem.vue";
export default {
  components: {
    ToDoItem,
  },
  setup() {
    const { tasks } = useTodo();
    return {
      tasks,
    };
  },
};
</script>

<style></style>
