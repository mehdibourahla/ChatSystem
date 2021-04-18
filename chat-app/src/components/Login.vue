<template>
  <form
    class="flex flex-col items-center space-y-6 border m-4 p-4 rounded bg-gray-100"
  >
    <div class="w-full">
      <label class="block font-semibold" for="email">E-mail</label>
      <input
        class="border w-full p-2 rounded"
        type="email"
        id="email"
        placeholder="ex: Johndoe@example.com"
      />
    </div>
    <div class="w-full">
      <label class="block font-semibold" for="password">Password</label>
      <input
        class="border w-full p-2 rounded"
        type="password"
        id="password"
        placeholder="ex: 12345678"
      />
    </div>
    <button
      type="submit"
      class="w-full bg-blue-400 p-3 text-white font-semibold rounded"
    >
      Login
    </button>
  </form>
</template>

<script>
export default {};
</script>

<style>
</style>