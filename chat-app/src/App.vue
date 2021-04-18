<template>
  <div class="relative h-screen">
    <Header @isLoggedIn="isLoggedIn" :isAuthenticated="isAuthenticated" />
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
      isAuthenticated: false,
    };
  },
  methods: {
    isLoggedIn(value) {
      this.isAuthenticated = value;
    },
    sendMessage(message) {
      if (message.replace(/ /g, "")) {
        this.messages.unshift(message);

        var container = this.$el.querySelector("#messages");
        container.scrollTop = container.scrollHeight;
      }
    },
  },
};
</script>

<style>
</style>
