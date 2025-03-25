<template>
  <div class="relative">
    <!-- 标题栏 + 控制按钮 -->
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-xl font-bold">Subscribe</h2>
      <button
        @click="scrollRight"
        class="w-8 h-8 bg-white rounded-full shadow flex items-center justify-center text-gray-600 hover:text-gray-900"
      >
        <span class="text-xl">›</span>
      </button>
    </div>

    <!-- 横向滚动卡片容器 -->
    <div class="overflow-hidden">
      <div
        ref="scrollContainer"
        class="flex gap-4"
      >
        <div
          v-for="n in 10"
          :key="n"
          class="w-1/3 flex-shrink-0 bg-white p-3 rounded-lg"
        >
          <div class="bg-gray-300 h-48 rounded mb-3"></div>
          <h3 class="font-semibold">Title of Article {{ n }}</h3>
          <p class="text-sm text-gray-500">dd/mm/yyyy</p>
          <p class="text-xs text-gray-500 mt-1">⚪ name SURNAME</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const scrollContainer = ref(null)

const scrollRight = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({
      left: scrollContainer.value.offsetWidth,
      behavior: 'smooth'
    })
  }
}
</script>
