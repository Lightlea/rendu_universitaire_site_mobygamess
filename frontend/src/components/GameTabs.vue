<template>
  <div class="flex flex-wrap gap-3">
    <button
      v-for="tab in tabs"
      :key="tab"
      class="px-4 py-1 rounded-full bg-gray-200 hover:bg-white font-semibold text-sm"
    >
      {{ tab }}
    </button>
  </div>
</template>

<script setup>
const tabs = ['Promos', 'Price', 'Reviews', 'Specs', 'Releases', 'Credits']
</script>
