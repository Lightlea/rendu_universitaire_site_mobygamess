<template>
  <div class="flex flex-wrap gap-2 mt-3">
    <span
      v-for="tag in tags"
      :key="tag"
      class="bg-gray-100 text-gray-800 text-sm px-2 py-0.5 rounded-sm border border-gray-100"
    >
      {{ tag }}
    </span>
  </div>
</template>

<script setup>
defineProps(['tags'])
</script>
