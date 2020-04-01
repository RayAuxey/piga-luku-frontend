<template>
  <div class="explain">
    <div class="text">
      <div class="heading">WHO WE ARE</div>

      <div
        class="desc"
      >Piga Luku (Sheng' for 'dress to impress') is a company that deals with boy's and men's clothing</div>
    </div>

    <div class="items">
      <div class="item">
        <img
          src="https://images.asos-media.com/products/topman-baseball-polo-with-check-in-grey-brown/20304177-1-grey?$n_320w$&wid=500&fit=constrain"
          alt
        />
        <div class="title">We have the best looks in town.</div>
        <div class="sub-title">No one else can top this</div>
        <button class="btn btn-green">COP A SHIRT</button>
      </div>
      <div class="item">
        <img
          src="https://images.asos-media.com/products/nike-training-air-zoom-superrep-trainers-in-black/14039155-1-black?$n_320w$&wid=500&fit=constrain"
          alt
        />
        <div class="title">We have the best looks in town.</div>
        <div class="sub-title">No one else can top this</div>
        <button class="btn btn-green">COP A SHIRT</button>
      </div>
      <div class="item">
        <img
          src="https://images.asos-media.com/products/the-north-face-1985-mountain-jacket-in-camo/14922553-1-englshgrnuxdigica?$n_320w$&wid=500&fit=constrain"
          alt
        />
        <div class="title">We have the best looks in town.</div>
        <div class="sub-title">No one else can top this</div>
        <button class="btn btn-green">COP A SHIRT</button>
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
    text-align: center;
    .heading {
      font-weight: 900;
      font-size: 2em;
    }

    .desc {
      font-weight: 400;
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