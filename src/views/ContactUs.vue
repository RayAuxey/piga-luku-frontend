<template>
  <div class="contact">
    <div class="title">SEND US AN EMAIL</div>
    <p>
      We’re here 7 days a week to help you. We’ll get back to you as soon as we
      can.
    </p>
    <form @submit.prevent>
      <div class="form-control">
        <label>First Name</label>
        <input type="text" :value="currentUser.firstname" />
      </div>
      <div class="form-control">
        <label>Last Name</label>
        <input type="text" :value="currentUser.lastname" />
      </div>
      <div class="form-control">
        <label>Email</label>
        <input type="email" :value="currentUser.email" />
      </div>
      <div class="form-control">
        <label>Message</label>
        <textarea></textarea>
      </div>
      <div class="button">
        <button class="btn btn-green">SEND</button>
      </div>
    </form>

    <div class="socials">
      <i class="fab fa-facebook fa-3x"></i>
      <i class="fab fa-instagram fa-3x"></i>
      <i class="fab fa-twitter fa-3x"></i>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["currentUser"]),
  },
  head: {
    title: { inner: "Contact Us | PigaLuku - Boy's Fashion" },
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
.contact {
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    font-size: 1.5em;
    font-weight: 900;
    margin-top: 1rem;
    letter-spacing: 2px;
  }

  .socials {
    display: flex;
    justify-content: space-around;
    width: 50%;
    margin: 2rem;
    i {
      cursor: pointer;
    }
  }

  form {
    background: white;
    padding: 1rem;
    width: 50%;

    .form-control {
      margin-bottom: 1rem;
      label {
        display: block;
        margin-bottom: 0.5rem;
        color: black;
      }

      input {
        width: 100%;
        height: 50px;
        padding: 1rem;
        outline: none;
        font-size: 1.2em;
        border: 1px solid black;
      }

      textarea {
        width: 100%;
        border: 1px solid black;
        height: 150px;
        padding: 1rem;
        font-size: 1.1em;
        outline: none;
      }
    }
    .btn {
      width: 100%;
    }
  }
  @media (max-width: 700px) {
    form,
    .socials {
      width: 100%;
    }
    p {
      margin: 1rem 3rem;
    }
  }
}
</style>
