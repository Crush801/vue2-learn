<template>
  <div>
    {{ total }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      books: [
        { id: 1, price: 2 },
        { id: 2, price: 3 },
      ],
    };
  },
  computed: {
    total: function () {
      let result = 0;
      //   for (let book in this.books) {
      //     result += book.price;
      //   }
      for (let i = 0; i < this.books.length; i++) {
        result += this.books[i].price;
      }
      return result;
    },
  },
};
</script>
