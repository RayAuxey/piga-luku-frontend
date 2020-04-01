<template>
  <div class="product">
    <img :src="product.imageUrl" alt />
    <div class="info">
      <div class="price">KES {{ product.price }}</div>
      <div class="description">{{ product.name }}</div>
      <div class="customize">
        <div class="color">
          <!-- Colour: -->
          <select name="color" :value="product.color" @change="changeColor">
            <option>RED</option>
            <option>GREEN</option>
            <option>BLACK</option>
            <option>PURPLE</option>
            <option>BLACK</option>
          </select>
        </div>

        <div class="size">
          <!-- Size: -->
          <select name="size" :value="product.size" @change="changeSize">
            <template v-if="!(product.type === 'shoes')">
              <option>XXS</option>
              <option>XS</option>
              <option>SM</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </template>
            <template v-else>
              <option v-for="i in 6" :selected="i === 1" :key="i"
                >UK {{ 6 + i }}</option
              >
            </template>
          </select>
        </div>

        <div class="quantity">
          <div>Qty:</div>
          <select @change="changeQty" name="qty" id>
            <option
              :selected="bagProducts[index].quantity === i"
              v-for="i in 10"
              :key="i"
              >{{ i }}</option
            >
          </select>
        </div>
      </div>
    </div>
    <div class="spacer"></div>
    <i @click="removeFromBag(index)" class="fas fa-times fa-2x pointer"></i>
    <!-- <div class="cancel">
      <img class="times" src="../../assets/times.svg" alt />
    </div>-->
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  props: ["product", "index"],
  methods: {
    ...mapMutations(["removeFromBag", "setQty", "setColor", "setSize"]),
    changeQty(e) {
      this.setQty({ index: this.index, qty: Number(e.target.value) });
    },
    changeColor(e) {
      this.setColor({ index: this.index, color: e.target.value });
    },
    changeSize(e) {
      this.setSize({ index: this.index, color: e.target.value });
    }
  },
  computed: {
    ...mapState(["bagProducts"])
  }
};
</script>

<style lang="scss" scoped>
.product {
  display: flex;
  margin-bottom: 1rem;
  border-bottom: 1px solid #ccc;
  padding-bottom: 1rem;

  .spacer {
    flex: 1;
  }

  img {
    width: 20%;
    margin-right: 1rem;
  }
  .info {
    margin-right: 1rem;
    .price {
      font-size: 1.2em;
      font-weight: 900;
      letter-spacing: 2px;
      margin-bottom: 1rem;
    }

    .description {
      margin-bottom: 1rem;
      font-weight: 300;
    }

    .customize {
      display: flex;

      select {
        cursor: pointer;
        padding: 0.5rem;
        margin-right: 1rem;
        background: transparent;
        border: none;
        border: 1px solid #ccc;
        // border-left: 1px solid #ccc;
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

  .times {
    width: 24px;
    height: 24px;
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
      display: flex;

      justify-content: center;
      align-items: center;
      right: 0;
      top: 0;
    }
  }
}
</style>
