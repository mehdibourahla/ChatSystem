<template>
  <div
    v-on:scroll="handleScroll"
    class="flex flex-col-reverse overflow-y-scroll h-3/4 border"
  >
    <div class="m-1" :key="message.id" v-for="message in messages">
      <Message :message="message"></Message>
    </div>
  </div>
</template>

<script>
import Message from "./Message";

export default {
  name: "Messages",
  components: {
    Message,
  },
  props: {
    messages: Array,
  },
  data() {
    return {
      page: 1,
    };
  },
  methods: {
    handleScroll(e) {
      if (
        e.target.scrollTop * -1 + e.target.clientHeight >=
        e.target.scrollHeight
      ) {
        this.page++;
        this.$store.dispatch("loadMoreMessages", this.page);
      }
    },
  },
};
</script>

<style>
</style>