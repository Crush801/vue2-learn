<template>
  <div>
    <button class="color" v-hover="{ a: 123 }" @click="showDialog">
      Color
    </button>
    <demo-dialog class="dialog" v-model="isShow"> </demo-dialog>
  </div>
</template>

<script>
import DemoDialog from "../components/DemoDialog";
export default {
  name: "App",
  components: {
    DemoDialog,
  },
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
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    showDialog() {
      this.isShow = true;
    },
  },
};
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
}
.color:hover {
  background-color: aqua;
}
</style>
