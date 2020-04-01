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
import { mapState } from "vuex";
export default {
  components: {
    Hero,
    Explainer
  },
  mounted() {
    if (this.currentUser == null) {
      this.$router.push({
        name: "SignIn"
      });
    }
  },
  computed: {
    ...mapState(["currentUser"])
  }
};
</script>

<style lang="scss" scoped>
.content {
  margin-top: 100vh;
}
</style>
