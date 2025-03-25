<template>
  <div class="space-y-4">
    <div class="aspect-video bg-gray-200 rounded-lg flex items-center justify-center text-sm text-gray-600">
      Screenshot or Video
    </div>
    <div class="grid grid-cols-4 gap-3">
      <div v-for="i in 4" :key="i" class="h-20 bg-gray-300 rounded"></div>
    </div>
  </div>
</template>
