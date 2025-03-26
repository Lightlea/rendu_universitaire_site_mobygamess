<template>
  <div ref="wrapperRef" class="relative flex items-center justify-center gap-2 mb-6">
    <!-- 自定义搜索框区域（包 Catalogue 按钮 + Search 文本） -->
    <div class="w-4/5 flex items-center bg-gray-200 px-4 py-2 rounded-l-full relative">
      <!-- Catalogue 按钮 + 下拉切换 -->
      <div class="relative">
        <button
          @click="toggleDropdown"
          class="bg-white text-gray-700 text-sm px-3 py-1 rounded-full mr-4 hover:bg-gray-100 transition whitespace-nowrap"
        >
          {{ selectedTypeLabel }} ⌄
        </button>

        <!-- 下拉菜单 -->
        <div
          v-if="showDropdown"
          class="absolute left-0 top-10 bg-white border border-gray-200 rounded shadow-lg z-20 w-32"
        >
          <ul class="text-sm">
            <li
              v-for="type in searchTypes"
              :key="type.value"
              @click="selectType(type)"
              class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {{ type.label }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Search 文本提示 -->
      <span class="text-gray-500">Search</span>
    </div>

    <!-- 搜索按钮 -->
    <button class="px-4 py-2 rounded-r-full bg-gray-400 text-white hover:bg-gray-500 transition">
      🔍
    </button>

    <!-- 高级搜索按钮 -->
    <button
      @click="toggleFilter"
      class="text-sm text-blue-500 ml-6 hover:underline"
    >
      Advanced Search
    </button>

    <!-- 筛选面板 -->
    <CatalogFilter
      v-if="showFilter"
      class="absolute top-14 left-1/2 -translate-x-1/2 z-10"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import CatalogFilter from './CatalogFilter.vue'

const showFilter = ref(false)
const toggleFilter = () => {
  showFilter.value = !showFilter.value
}

// Dropdown 控制
const showDropdown = ref(false)
const selectedType = ref('games')
const selectedTypeLabel = ref('Catalogue')

const searchTypes = [
  { value: 'games', label: 'Games' },
  { value: 'developer', label: 'Developer' },
  { value: 'company', label: 'Company' },
  { value: 'publisher', label: 'Publisher' },
  { value: 'type', label: 'Type' },
  { value: 'tag', label: 'Tag' },
  { value: 'all', label: 'All' }
]

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value
}

const selectType = (type) => {
  selectedType.value = type.value
  selectedTypeLabel.value = type.label
  showDropdown.value = false
  // ✅ 在这里你可以将选中类型用于后续搜索逻辑
  console.log('当前选择搜索类型：', selectedType.value)
}

// 点击外部关闭 dropdown 和 filter
const wrapperRef = ref(null)
const handleClickOutside = (e) => {
  if (wrapperRef.value && !wrapperRef.value.contains(e.target)) {
    showDropdown.value = false
    showFilter.value = false
  }
}

onMounted(() => {
  window.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  window.removeEventListener('click', handleClickOutside)
})
</script>