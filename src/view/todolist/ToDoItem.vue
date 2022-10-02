<template>
  <div>
    <el-checkbox v-model="checked"
      >{{ task.value }} time:{{ task.time | capitalize }}</el-checkbox
    >
    <el-button type="danger" plain @click="deleteTask(task.id)"
      >delete</el-button
    >
  </div>
</template>

<script>
const dayjs = require("dayjs");
export default {
  props: ["task"],
  data() {
    return {
      checked: false,
      input: "",
    };
  },
  filters: {
    capitalize: function (value) {
      return dayjs(value).format();
    },
  },
  methods: {
    deleteTask(id) {
      this.$store.commit("deleteTask", id);
    },
  },
};
</script>

<style></style>
