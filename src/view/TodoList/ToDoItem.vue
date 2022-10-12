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
import useTodo from "@/hooks/useTodo";
const dayjs = require("dayjs");
export default {
  props: ["task"],
  data() {
    return {
      checked: false,
    };
  },
  filters: {
    capitalize: function (value) {
      return dayjs(value).format();
    },
  },
  setup() {
    const { deleteTask } = useTodo();
    return {
      deleteTask,
    };
  },
};
</script>

<style></style>
