<template>
  <div class="relative h-96 bg-gradient-to-t from-gray-300 to-gray-100 rounded-lg overflow-hidden mb-4">
    <!-- 分数角标 -->
    <div class="absolute top-4 right-4 w-8 h-8 rounded-full bg-white text-black font-bold shadow flex items-center justify-center">
      {{ game.rating || 'N/A' }}
    </div>

    <!-- 底部文字信息 -->
    <div class="absolute bottom-4 left-4 right-4 text-left space-y-1">
      <div class="font-semibold text-sm">#{{ game.rank || 1 }}</div>
      <h3 class="text-lg font-bold">{{ game.title }}</h3>
      <p class="text-xs text-gray-500">
        {{ formattedDate }} &nbsp; by {{ game.company || 'Unknown dd/mm/yyyy' }}
      </p>

      <div class="flex gap-2 flex-wrap mt-2">
        <span
          v-for="(tag, i) in game.tags || []"
          :key="i"
          class="text-xs bg-black text-white rounded-full px-2 py-0.5"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  game: Object
})
</script>
