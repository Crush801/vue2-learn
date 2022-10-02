<template>
  <div class="dialog-wrapper" v-if="isShow">
    <div class="dialog-main">
      <div class="header">header</div>
      <div class="container">container</div>
      <div class="footer">
        footer
        <button @click="close">close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  model: {
    prop: "isShow",
    event: "close",
  },
  props: {
    isShow: Boolean,
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style>
.dialog-wrapper {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}
.dialog-main {
  background-color: aqua;
  width: 500px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
