<template>
  <div>
    <ToDoItem v-for="task in tasks" :key="task.id" :task="task"></ToDoItem>
  </div>
</template>

<script>
import ToDoItem from "./ToDoItem.vue";
export default {
  components: {
    ToDoItem,
  },
  props: ["tasks"],
  data() {
    return {};
  },
  methods: {},
};
</script>

<style></style>
