<template>
  <div>
    <ToDoItem
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @deleteTask="$emit('deleteTask', $event)"
    ></ToDoItem>
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
  methods: {
    deleteTask() {},
  },
};
</script>

<style></style>
