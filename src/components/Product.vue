<template>
  <div class="product pointer" @click="$router.push({
    name: 'ProductPage'
  })">
    <div class="image">
      <img
        src="https://images.asos-media.com/products/only-sons-herringbone-twill-double-pocket-over-shirt-in-white/14914467-1-brightwhite?$n_320w$&wid=513&fit=constrain"
        alt
      />
    </div>

    <div class="description">
      <p>American Eagle skinny fit destroyed jeans in worn out blue</p>
    </div>
    <div class="price">KES 4000</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.product {
  padding: 1rem;
  width: 25%;

  transition: all 300ms ease-in-out;

  &:hover {
    background: var(--backgroundColor);
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