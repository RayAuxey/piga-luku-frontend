import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ProductPage from "../views/ProductPage.vue";
import ProductList from "../views/ProductList.vue";
import Cart from "../views/Cart.vue";
import SignIn from "../views/SignIn.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/product",
    name: "ProductPage",
    component: ProductPage
  },
  {
    path: "/products/:type",
    name: "ProductList",
    component: ProductList
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart
  },
  {
    path: "/signin",
    name: "SignIn",
    component: SignIn
  },
  {
    path: "/faqs",
    name: "Faqs",
    component: () => import("../views/Faqs")
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    component: () => import("../views/ContactUs")
  },
  {
    path: "/team",
    name: "Team",
    component: () => import("../views/Team")
  }
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

export default router;
