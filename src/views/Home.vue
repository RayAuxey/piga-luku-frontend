<template>
  <div class="home">
    <Hero />
    <div class="content">
      <Explainer />
    </div>

    <!-- <div class="brands">
      <img
        src="https://content.asos-media.com/-/media/homepages/unisex/brands/256x256/nike-hp-logos-256x256.jpg"
        alt
      />
      <img
        src="https://content.asos-media.com/-/media/homepages/unisex/brands/256x256/north-face.png"
        alt
      />
      <img
        src="https://content.asos-media.com/-/media/homepages/unisex/brands/256x256/tommy-hilfiger-hp-logos-256x256.jpg"
        alt
      />
      <img
        src="https://content.asos-media.com/-/media/homepages/unisex/brands/256x256/ellesse-hp-logos-256x256.jpg"
        alt
      />
      <img
        src="https://content.asos-media.com/-/media/homepages/unisex/brands/256x256/dr-martens-hp-logos-256x256.jpg"
        alt
      />
      <img
        src="https://content.asos-media.com/-/media/homepages/unisex/brands/256x256/carhartt-hp-logos-256x256.jpg"
        alt
      />
    </div>-->
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import Explainer from "@/components/Explainer.vue";
import { mapState } from "vuex";
export default {
  components: {
    Hero,
    Explainer,
  },
  mounted() {
    if (this.currentUser == null) {
      this.$router.push({
        name: "SignIn",
      });
    }
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  head: {
    title: { inner: "Home | PigaLuku - Boy's Fashion" },
    meta: [
      {
        hid: "og:type",
        property: "og:type",
        content: `website`,
      },
      {
        hid: "og:title",
        property: "og:title",
        content: `The One Stop Shop For Boy's Fashion`,
      },
      {
        hid: "og:description",
        property: "og:description",
        content: `PigaLuku is the best online shop for real G's to find what best fits their style.`,
      },
      {
        hid: "og:image",
        property: "og:image",
        itemprop: "image",
        content: "https://ibb.co/JK5tWMW",
      },
      {
        hid: "og:image:secure_url",
        property: "og:image:secure_url",
        itemprop: "image",
        content: "https://ibb.co/JK5tWMW",
      },
      {
        hid: "og:url",
        property: "og:url",
        content: `https://rayauxey.tech`,
      },
      {
        hid: "twitter:card",
        property: "twitter:card",
        content: `summary_large_image`,
      },
    ],
  },
};
</script>

<style lang="scss" scoped>
.content {
  margin-top: 100vh;
}

.brands {
  display: flex;
  justify-content: space-evenly;
}
</style>
