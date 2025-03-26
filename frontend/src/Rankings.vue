<template>
  <div class="flex-1 p-6">
    <div class="max-w-3xl mx-auto">
      <Topbar />
      <RankingTabs />

      <!-- 标题 -->
      <div class="flex items-baseline justify-between mt-6 mb-4">
        <h2 class="text-2xl font-bold">Most Researched Games</h2>
        <div class="text-sm text-gray-500">past week · <a href="#" class="underline">[feed]</a></div>
      </div>

      <!-- 加载中 -->
      <div v-if="loading" class="text-center py-4">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
        <p class="text-gray-500 mt-2">Loading games...</p>
      </div>

      <!-- 报错 -->
      <div v-else-if="error" class="text-red-500 text-center py-4">
        {{ error }}
      </div>

      <!-- 游戏排行榜 -->
      <RankingList v-else :games="games" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Topbar from './components/Topbar.vue'
import RankingTabs from './components/RankingTabs.vue'
import RankingList from './components/RankingList.vue'

const games = ref([])
const loading = ref(true)
const error = ref(null)

// 日期格式函数
const formatDate = (isoDate) => {
  if (!isoDate) return 'dd/mm/yyyy'
  const date = new Date(isoDate)
  if (isNaN(date)) return 'null'
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  return `${month} / ${year}`
}

onMounted(async () => {
  try {
    loading.value = true
    error.value = null
    const res = await fetch('http://localhost:3000/api/games')
    const data = await res.json()

    games.value = data.map(game => ({
      id: game.id,
      title: game.title || 'unknown title',
      rating: game.rating || 8.3,
      company: game.company || 'unknown developer',
      date: formatDate(game.release_date),
      friends: [
        'https://i.pravatar.cc/24?img=1',
        'https://i.pravatar.cc/24?img=2',
        'https://i.pravatar.cc/24?img=3'
      ],
      tags: ['Windows', 'Social simulation']
    }))
  } catch (err) {
    console.error('获取游戏数据失败:', err)
    error.value = '获取数据失败，请检查后端服务是否正常运行'
  } finally {
    loading.value = false
  }
})
</script>
