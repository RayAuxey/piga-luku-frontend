<template>
  <div class="cart">
    <div class="bag">
      <div class="title">MY BAG</div>

      <div class="products">
        <Product
          v-for="(product, i) in bagProducts"
          :key="product._id"
          :product="product"
          :index="i"
        />
      </div>

      <div class="sub-total">
        <div class="title-">SUB-TOTAL</div>
        <div class="value">KES {{ subTotal }}</div>
      </div>
    </div>

    <div class="checkout" id="checkout">
      <div class="title">TOTAL</div>
      <div class="sub-total">
        <div class="title-">Sub-total</div>
        <div class="price">KES {{ subTotal }}</div>
      </div>
      <div class="phone-number">
        <div class="title-">Mpesa Number</div>
        <input class="white-input" type="text" placeholder="0724000000" />
      </div>

      <button class="btn btn-green">CHECKOUT</button>

      <div class="cards">
        <div class="title-">WE'LL SOON ACCEPT:</div>

        <div class="list">
          <img
            src="https://assets.asosservices.com/asos-finance/images/marketing/single.png"
            alt
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import Product from "@/components/cart/Product.vue";

export default {
  components: {
    Product
  },
  computed: {
    ...mapState(["bagProducts", "subTotal", "currentUser"])
  },
  mounted() {
    if (this.currentUser == null) {
      this.$router.push({
        name: "SignIn"
      });
    }
  }
};
</script>

<style lang="scss">
.cart {
  display: flex;
  padding: 1rem;

  @media (max-width: 700px) {
    padding: 0;
  }
  align-items: flex-start;

  .title {
    font-size: 1.2em;
    font-weight: 900;
    padding-bottom: 1rem;
    border-bottom: 1px solid #bbb;
  }
  .bag {
    flex: 4;
    background: white;

    margin-right: 1rem;
    padding: 2rem;

    .products {
      margin: 1rem 0;
    }

    .sub-total {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .title- {
        font-size: 1.2em;
        font-weight: 900;
        margin-right: 2rem;
      }
    }
  }

  .checkout {
    background: white;
    position: sticky;
    top: calc(var(--navHeight) + 1rem);
    flex: 2;
    padding: 2rem;
    .title- {
      font-size: 1.2em;
      font-weight: 900;
    }

    .sub-total {
      margin-top: 1rem;
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;
    }

    .phone-number {
      input {
        margin-top: 0.5rem;
        width: 100%;
      }
      margin-bottom: 1rem;
    }

    button {
      width: 100%;
      margin-bottom: 1rem;
    }

    .cards {
      .list {
        margin-top: 0.5rem;
        img {
          width: 100%;
        }
      }
    }
  }
}
@media (max-width: 700px) {
  .cart {
    flex-direction: column;
    .bag {
      flex: 1;
      width: 100%;
      margin-bottom: 2rem;
    }
    .checkout {
      flex: 1;
      width: 100%;
    }
  }
}
</style>
