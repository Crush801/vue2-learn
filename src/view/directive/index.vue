<template>
  <div>
    <button class="color" v-hover="{ a: 123 }">Color</button>
  </div>
</template>

<script>
export default {
  directives: {
    hover: {
      inserted(el, binding, vnode, oldVnode) {
        console.log("el", el);
        console.log("binding", binding);
        console.log("vnode", vnode);
        console.log("oldVnode", oldVnode);
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
