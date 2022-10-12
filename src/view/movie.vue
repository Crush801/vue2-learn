<template>
  <div>
    <ul>
      <li
        v-for="(item, index) in movies"
        :key="index"
        @click="current = index"
        :class="{ red: current == index }"
      >
        {{ index }} -- {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      isRed: false,
      movies: ["1", "2", "3"],
    };
  },
  methods: {
    change() {},
  },
};
</script>

<style>
.red {
  color: red;
}
</style>
