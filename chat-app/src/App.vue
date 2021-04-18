<template>
  <div class="relative h-screen">
    <Header @isLoggedIn="isLoggedIn" />
    <router-view @isLoggedIn="isLoggedIn"></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      messages: [],
    };
  },
  methods: {
    async logout() {
      await this.$store.dispatch("logout");
      this.$router.push("/login");
    },
    sendMessage(message) {
      if (message.replace(/ /g, "")) {
        this.messages.unshift(message);

        var container = this.$el.querySelector("#messages");
        container.scrollTop = container.scrollHeight;
      }
    },
  },
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isAuthenticated;
    },
  },
};
</script>

<style>
</style>
