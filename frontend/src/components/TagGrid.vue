<template>
    <div class="mt-8">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl font-bold">Explore</h2>
        <div class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300">
          <span class="text-gray-600">⚙️</span>
        </div>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        <TagItem v-for="(tag, index) in tags" :key="index" :label="tag" />
      </div>
    </div>
  </template>
  
  <script setup>
  import TagItem from './TagItem.vue'
  
  defineProps(['tags'])
  </script>