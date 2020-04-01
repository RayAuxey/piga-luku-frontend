<template>
  <div class="hero">
    <img class="hero-img" src="../assets/hero_image.jpg" alt />
    <img
      class="hero-mob"
      src="https://images.asos-media.com/products/nike-air-force-1-07-gore-tex-trainers-in-sand-ck2630-700/12489509-1-sand?$n_320w$&wid=600&fit=constrain"
      alt
    />
    <div class="cta">
      <img src="../assets/pigaluku3.svg" alt />
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
      >
        SHOP
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hero {
  // width: 100vw;
  position: absolute;
  top: var(--navHeight);
  left: 0;
  right: 0;

  height: calc(100vh - var(--navHeight));
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .hero-mob {
    display: none;
  }

  .cta {
    position: absolute;
    width: 25%;
    transform: translateX(-50%) translateY(-50%);
    left: 50%;
    top: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 90%;
    }

    .btn {
      margin-top: 2rem;
      width: 100%;
    }
  }

  @media (max-width: 700px) {
    .hero {
      background: red;
    }
    .hero-img {
      display: none;
    }
    .hero-mob {
      display: initial;
      filter: grayscale(50%) opacity(25%);
    }
    .cta {
      width: 70%;
    }
  }
}
</style>
