<template>
  <div>
    <h1>{{ total }}</h1>
    <AddTask></AddTask>
    <ToDoItem
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @deleteTask="deleteTask"
    ></ToDoItem>
  </div>
</template>

<script>
import ToDoItem from "./ToDoItem.vue";
import AddTask from "./addTask.vue";
export default {
  components: { ToDoItem, AddTask },
  data() {
    return {
      id: new Date().getTime(),
      tasks: [],
    };
  },
  computed: {
    // 计算属性的 getter
    total() {
      // `this` 指向 vm 实例
      return this.tasks.length;
    },
  },
  methods: {
    addTask() {
      let time = new Date();
      this.tasks.push({
        id: new Date().getTime(),
        value: this.input,
        taskDate: time,
      });
      this.input = "";
    },
    deleteTask(id) {
      const index = this.tasks.findIndex((task) => task.id == id);
      this.tasks.splice(index, 1);
    },
  },
};
</script>

<style></style>
