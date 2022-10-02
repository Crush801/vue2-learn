<template>
  <div>
    <h1>{{ total }}</h1>
    <AddTask />
    <ToDo />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ToDo from "./todo.vue";
import AddTask from "./addTask.vue";

export default {
  components: { ToDo, AddTask },
  data() {
    return {
      id: new Date().getTime(),
      tasks: [],
    };
  },
  props: ["todo"],
  computed: {
    ...mapGetters(["total"]),
    // total() {
    //   return this.$store.getters.total
    // }
  },
};
</script>

<style></style>
