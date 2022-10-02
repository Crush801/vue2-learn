<template>
  <div>
    <h1>{{ total }}</h1>
    <AddTask @addTask="addTask" />
    <ToDo :tasks="tasks" />
  </div>
</template>

<script>
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
    // 计算属性的 getter
    total() {
      // `this` 指向 vm 实例
      return this.tasks.length;
    },
  },
  mounted() {
    this.$EventBus.$on("deleteTask", (param) => {
      console.log(param);
      this.deleteTask(param.id);
    });
  },
  methods: {
    addTask(todo) {
      this.tasks.push(todo);
    },
    deleteTask(id) {
      const index = this.tasks.findIndex((task) => task.id == id);
      this.tasks.splice(index, 1);
    },
  },
};
</script>

<style></style>
