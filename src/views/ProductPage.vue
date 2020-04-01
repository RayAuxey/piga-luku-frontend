<template>
  <div class="product">
    <img
      class="image"
      src="https://images.asos-media.com/groups/asos-design-co-ord-in-burgundy-with-mustard-white-side-tape/28880-group-1?$n_320w$&wid=513&fit=constrain"
      alt
    />
    <div class="buy-card">
      <p
        class="description"
      >ASOS DESIGN co-ord sweatshirt in burgundy with mustard & white side tape</p>
      <div class="price">KES 4000</div>
      <div class="color">
        <div class="title">COLOUR:</div>
        <select name="size" id>
          <option>XXS</option>
          <option>XS</option>
          <option>SM</option>
        </select>
      </div>
      <div class="size">
        <div class="title">SIZE:</div>
        <select name="size" id>
          <option>XXS</option>
          <option>XS</option>
          <option>SM</option>
        </select>
      </div>

      <button class="add">ADD TO BAG</button>

      <div class="product-details">
        <div class="title">PRODUCT DETAILS</div>
        <div class="item">Hoodie by adidas Originals</div>
        <ul>
          <li>Throw on and go</li>
          <li>Drawstring hood</li>
          <li>Over-the-head style</li>
          <li>Trefoil logo</li>
          <li>3-Stripes to sleeve</li>
          <li>Side pockets</li>
          <li>Fitted trims</li>
          <li>Regular fit</li>
          <li>True to size</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>


<style lang="scss" scoped>
ul {
  margin: 0;
  padding-inline-start: 20px;
}
.product {
  padding: 1rem;
  display: flex;
  justify-content: center;

  img {
    width: 50%;
    margin-right: 2rem;
  }

  .buy-card {
    width: 30%;
    .description {
      font-size: 1.2em;
      letter-spacing: 2px;
    }

    .price {
      font-weight: 900;
      font-size: 1.2em;
      margin-bottom: 1rem;
    }

    .color {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
    }
    .title {
      font-weight: 900;
      font-size: 1.1em;
      margin-right: 1rem;
    }
    .size {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
    }
    select {
      padding: 0.5rem;
      background: white;
      outline: none;
    }
    button {
      background: var(--greenColor);
      border: none;
      padding: 1.5rem;
      line-height: 0;
      color: white;
      outline: none;
      cursor: pointer;
      font-weight: bold;
      &:hover {
        background: var(--greenColorDark);
      }
    }
    button,
    select {
      width: 100%;
    }

    .product-details {
      margin-top: 2rem;
      .title {
        margin-bottom: 0.5rem;
      }

      ul {
        margin-top: 0.2rem;
      }
    }
  }
}

@media (max-width: 700px) {
  .product {
    flex-direction: column;

    img {
      width: 100%;
    }

    .buy-card {
      width: 100%;
    }
  }
}
</style>