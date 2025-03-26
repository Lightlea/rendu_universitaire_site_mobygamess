<template>
<p class="text-xs text-green-500">已加载 {{ games.length }} 个游戏</p>

  <div class="space-y-6 mt-4">
    <RankingItem
      v-for="(game, index) in games"
      :key="game.id"
      :game="game"
      :rank="index + 1"
    />
  </div>
</template>

<script setup>
import RankingItem from './RankingItem.vue'
defineProps(['games'])
</script>
