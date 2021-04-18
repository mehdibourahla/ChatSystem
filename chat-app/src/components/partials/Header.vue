<template>
  <div class="w-full flex justify-center items-center mb-8 px-4">
    <router-link to="/">
      <h1 class="text-4xl font-bold text-blue-400">Messenger</h1>
    </router-link>
    <h1 v-if="isAuthenticated" class="ml-auto" @click="logout">Logout</h1>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    isAuthenticated: Boolean,
  },
  methods: {
    async logout() {
      const res = await fetch("api/logout", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ id: localStorage.getItem("user-id") }),
      });
      if (res.ok) {
        localStorage.removeItem("user-id");
        localStorage.removeItem("user-token");
        this.$emit("isLoggedIn", false);

        this.$router.push("/login");
      } else {
        console.error(res.statusText);
      }
    },
  },
};
</script>

<style>
</style>