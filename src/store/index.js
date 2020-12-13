import Vue from "vue";
import Vuex from "vuex";

import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedProduct: {},
    bagProducts: [],
    subTotal: 0,
    currentUser: {
      _id: "5e861410693b697c20d64ae4",
      email: "user@example.com",
      password: "$2a$10$5QffKTxSsst6OKn6RkLe3OnKO0Pg0GUHykqccVcH7QMuGcVyVMy52",
      firstname: "Example",
      lastname: "User",
      __v: 0,
    },
  },
  mutations: {
    setUser(state, payload) {
      state.currentUser = payload;
      state.bagProducts = [];
      state.subTotal = 0;
      state.selectedProduct = {};
    },
    selectProduct(state, payload) {
      state.selectedProduct = payload;
    },
    addToBag(state, payload) {
      state.bagProducts.push(payload);
      state.subTotal = state.bagProducts.reduce((prev, curr) => {
        return curr.price * curr.quantity + prev;
      }, 0);
    },
    removeFromBag(state, index) {
      state.bagProducts.splice(index, 1);
      state.subTotal = state.bagProducts.reduce((prev, curr) => {
        return curr.price * curr.quantity + prev;
      }, 0);
    },
    setQty(state, payload) {
      state.bagProducts[payload.index].quantity = payload.qty;
      state.subTotal = state.bagProducts.reduce((prev, curr) => {
        return curr.price * curr.quantity + prev;
      }, 0);
    },
    setColor(state, payload) {
      state.bagProducts[payload.index].color = payload.color;
    },
    setSize(state, payload) {
      state.bagProducts[payload.index].size = payload.size;
    },
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()],
});
