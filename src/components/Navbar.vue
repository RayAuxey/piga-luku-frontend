<template>
  <div class="navbar">
    <div
      class="logo pointer"
      @click="
        $router.push({
          name: 'Home'
        })
      "
    >
      <img src="../assets/pigaluku.svg" alt />
      <!-- <h1>Piga Luku</h1> -->
    </div>

    <div class="categories">
      <div
        class="category"
        :class="{ active: currentRoute === 'clothing' }"
        @click="
          $router.push({
            name: 'ProductList',
            params: {
              type: 'clothing'
            }
          })
        "
      >Clothing</div>
      <div
        class="category"
        :class="{ active: currentRoute === 'shoes' }"
        @click="
          $router.push({
            name: 'ProductList',
            params: { type: 'shoes' }
          })
        "
      >Shoes</div>
      <div
        class="category"
        :class="{ active: currentRoute === 'accessories' }"
        @click="
          $router.push({
            name: 'ProductList',
            params: { type: 'accessories' }
          })
        "
      >Accessories</div>
      <div
        class="category"
        :class="{ active: currentRoute === 'activewear' }"
        @click="
          $router.push({
            name: 'ProductList',
            params: { type: 'activewear' }
          })
        "
      >Activewear</div>
    </div>

    <div class="icons">
      <div class="user-icon pointer">
        <div class="dropdown">
          <div class="name">{{currentUser.firstname}} {{currentUser.lastname}}</div>
          <div class="email">{{currentUser.email}}</div>
          <button @click="setUser(null)" class="btn btn-green">LOG OUT</button>
        </div>
        <!-- <i class="pointer fas fa-user-alt fa-2x"></i> -->
        <img
          class="icon"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACO0lEQVRoge2YP2sUQRiHfxONXe4UwSaFnX/uQLASopV2CobU+gFsLMTvkCrRg3wAG2sVEUSs1dReclHBQkuJeCQmzZ15LHYuJOPOJvvnnFXmgSkW3n3fZ4aZ3ZmRIpFI5L8CaAMPgRXgp20rwAOgFdrPC3AMWAKG+BkCHWAytO8+rPzrDHGXV7XqhB35vHRCe0vanfPutFkFbgJTts0CPSdmAJwP7S+SBevKN1LimsCaE7sYwtkVW3WkZjNi55zY7t909UltOFJTGbENJ3ajbP2JsglCU0UHvjrPVzNirznPXyqoXw6SP+xeekAzJa4JfHBiF0I4u2It/vyMrtkF27BtLkV+AJwL7S9JItke5CX8J3QEMEmyPTgsL6nTVkLa7UTHTg0fA5I1Uy/5vZCsiUWgC2za1gUWqMucj0QikcowZRMARyRdkDQjqSXpjKTTkk5IGm2tNyX9ULJ5+ySpJ+mtpPfGmF9lHXJDcky8BTwD+jn+wC594KnN5T1HVCneBh4B2yWkfWzb3O1xiE8DT4CdMYi77Nha04dxO3ANALclLUk6nhG2LumNpGVJH5XM82+SRkfGhqRTks7adknSFUknM3L2Jd01xjw+yDFL/n7GSH0G5oGLQO6PAWDsu/M2l497ReUvk35N+I7knqey8zQwYXMup9QbAjNFkr5wEm0Bd4qMdo6axtbYcmo/L5Lsu5Pk+hicfbVvOLXXfbHe0QTYF2jM2Ea+TP2jRRPWhXixFZp/vgORSCQSlt+718lyAjWnpwAAAABJRU5ErkJggg=="
        />
      </div>

      <div
        class="cart-icon pointer"
        @click="
          $router.push({
            name: 'Cart'
          })
        "
      >
        <div class="num-items">{{ bagProducts.length }}</div>
        <img src="../assets/cart.svg" alt />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data: () => ({
    currentRoute: ""
  }),
  methods: {
    ...mapMutations(["setUser"]),
    getParam() {
      if (this.$route.name === "ProductList") {
        this.currentRoute = this.$route.params.type;
      } else {
        this.currentRoute = "";
      }
    }
  },
  computed: {
    ...mapState(["bagProducts", "currentUser"])
  },
  watch: {
    $route() {
      this.getParam();
    },
    currentUser(to) {
      if (to == null) {
        this.$router.push({
          name: "SignIn"
        });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
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
      letter-spacing: 1px;

      &:hover {
        background: white;
        color: #2d2d2d;
      }

      &.active {
        background: var(--greenColor);
        color: white;
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

  .user-icon {
    margin: 0 1rem;
    position: relative;

    .dropdown {
      position: absolute;
      transform-origin: top right;
      padding: 1rem;
      transform: scale(0);
      top: 100%;
      right: 0;
      transition: all 200ms ease-in-out;

      background: var(--backgroundColor);
      display: flex;
      flex-direction: column;
      border: 1px solid black;
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.493);
      color: white;

      .name {
        font-weight: 900;
      }

      .btn {
        margin-top: 1rem;
        width: 200px;
      }
    }

    &:hover .dropdown {
      transform: scale(1);
    }
  }

  .cart-icon {
    position: relative;
    .num-items {
      position: absolute;
      background: var(--greenColor);
      // border: 1px solid white;
      display: flex;
      line-height: 0;
      justify-content: center;
      align-items: center;
      color: white;
      font-size: 0.7em;
      font-weight: 900;
      right: 0;
      top: 0;
      width: 20px;
      height: 20px;
      border-radius: 50%;
    }
  }
}
</style>
