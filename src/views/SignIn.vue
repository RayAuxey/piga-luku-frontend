<template>
  <div class="sign-up">
    <form class="form" @submit.prevent="login">
      <img src="../assets/pigaluku.svg" alt class="logo" />

      <input type="email" placeholder="Email" v-model="email" />
      <template v-if="!isLogin">
        <input type="text" placeholder="First Name" v-model="firstname" />
        <input type="text" placeholder="Last Name" v-model="lastname" />
      </template>
      <input type="password" placeholder="Password" v-model="password" />
      <button class="btn btn-green">
        <div v-if="loading" class="loading">
          <img src="../assets/loading.svg" alt class="logo" />
        </div>

        <div v-else>{{ isLogin ? "SIGN IN" : "SIGN UP" }}</div>
      </button>
      <div class="chooser" @click="isLogin = !isLogin">
        {{
        isLogin
        ? "Don't have an account? Sign Up"
        : "Already have an account? Log In"
        }}
      </div>
    </form>
    <img src="../assets/sign_up.jpg" class="side" alt />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import axios from "axios";

export default {
  data: () => ({
    isLogin: true,
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    loading: false
  }),
  methods: {
    ...mapMutations(["setUser"]),
    async login() {
      if (!/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
        alert("Enter a valid email");
        return;
      } else if (this.password.length < 6) {
        alert("Password must be at least 6 characters");
        return;
      }

      if (!this.isLogin && (this.firstname == "" || this.lastname == "")) {
        alert("You must include Firstname and Lastname");
        return;
      }

      try {
        this.loading = true;
        const res = await axios.post(
          `http://localhost:7003/api/user/${
            this.isLogin ? "signin" : "signup"
          }`,
          {
            email: this.email,
            password: this.password,
            firstname: this.firstname,
            lastname: this.lastname
          }
        );
        this.setUser(res.data);
        this.$router.push({
          name: "Home"
        });
      } catch (error) {
        console.log(error.message);
      }
      this.loading = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.sign-up {
  display: flex;

  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;

  @media (max-width: 700px) {
    img.side {
      display: none;
    }
  }
  .form {
    flex: 1;
    background: var(--backgroundColor);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .logo {
      height: 20vh;
    }

    input,
    .btn {
      margin-top: 1rem;
      width: 75%;
      max-width: 500px;
    }

    .btn {
      .loading {
        width: 25px;
        height: 25px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    input {
      padding: 0.5rem;
      border: 2px solid rgb(42, 39, 39);
    }

    .chooser {
      margin-top: 1rem;
      color: white;

      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
