<script setup>
  import { ref } from "vue";
  const count = ref(0);
</script>

<template>

  <button
    type="button"
    class="my-6 rounded bg-gray-300 px-4 py-2 transition-all hover:bg-gray-200 fontCol"
    @click="count++"
  >
    count is: {{ count }}
  </button>
</template>

<style scoped>
  .fontCol {
    color: red;
  }
</style>
