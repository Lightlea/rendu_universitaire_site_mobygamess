<template>
  <div class="max-w-7xl mx-auto p-6 space-y-6">
    <button class="px-4 py-1 bg-gray-800 text-white rounded-full">Go Back</button>

    <GameTabs />

    <div class="flex flex-col lg:flex-row gap-10">
      <!-- 左主栏 -->
      <div class="flex-1 space-y-6">
        <GameMedia />
        <GameTags />
        <GameReviewList />
      </div>

      <!-- 右侧栏 -->
      <div class="w-full lg:w-80 flex-shrink-0 space-y-6">
        <GameInfoCard />
        <GameIntroduction />
      </div>
    </div>
  </div>
</template>

<script setup>
import GameTabs from '@/components/GameTabs.vue'
import GameMedia from '@/components/GameMedia.vue'
import GameTags from '@/components/GameTags.vue'
import GameReviewList from '@/components/GameReviewList.vue'
import GameInfoCard from '@/components/GameInfoCard.vue'
import GameIntroduction from '@/components/GameIntroduction.vue'
</script>
