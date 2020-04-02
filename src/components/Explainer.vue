<template>
  <div class="explain">
    <div class="text">
      <div class="heading">WHO WE ARE</div>

      <div
        class="desc"
      >We believe in a world where you have total freedom to be you, without judgement. To experiment. To express yourself. To be brave and grab life as the extraordinary adventure it is. So we make sure everyone has an equal chance to discover all the amazing things they’re capable of – no matter who they are, where they’re from or what looks they like to boss. We exist to give you the confidence to be whoever you want to be.</div>
    </div>

    <div class="items">
      <div class="item">
        <img
          src="https://images.asos-media.com/products/topman-baseball-polo-with-check-in-grey-brown/20304177-1-grey?$n_320w$&wid=500&fit=constrain"
          alt
        />
        <div class="title">FRESH LOOKS</div>
        <div class="sub-title">Refresh your taste</div>
        <button
          class="btn btn-green"
          @click="
            $router.push({
              name: 'ProductList',
              params: {
                type: 'clothing'
              }
            })
          "
        >BUY CLOTHING</button>
      </div>
      <div class="item">
        <img
          src="https://images.asos-media.com/products/nike-training-air-zoom-superrep-trainers-in-black/14039155-1-black?$n_320w$&wid=500&fit=constrain"
          alt
        />
        <div class="title">SNEAKER BRANDS</div>
        <div class="sub-title">Stay grounded</div>
        <button
          class="btn btn-green"
          @click="
            $router.push({
              name: 'ProductList',
              params: {
                type: 'shoes'
              }
            })
          "
        >BUY SHOES</button>
      </div>
      <div class="item">
        <img
          src="https://images.asos-media.com/products/the-north-face-1985-mountain-jacket-in-camo/14922553-1-englshgrnuxdigica?$n_320w$&wid=500&fit=constrain"
          alt
        />
        <div class="title">ACTIVEWEAR</div>
        <div class="sub-title">At-home gyms</div>
        <button
          class="btn btn-green"
          @click="
            $router.push({
              name: 'ProductList',
              params: {
                type: 'activewear'
              }
            })
          "
        >BUY ACTIVEWEAR</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.explain {
  padding: 3rem 0;
  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    // text-align: center;
    .heading {
      font-weight: 900;
      font-size: 2em;
    }

    .desc {
      font-weight: 400;
      letter-spacing: 1px;
      width: 60%;
    }
  }
}
.items {
  display: flex;
  flex-wrap: wrap;

  .item {
    width: 33%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 100%;
    }
    .title {
      margin-top: 1rem;
      font-weight: 900;
    }
    .sub-title {
      font-weight: 300;
    }

    .btn {
      margin-top: 1rem;
      width: 75%;
    }
  }

  @media (max-width: 700px) {
    .item {
      width: 100%;
    }
  }
}
</style>
