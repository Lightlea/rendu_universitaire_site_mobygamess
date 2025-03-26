<script setup>
defineProps({
  name: String,
  location: String
})
</script>

<template>
  <div class="bg-white shadow p-4 rounded-xl hover:shadow-lg transition">
    <div class="w-full h-24 bg-gray-200 rounded mb-3"></div>
    <h3 class="font-semibold text-sm">{{ name }}</h3>
    <p class="text-xs text-gray-500">{{ location }}</p>
  </div>
</template>
