<template>
  <div class="grid grid-cols-3 h-screen grid-rows-6">
    <div id="messages" class="col-span-2 row-span-5 overflow-auto">
      <Messages :messages="messages"></Messages>
    </div>
    <div class="bg-gray-200 flex flex-col justify-around row-span-5">
      <Participants></Participants>
    </div>
    <div class="col-span-3 bg-gray-200 py-2">
      <Input @send-message="sendMessage"></Input>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>