<template>
  <!-- Main Content -->
  <div class="flex-1 flex flex-col">
    <!-- Topbar -->
    <Topbar />

    <!-- Main -->
    <main class="p-6">
      <h2 class="text-3xl font-bold mb-2">Companies & Teams</h2>
      <p class="text-gray-600 mb-6">
        Moby Games have included 999 game companies and development teams from 99 different regions, supporting 9 languages.
      </p>

      <!-- Filters -->
      <div class="flex justify-between items-center mb-4 text-sm text-gray-500">
        <h3 class="text-lg font-semibold text-black">Most Researched Company</h3>
        <div class="flex space-x-4">
          <span>past week</span>
          <span class="underline cursor-pointer">[feed]</span>
        </div>
      </div>

      <!-- Cards Grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <CompanyCard v-for="n in 10" :key="n" />
      </div>
    </main>

    <!-- Back to Top -->
    <div class="fixed bottom-6 right-6 flex items-center space-x-1 text-gray-500 cursor-pointer text-sm">
      <div class="w-6 h-6 rounded-full border flex items-center justify-center">↑</div>
      <span>Back to top</span>
    </div>
  </div>
</template>

<script setup>
import Topbar from './components/Topbar.vue'
import CompanyCard from './components/CompanyCard.vue'
</script>
  