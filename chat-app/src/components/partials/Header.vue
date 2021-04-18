<template>
  <div class="w-full flex justify-center items-center mb-8 px-4">
    <router-link to="/">
      <h1 class="text-4xl font-bold text-blue-400">Messenger</h1>
    </router-link>
    <h1 v-if="isAuthenticated" class="ml-auto" @click="logout">Logout</h1>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Header",
  props: {
    isAuthenticated: Boolean,
  },
  methods: {
    ...mapActions(["logout"]),
    async logout() {
      try {
        await this.logout();
        this.$router.push("/login");
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style>
</style>