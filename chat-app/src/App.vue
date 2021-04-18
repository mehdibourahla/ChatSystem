<template>
  <div class="relative h-screen">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

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
