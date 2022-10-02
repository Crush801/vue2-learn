<template>
  <div>
    <el-input v-model="input" placeholder="Add a task to 「tasks」"></el-input>
    <el-button @click="addTask">add</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
    };
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
  },
};
</script>

<style></style>
