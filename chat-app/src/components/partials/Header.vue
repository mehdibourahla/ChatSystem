<template>
  <div class="w-full flex justify-center items-center mb-8 px-4">
    <router-link to="/">
      <h1 class="text-4xl font-bold text-blue-400">Messenger</h1>
    </router-link>
    <div class="ml-auto cursor-pointer font-semibold">
      <span v-text="user">user</span>
      <span v-if="isLoggedIn" class="" @click="logout"> Logout </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    isLoggedIn: Boolean,
  },
  data() {
    return {
      user: this.$store.getters.getAuth || null,
    };
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