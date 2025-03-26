<template>
  <div class="w-full max-w-7xl mx-auto min-h-[1200px] p-6 space-y-6 mt-1">
  
      <!-- 主图 -->
      <div class="aspect-video bg-gray-200 rounded-lg flex items-center justify-center text-sm text-gray-600 shadow-inner">
        Screenshot or Video
      </div>
  
      <!-- 小图预览：固定4个，略扁，无圆角 -->
      <div class="grid grid-cols-4 gap-2">
        <div
          v-for="i in 4"
          :key="i"
          class="h-16 bg-gray-300 rounded-sm flex items-center justify-center text-xs text-gray-500"
        >
          Preview {{ i }}
        </div>
      </div>
    </div>
  </template>
  