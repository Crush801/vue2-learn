<template>
  <div>
    <button class="color" v-hover="{ a: 123 }">Color</button>
  </div>
</template>

<script>
export default {
  directives: {
    hover: {
      inserted(el) {
        el.classList.add(".color");
      },
    },
  },
};
</script>

<style>
.color:hover {
  background-color: aqua;
}
</style>
