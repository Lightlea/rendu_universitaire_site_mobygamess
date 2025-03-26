<script setup>
defineProps(['description'])
</script>

<template>
  <div class="bg-white p-4 rounded-xl shadow">
    <h3 class="text-lg font-bold mb-2">Game Introduction</h3>
    <p class="text-sm text-gray-700">{{ description }}</p>
  </div>
</template>
