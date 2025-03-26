<script setup>
import { ref, onMounted } from 'vue'
import Topbar from './components/Topbar.vue'
import CompanyCard from './components/CompanyCard.vue'

const companies = ref([])
const error = ref('')

onMounted(async () => {
  try {
    const res = await fetch('http://localhost:3000/api/developers') // 👈 注意这里是完整路径
    if (!res.ok) throw new Error('接口请求失败')
    const data = await res.json()
    console.log('✅ 获取公司数据成功：', data)
    companies.value = data
  } catch (err) {
    console.error('❌ 获取公司数据失败：', err)
    error.value = '获取公司数据失败，请检查接口是否启动'
  }
})
</script>

<template>
  <div class="flex-1 flex flex-col">
    <Topbar />

    <main class="p-6">
      <h2 class="text-3xl font-bold mb-2">Companies & Teams</h2>
      <p class="text-gray-600 mb-6">
        Moby Games has included 999 game companies and development teams from 99 different regions, supporting 9 languages.
      </p>

      <p class="text-xs text-red-500" v-if="error">{{ error }}</p>
   

      <!-- Filters -->
      <div class="flex justify-between items-center mb-4 text-sm text-gray-500">
        <h3 class="text-lg font-semibold text-black">Most Researched Company</h3>
        <div class="flex space-x-4">
          <span>past week</span>
          <span class="underline cursor-pointer">[feed]</span>
        </div>
      </div>

      <!-- Company Grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <CompanyCard
          v-for="item in companies"
          :key="item.id"
          :name="item.name"
          :location="item.location"
        />
      </div>
    </main>

    <!-- Back to Top -->
    <div class="fixed bottom-6 right-6 flex items-center space-x-1 text-gray-500 cursor-pointer text-sm">
      <div class="w-6 h-6 rounded-full border flex items-center justify-center">↑</div>
      <span>Back to top</span>
    </div>
  </div>
</template>
