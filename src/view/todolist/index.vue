<template>
  <div>
    <h1>{{ total }}</h1>
    <AddTask />
    <ToDo />
  </div>
</template>

<script>
import useTodo from "@/hooks/useTodo";
import ToDo from "./todo.vue";
import AddTask from "./addTask.vue";

export default {
  components: { ToDo, AddTask },
  setup() {
    const { total } = useTodo();
    return {
      total,
    };
  },
};
</script>

<style></style>
