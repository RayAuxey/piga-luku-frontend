<template>
  <div class="sign-up">
    <div class="form">
      <img src="../assets/pigaluku.svg" alt="" class="logo" />

      <input type="email" placeholder="Email" v-model="email" />
      <template v-if="!isLogin">
        <input type="text" placeholder="First Name" v-model="firstname" />
        <input type="text" placeholder="Last Name" v-model="lastname" />
      </template>
      <input type="password" placeholder="Password" v-model="password" />
      <button @click="login" class="btn">
        {{ isLogin ? "SIGN IN" : "SIGN UP" }}
      </button>
      <div class="chooser" @click="isLogin = !isLogin">
        {{
          isLogin
            ? "Don't have an account? Sign Up"
            : "Already have an account? Log In"
        }}
      </div>
    </div>
    <img src="../assets/sign_up.jpg" class="side" alt="" />
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
    lastname: ""
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
