<template>
  <div class="page">
    <div class="product">
      <img class="image" :src="selectedProduct.imageUrl" alt />
      <div class="buy-card">
        <p class="description">{{ selectedProduct.name }}</p>
        <div class="price">KES {{ selectedProduct.price }}</div>
        <div class="color">
          <div class="title">COLOUR:</div>
          <select name="color" v-model="color">
            <option>RED</option>
            <option>GREEN</option>
            <option>BLACK</option>
            <option>PURPLE</option>
            <option>BLACK</option>
          </select>
        </div>
        <div class="size">
          <div class="title">SIZE:</div>
          <select name="size" v-model="size">
            <template v-if="!(selectedProduct.type === 'shoes')">
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

        <button @click="addProduct" class="add" :class="{ added: isAdded }">
          {{ !isAdded ? "ADD TO BAG" : "ADDED" }}
        </button>

        <div class="product-details">
          <div class="title">PRODUCT DETAILS</div>
          <div class="item">{{ selectedProduct.description }}</div>
          <ul>
            <li v-for="feature in selectedProduct.features" :key="feature">
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data: () => ({
    isAdded: false,
    size: "SM",
    color: "RED"
  }),
  mounted() {
    this.checkIfInBag();

    if (this.selectedProduct.type === "shoes") {
      this.size = "UK 7";
    }
  },
  methods: {
    ...mapMutations(["addToBag"]),
    checkIfInBag() {
      this.isAdded = this.bagProducts.some(
        p => p._id === this.selectedProduct._id
      );
      console.log(this.isAdded);
    },
    addProduct() {
      if (!this.isAdded) {
        this.addToBag({
          ...this.selectedProduct,
          color: this.color,
          size: this.size,
          quantity: 1
        });
        this.checkIfInBag();
      }
    }
  },
  computed: {
    ...mapState(["selectedProduct", "bagProducts"])
  }
};
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

      &.added {
        background: #ccc;
        color: black;
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
