<template>
  <div class="bg-gray-50 rounded-xl p-4 shadow-sm">
    <h4 class="font-semibold mb-1 text-sm">{{ user }}</h4>
    <p class="text-xs text-gray-400">{{ date }}</p>
    <p class="text-sm text-gray-700 mt-2">{{ content }}</p>
  </div>
</template>

<script setup>
defineProps(['user', 'date', 'content'])
</script>
