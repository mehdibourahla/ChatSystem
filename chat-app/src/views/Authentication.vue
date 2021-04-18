<template>
  <Login @login-user="loginUser" v-if="LoginVue" />
  <Register @register-user="registerUser" v-else />
</template>

<script>
import Login from "../components/authentication/Login";
import Register from "../components/authentication/Register";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Authentication",
  components: {
    Login,
    Register,
  },
  methods: {
    ...mapActions(["register", "login"]),
    async registerUser(user) {
      try {
        await this.register(user);
        this.$router.push("/main");
      } catch (error) {
        console.error(error);
      }
    },

    async loginUser(user) {
      try {
        await this.login(user);
        this.$router.push("/main");
      } catch (error) {
        console.error(error);
      }
    },
  },
  computed: {
    ...mapGetters([""]),
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