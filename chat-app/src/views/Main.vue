<template>
  <div class="grid grid-cols-3 h-screen grid-rows-6">
    <div id="messages" class="col-span-2 row-span-5 overflow-auto">
      <Messages :messages="messages"></Messages>
    </div>
    <Participants></Participants>
    <div class="col-span-3 bg-gray-200 py-2">
      <Input @send-message="sendMessage"></Input>
    </div>
  </div>
</template>

<script>
import Messages from "../components/Messages";
import Participants from "../components/Participants";
import Input from "../components/Input";
export default {
  name: "Main",
  components: {
    Messages,
    Participants,
    Input,
  },
  created() {
    this.$store.dispatch("getAuth");
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