<template>
  <div class="product pointer" @click="productSelect">
    <div class="image">
      <img :src="product.imageUrl" alt />
    </div>

    <div class="description">
      <p>{{ product.name }}</p>
    </div>
    <div class="spacer"></div>
    <div class="price">KES {{ product.price }}</div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: ["product"],
  methods: {
    ...mapMutations(["selectProduct"]),
    productSelect() {
      this.selectProduct(this.product);
      this.$router.push({
        name: "ProductPage"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.product {
  padding: 1rem;
  width: 33%;

  transition: all 300ms ease-in-out;

  &:hover {
    background: var(--greenColor);
    color: white;
  }

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .image {
    width: 100%;
    img {
      width: 100%;
    }
  }

  .description {
    text-align: start;
    font-size: 0.8em;
    // font-weight: 900;
    letter-spacing: 2px;
  }

  .spacer {
    flex: 1;
  }
  .price {
    font-weight: 900;
  }
}
@media (max-width: 700px) {
  .product {
    width: 50%;
  }
}
</style>
