<template>
    <div class="flex flex-wrap gap-3">
      <button
        v-for="tab in tabs"
        :key="tab"
        class="bg-gray-200 px-4 py-1 rounded-full font-semibold text-sm"
      >
        {{ tab }}
      </button>
    </div>
  </template>
  
  <script setup>
  const tabs = ['Promos', 'Price', 'Reviews', 'Specs', 'Releases', 'Credits']
  </script>
  