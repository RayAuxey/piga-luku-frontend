<template>
  <div class="home">
    <input
      type="text"
      class="search"
      :placeholder="`Search for ${$route.params.type}, by brand, type, etc`"
      v-model="search"
    />
    <div v-if="loading" class="loading">
      <LoadingSpinner />
    </div>

    <div v-else-if="products.length > 0" class="products">
      <Product v-for="product in products" :key="product._id" :product="product" />
    </div>

    <div v-else class="no-result">No Results for {{ search }}</div>
  </div>
</template>

<script>
import axios from "axios";
import Product from "@/components/Product.vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import { mapState } from "vuex";

export default {
  data: () => ({
    products: [],
    loading: false,
    search: ""
  }),
  components: {
    Product,
    LoadingSpinner
  },
  methods: {
    async fetchProducts(search) {
      try {
        this.loading = true;
        const res = await axios.get(
          `https://pigaluku.horizonedge.tech/api/products/${
            this.$route.params.type
          }?search=${search || ""}`
        );
        this.products = res.data;
      } catch (error) {
        console.log(error.message);
      }
      this.loading = false;
    }
  },
  created() {
    if (this.currentUser == null) {
      this.$router.push({
        name: "SignIn"
      });
    }
    this.fetchProducts();
  },
  computed: {
    ...mapState(["currentUser"])
  },
  watch: {
    "$route.params.type": function() {
      this.fetchProducts();
      this.search = "";
    },
    search(val) {
      this.fetchProducts(val);
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;

  .search {
    width: 50%;
    margin: 1rem;
    padding: 0.5rem;
    outline: none;
    font-size: 1.2em;
  }

  .no-result {
    font-size: 2em;
    font-weight: 900;
  }

  @media (max-width: 700px) {
    .search {
      width: 80%;
    }
  }
}

.products {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.loading {
  height: calc(100vh - var(--navHeight));
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
