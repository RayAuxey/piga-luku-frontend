<template>
  <div class="product">
    <img
      src="https://images.asos-media.com/products/adidas-originals-outline-central-logo-hoodie-in-black/13161197-1-black"
      alt
    />
    <div class="info">
      <div class="price">KES 4000</div>
      <div
        class="description"
      >ASOS DESIGN co-ord sweatshirt in burgundy with mustard & white side tape</div>
      <div class="customize">
        <div class="color">
          <!-- Colour: -->
          <select name="color" id>
            <option>XXS</option>
            <option>XS</option>
            <option>SM</option>
          </select>
        </div>

        <div class="size">
          <!-- Size: -->
          <select name="size" id>
            <option>XXS</option>
            <option>XS</option>
            <option>SM</option>
          </select>
        </div>

        <div class="quantity">
          <div>Qty:</div>
          <select name="qty" id>
            <option v-for="i in 10" :key="i">{{i}}</option>
          </select>
        </div>
      </div>
    </div>

    <i class="fas fa-times fa-2x pointer"></i>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.product {
  display: flex;
  margin-bottom: 1rem;
  border-bottom: 1px solid #ccc;
  padding-bottom: 1rem;

  img {
    width: 20%;
    margin-right: 1rem;
  }
  .info {
    margin-right: 1rem;
    .price {
      font-size: 1.2em;
      font-weight: 900;
      margin-bottom: 1rem;
    }

    .description {
      margin-bottom: 1rem;
    }

    .customize {
      display: flex;
      select {
        cursor: pointer;
        padding: 0.5rem;
        margin-right: 1rem;
        background: transparent;
        border: none;
        border-right: 1px solid #ccc;
        border-left: 1px solid #ccc;
        outline: none;
      }
      > * {
        display: flex;
        align-items: center;
        > * {
          margin-right: 0.5rem;
        }
      }
    }
  }
}

@media (max-width: 700px) {
  .product {
    flex-direction: column;
    position: relative;
    img {
      width: 100%;
      margin-bottom: 1rem;
    }

    i {
      position: absolute;
      background: white;
      padding: 10px;
      right: 0;
      top: 0;
    }
  }
}
</style>