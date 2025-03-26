<template>
  <div class="flex-1 flex flex-col bg-white min-h-screen">
    <!-- 顶部导航 -->
    <Topbar />

    <!-- 主内容 -->
    <div class="max-w-7xl mx-auto px-6 pt-9">
      <!-- 返回按钮 -->
      <button
        @click="goBack"
        class="bg-gray-800 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-700 transition mb-6"
      >
        Go Back
      </button>

      <!-- 加载 & 错误状态 -->
      <div v-if="loading" class="text-gray-500">加载中...</div>
      <div v-else-if="error" class="text-red-500">{{ error }}</div>

      <!-- 主体区域 -->
      <div v-else class="flex flex-col lg:flex-row gap-10">
        <!-- 左侧区域 -->
        <div class="lg:basis-2/3 space-y-4">
          <!-- 标签导航 -->
<div class="flex flex-wrap gap-3">
  <button
    v-for="tab in tabs"
    :key="tab"
    @click="activeTab = tab"
    :class="[
      'px-4 py-2 rounded-full text-sm transition',
      activeTab === tab ? 'bg-black text-white' : 'bg-gray-200 hover:bg-gray-300'
    ]"
  >
    {{ tab }}
  </button>
</div>


            <!-- ✅ Tab 内容动态切换区域 -->
  <component :is="currentTabComponent" />
<!-- Tag 区域保留在下方 -->
  <TheGameTags :tags="tags" />
          <!-- 评论区 -->
          <div class="bg-gray-50 rounded-lg p-6">
            <div class="flex items-center justify-between mb-4">
              <h3 class="font-semibold">Recent Reviews</h3>
              <div class="flex items-center gap-2">
                <span class="text-sm text-gray-500">Rating from friends</span>
                <span class="text-2xl font-bold">8.1</span>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div
                v-for="review in reviews"
                :key="review.user"
                class="bg-white p-4 rounded-md"
              >
                <div class="flex items-center gap-2 mb-2">
                  <div class="w-8 h-8 bg-gray-200 rounded-full"></div>
                  <div>
                    <div class="font-medium">{{ review.user }}</div>
                    <div class="text-xs text-gray-500">{{ review.date }}</div>
                  </div>
                </div>
                <p class="text-sm">{{ review.content }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 右侧区域 -->
        <div class="lg:basis-1/3 lg:max-w-sm w-full space-y-6">
          <TheGameInfoCard :game="game" />
          <TheGameIntroduction :description="game.description || 'No description yet.'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import Topbar from './components/Topbar.vue'
import TheGameMedia from './components/TheGameMedia.vue'
import TheGameTags from './components/TheGameTags.vue'
import TheGameInfoCard from './components/TheGameInfoCard.vue'
import TheGameIntroduction from './components/TheGameIntroduction.vue'
// 引入 tab 内容组件
import TabPromos from './components/tabs/TabPromos.vue'
import TabPrice from './components/tabs/TabPrice.vue'
import TabReviews from './components/tabs/TabReviews.vue'
import TabSpecs from './components/tabs/TabSpecs.vue'
import TabReleases from './components/tabs/TabReleases.vue'
import TabCredits from './components/tabs/TabCredits.vue'


const route = useRoute()
const router = useRouter()
const gameId = route.params.id

const game = ref(null)
const loading = ref(true)
const error = ref(null)

const tabs = ['Promos', 'Price', 'Reviews', 'Specs', 'Releases', 'Credits']
const activeTab = ref('Promos')
// 根据 activeTab 动态返回当前 tab 组件
const currentTabComponent = computed(() => {
  switch (activeTab.value) {
    case 'Promos': return TabPromos
    case 'Price': return TabPrice
    case 'Reviews': return TabReviews
    case 'Specs': return TabSpecs
    case 'Releases': return TabReleases
    case 'Credits': return TabCredits
    default: return TabPromos
  }
})
const tags = ['3D', 'Windows', 'Social simulation', 'Adventure']
const reviews = [
  { user: 'Gamer123', date: 'dd/mm/yyyy', content: 'Fantastic game, highly recommended' },
  { user: 'PlayerX', date: 'dd/mm/yyyy', content: 'Disappointing graphics, but great gameplay.' }
]

const goBack = () => router.back()

onMounted(async () => {
  try {
    const res = await fetch(`http://localhost:3000/api/games/${gameId}`)
    if (!res.ok) throw new Error('获取游戏数据失败')
    game.value = await res.json()
    console.log('🟢 游戏数据加载成功:', game.value)
  } catch (err) {
    console.error(err)
    error.value = '加载失败，请稍后再试'
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.max-w-7xl {
  max-width: 1440px;
}
</style>
