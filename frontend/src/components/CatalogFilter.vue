
// CatalogFilter.vue
<template>
  <div class="bg-white shadow-xl rounded-xl p-6 w-96 border border-gray-200">
    <h3 class="text-lg font-bold mb-4">Filter Catalog</h3>
    <div class="space-y-3 text-sm">
      <div>
        <label class="font-semibold block mb-1">Game</label>
        <input type="text" class="w-full border rounded px-3 py-2 bg-gray-50" placeholder="Enter game name" />
      </div>
      <div>
        <label class="font-semibold block mb-1">Developer</label>
        <input type="text" class="w-full border rounded px-3 py-2 bg-gray-50" placeholder="Enter developer name" />
      </div>
      <div>
        <label class="font-semibold block mb-1">Company</label>
        <input type="text" class="w-full border rounded px-3 py-2 bg-gray-50" placeholder="Enter company name" />
      </div>
      <div>
        <label class="font-semibold block mb-1">Publisher</label>
        <input type="text" class="w-full border rounded px-3 py-2 bg-gray-50" placeholder="Enter publisher name" />
      </div>
      <div>
        <label class="font-semibold block mb-1">Type</label>
        <input type="text" class="w-full border rounded px-3 py-2 bg-gray-50" placeholder="e.g. RPG, FPS" />
      </div>
      <div>
        <label class="font-semibold block mb-1">Tag</label>
        <input type="text" class="w-full border rounded px-3 py-2 bg-gray-50" placeholder="e.g. Indie, Multiplayer" />
      </div>
    </div>
    <div class="mt-4 flex justify-end">
      <button class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Apply</button>
    </div>
  </div>
</template>

<script setup>
// 无需逻辑，纯 UI 组件
</script>
