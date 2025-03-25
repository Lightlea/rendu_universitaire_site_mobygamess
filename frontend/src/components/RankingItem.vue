<template>
  <div class="flex items-start gap-4 bg-transparent p-4 rounded-lg">
    <!-- 封面缩小 -->
    <div class="w-24 h-32 bg-gray-300 rounded-md overflow-hidden">
      <img src="" alt="" class="w-full h-full object-cover" />
    </div>

    <!-- 内容区域 -->
    <div class="flex-1">
      <!-- 排名 + 标题 -->
      <div class="flex items-center gap-2 mb-1">
        <span class="font-bold text-lg">#{{ rank }}</span>
        <h3 class="font-semibold text-lg">{{ game.title }}</h3>
      </div>

      <!-- 星级 + 评分 -->
      <div class="flex items-center gap-2 mb-1">
        <div class="flex items-center gap-0.5 text-yellow-500 text-sm">
          <span v-for="i in 4" :key="i">★</span>
          <span class="text-gray-400">★</span>
        </div>
        <span class="text-sm text-gray-700">{{ game.rating }}</span>
      </div>

      <!-- 时间 + 公司 -->
      <p class="text-xs text-gray-500 mb-2">{{ game.date }} · by {{ game.company }}</p>

      <!-- 好友头像 + 标签 -->
      <div class="flex items-center gap-3">
        <div class="flex -space-x-2">
          <img
            v-for="(friend, i) in game.friends"
            :key="i"
            :src="friend"
            class="w-6 h-6 rounded-full border-2 border-white"
          />
        </div>
        <div class="flex gap-1.5 flex-wrap">
          <span
            v-for="tag in game.tags"
            :key="tag"
            class="bg-gray-800 text-white text-[10px] px-2 py-0.5 rounded-full"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['game', 'rank'])
</script>
