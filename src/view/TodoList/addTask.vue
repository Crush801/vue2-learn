<template>
  <div>
    <el-input v-model="input" placeholder="Add a task to 「tasks」"></el-input>
    <el-button @click="addTask">add</el-button>
  </div>
</template>

<script>
import useTodo from "@/hooks/useTodo";

export default {
  data() {
    return {};
  },
  setup() {
    const { input, addTask } = useTodo();
    return {
      input,
      addTask,
    };
  },
};
</script>

<style></style>
