<template>
  <Login @login-user="login" v-if="LoginVue" />
  <Register @register-user="register" v-else />
</template>

<script>
import Login from "../components/authentication/Login";
import Register from "../components/authentication/Register";

export default {
  name: "Authentication",
  components: {
    Login,
    Register,
  },
  methods: {
    async register(newUser) {
      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      if (res.status === 201) {
        let data = await res.json();
        localStorage.setItem("user-token", data);
        localStorage.setItem("user-id", data.user.id);

        this.$emit("isLoggedIn", true);
        this.$router.push("Main");
      } else {
        localStorage.removeItem("user-token");
        console.error(res.statusText);
      }
    },

    async login(user) {
      const res = await fetch("api/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (res.status === 201) {
        let data = await res.json();
        localStorage.setItem("user-token", data.token);
        localStorage.setItem("user-id", data.user.id);

        this.$emit("isLoggedIn", true);
        this.$router.push("Main");
      } else {
        localStorage.removeItem("user-token");
        localStorage.removeItem("user-id");

        console.error(res.statusText);
      }
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