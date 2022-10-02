<template>
  <div>
    <ToDoItem v-for="task in tasks" :key="task.id" :task="task"></ToDoItem>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ToDoItem from "./ToDoItem.vue";
export default {
  components: {
    ToDoItem,
  },
  data() {
    return {};
  },
  computed: mapState([
    // 映射 this.count 为 store.state.count
    "tasks",
  ]),
  methods: {},
};
</script>

<style></style>
