<template>
    <div class="flex flex-wrap gap-2">
      <span
        v-for="tag in tags"
        :key="tag"
        class="bg-gray-200 text-xs px-3 py-1 rounded-full"
      >
        {{ tag }}
      </span>
    </div>
  </template>
  
  <script setup>
  defineProps({ tags: Array })
  </script>
  