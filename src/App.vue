<template>
  <div id="app">
    <Navbar />
    <div class="router-view">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
    <Footer />
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
  min-height: 100vh;
}

@media (max-width: 700px) {
  .router-view {
    margin-top: 120px;
    min-height: 100vh;
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
  padding: 1.5rem;
  line-height: 0;
  // color: white;
  outline: none;
  cursor: pointer;
  font-weight: bold;
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
