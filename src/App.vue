<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
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
#app {
  width: 100vw;
  height: 100vh;
}
</style>
