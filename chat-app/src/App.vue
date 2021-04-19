<template>
  <div class="relative h-screen">
    <Header :isLoggedIn="isLoggedIn" />
    <router-view></router-view>
    <!-- <Footer /> -->
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
  methods: {
    async logout() {
      await this.$store.dispatch("logout");
    },
  },
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn;
    },
  },
};
</script>