<template>
  <div id="app">
    <Navbar v-if="!($route.name === 'SignIn')" />
    <div class="router-view">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
    <Footer v-if="!($route.name === 'SignIn')" />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Navbar,
    Footer
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

.white-input {
  border: 1px solid #666;
  outline: none;
  padding: 1rem;
}

.router-view {
  margin: 0 auto;
  margin-top: 60px;

  max-width: 1024px;
  min-height: calc(100vh - var(--navHeight));
}

@media (max-width: 700px) {
  .router-view {
    margin-top: 120px;
    min-height: calc(100vh - var(--navHeight));
  }
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.btn {
  //  background: #018849;
  border: none;
  line-height: 0;
  // color: white;
  outline: none;
  cursor: pointer;
  font-weight: bold;
  letter-spacing: 2px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  // &:hover {
  //   // background: #026b3a;
  // }
}

.btn-green {
  background: var(--greenColor);
  color: white;
  &:hover {
    background: var(--greenColorDark);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
