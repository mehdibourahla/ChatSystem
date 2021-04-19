<template>
  <div class="w-full flex justify-center items-center mb-8 px-4">
    <router-link to="/">
      <h1 class="text-4xl font-bold text-blue-400">Messenger</h1>
    </router-link>
    <h1
      v-if="isLoggedIn"
      class="ml-auto cursor-pointer font-semibold"
      @click="logout"
    >
      Logout
    </h1>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    isLoggedIn: Boolean,
  },
  methods: {
    logout() {
      try {
        this.$store.dispatch("logout");
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style>
</style>