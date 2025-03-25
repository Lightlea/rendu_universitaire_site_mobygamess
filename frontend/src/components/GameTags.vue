<template>
  <div class="flex gap-2 flex-wrap">
    <span
      v-for="tag in tags"
      :key="tag"
      class="px-3 py-1 rounded bg-gray-200 text-xs"
    >
      {{ tag }}
    </span>
  </div>
</template>

<script setup>
const tags = ['3D', 'Windows', 'Social simulation', 'Adventure']
</script>
