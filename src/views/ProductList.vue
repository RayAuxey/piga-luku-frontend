<template>
  <div class="home">
    <div class="products">
      <Product v-for="i in 16" :key="i" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Product from "@/components/Product.vue";

export default {
  components: {
    Product
  }
};
</script>

<style lang="scss" scoped>
.products {
  display: flex;
  flex-wrap: wrap;
}
</style>