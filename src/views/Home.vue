<template>
  <div class="home">
    <Hero />
    <div class="content">
      <Explainer />
    </div>
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import Explainer from "@/components/Explainer.vue";
export default {
  components: {
    Hero,
    Explainer
  }
};
</script>

<style lang="scss" scoped>
.content {
  margin-top: 100vh;
}
</style>