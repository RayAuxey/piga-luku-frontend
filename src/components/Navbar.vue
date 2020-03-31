<template>
  <div class="navbar">
    <div class="logo pointer" @click="$router.push({
      name: 'Home'
    })">
      <img src="../assets/pigaluku.svg" alt />
      <!-- <h1>Piga Luku</h1> -->
    </div>

    <div class="categories">
      <div
        class="category"
        @click="$router.push({
      name: 'ProductList',
      params: {
        type: 'clothing'
      }
      
    })"
      >Clothing</div>
      <div
        class="category"
        @click="$router.push({
          name: 'ProductList',params: {type: 'shoes'}
          })"
      >Shoes</div>
      <div
        class="category"
        @click="$router.push({
      name: 'ProductList' ,params: {type: 'accessories'}})"
      >Accessories</div>
      <div
        class="category"
        @click="$router.push({
      name: 'ProductList',params: {type: 'activewear'}})"
      >Activewear</div>
    </div>

    <div class="icons">
      <i class="pointer fas fa-user-alt fa-2x"></i>
      <div class="cart-icon" @click="$router.push({
      name: 'Cart'
    })">
        <div class="num-items">1</div>
        <i class="pointer fas fa-shopping-cart fa-2x"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">
.navbar {
  z-index: 10;
  position: fixed;
  height: 60px;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  background: #2d2d2d;

  .logo {
    color: white;
    text-transform: uppercase;
    letter-spacing: 2px;
    height: 100%;
    display: flex;
    align-items: center;
    img {
      height: 90%;
    }
  }

  .categories {
    display: flex;
    height: 60px;
    background: #2d2d2d;
    .category {
      height: 100%;
      color: white;
      padding: 0 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      &:hover {
        background: white;
        color: #2d2d2d;
      }
    }
  }

  @media (max-width: 700px) {
    .categories {
      position: absolute;
      justify-content: center;
      top: 60px;
      left: 0;
      right: 0;

      .category {
        font-size: 0.8em;
      }
    }
  }

  .icons {
    display: flex;
    align-items: center;
    i {
      color: var(--accentColor);
      margin: 0 1rem;
    }
  }

  .cart-icon {
    position: relative;
    .num-items {
      position: absolute;
      background: green;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-size: 0.5em;
      font-weight: 700;
      right: 0;
      top: 0;
      width: 20px;
      height: 20px;
      border-radius: 50%;
    }
  }
}
</style>
