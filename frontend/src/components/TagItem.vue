<template>
    <div class="bg-gray-200 text-gray-700 px-4 py-2 rounded text-sm text-center cursor-pointer hover:bg-gray-300">
      {{ label }}
    </div>
  </template>
  
  <script setup>
  defineProps(['label'])
  </script>
  