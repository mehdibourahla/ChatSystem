<template>
  <Login v-if="LoginVue" />
  <Register @register-user="register" v-else />
</template>

<script>
import Login from "../components/Login";
import Register from "../components/Register";

export default {
  name: "Authentication",
  components: {
    Login,
    Register,
  },
  methods: {
    async register(newUser) {
      await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
    },

    async login() {
      await fetch("api/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(),
      });
    },
  },
  computed: {
    LoginVue() {
      if (this.$route.path === "/login") {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style>
</style>