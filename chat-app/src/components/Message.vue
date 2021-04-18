<template>
  <div class="flex items-start">
    <img src="../assets/logo.png" alt="" class="w-8 rounded-full border mr-1" />
    <div class="bg-gray-300 rounded-lg p-2">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: {
    text: String,
    author: Object,
  },
};
</script>

<style>
</style>