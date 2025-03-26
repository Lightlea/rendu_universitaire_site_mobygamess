<template>
  <router-link :to="`/game/${game.id}`" class="block hover:bg-gray-50 transition rounded-lg">
    <div class="flex items-start gap-4 bg-transparent p-4 rounded-lg">
      <!-- 卡片内容 -->
      <div class="w-24 h-32 bg-gray-300 rounded-md overflow-hidden">
        <img src="" alt="" class="w-full h-full object-cover" />
      </div>

      <div class="flex-1">
        <div class="flex items-center gap-2 mb-1">
          <span class="font-bold text-lg">#{{ rank }}</span>
          <h3 class="font-semibold text-lg text-grey-600 hover:text-bule-200">{{ game.title }}</h3>
        </div>

        <!-- 其他内容 -->
        <div class="text-sm text-gray-500">{{ game.date }} · by {{ game.company }}</div>
      </div>
    </div>
  </router-link>
</template>

<script setup>
defineProps(['game', 'rank'])
</script>
