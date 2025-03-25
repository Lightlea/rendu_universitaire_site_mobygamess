<template>
  <div class="flex-1 flex flex-col bg-white min-h-screen">
    <!-- 顶部导航栏 -->
    <Topbar />

    <!-- Tabs：居中 + 宽边距 -->
    <div class="flex justify-center mt-8">
      <div class="bg-gray-200 rounded-full px-2 py-1">
        <div class="flex gap-6 px-4">
          <button class="px-4 py-2 rounded-full hover:bg-white hover:text-gray-900 font-semibold">Topics</button>
          <button class="px-4 py-2 rounded-full hover:bg-white hover:text-gray-900 font-semibold">News</button>
          <button class="px-4 py-2 rounded-full hover:bg-white hover:text-gray-900 font-semibold">Followings</button>
        </div>
      </div>
    </div>

    <!-- 主内容区域 -->
    <div class="flex gap-10 px-10 py-8 max-w-6xl mx-auto w-full">
      <!-- 帖子列表区域 -->
      <div class="flex-1 space-y-6 max-w-2xl">
        <!-- 单个帖子 -->
        <div class="bg-white border border-gray-100 rounded-xl shadow p-4 space-y-4">
          <!-- 用户信息 -->
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 bg-gray-200 rounded-full"></div>
            <div class="text-sm">
              <h3 class="font-medium">MyFriend001</h3>
              <p class="text-xs text-gray-500">2 hours ago</p>
            </div>
            <button class="ml-auto text-gray-400 hover:text-gray-600 text-lg">•••</button>
          </div>

          <!-- 图片 -->
          <div class="bg-gray-100 rounded-lg aspect-video flex items-center justify-center text-gray-500 text-sm">
            Screenshot from Cyberpunk 2077
          </div>

          <!-- 内容文字 -->
          <p class="text-gray-700 text-sm">Loving the graphics in this game!</p>

          <!-- 标签 -->
          <div class="flex gap-2 flex-wrap">
            <span class="px-3 py-1 bg-gray-100 rounded-full text-xs">Graphics</span>
            <span class="px-3 py-1 bg-gray-100 rounded-full text-xs">Gaming</span>
          </div>

          <!-- 按钮 -->
          <div class="flex items-center gap-4 text-gray-500 text-sm">
            <button class="flex items-center gap-1 hover:text-gray-700"><span>👍</span></button>
            <button class="flex items-center gap-1 hover:text-gray-700"><span>💬</span></button>
          </div>
        </div>

        <!-- 你可以在这里加更多 Post 组件 -->
      </div>

      <!-- 右侧栏 -->
      <div class="w-64 space-y-6">
        <!-- 简评卡片 -->
        <div class="bg-gray-50 rounded-xl shadow-sm p-5 border border-gray-100 min-h-[330px] flex flex-col justify-end">
          <div class="space-y-3">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 bg-gray-200 rounded-full"></div>
              <h3 class="font-medium text-sm">MyFriend3</h3>
              <div class="ml-auto text-yellow-400 text-sm">⭐⭐⭐⭐⭐</div>
            </div>
            <p class="text-sm text-gray-600 leading-relaxed">Disappointing graphics, but great gameplay.</p>
          </div>
        </div>

        <!-- 第二个卡片 -->
        <div class="bg-gray-50 rounded-xl shadow-sm p-5 border border-gray-100 min-h-[330px] flex flex-col justify-end">
          <div class="space-y-3">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 bg-gray-200 rounded-full"></div>
              <h3 class="font-medium text-sm">MyFriend3</h3>
              <div class="ml-auto text-yellow-400 text-sm">⭐⭐⭐⭐⭐</div>
            </div>
            <p class="text-sm text-gray-600 leading-relaxed">Disappointing graphics, but great gameplay.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Topbar from './components/Topbar.vue'
</script>
