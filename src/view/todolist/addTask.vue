<template>
  <div>
    <el-input
      v-model="input"
      placeholder="Add a task to 「tasks」"
      :todo="todo"
    ></el-input>
    <el-button @click="addTask">add</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      todo: {},
    };
  },
  methods: {
    addTask() {
      let time = new Date();
      this.todo = {
        id: new Date().getTime(),
        value: this.input,
        taskDate: time,
      };
      this.input = "";
      this.$store.commit("addTask", this.todo);
    },
  },
};
</script>

<style></style>
