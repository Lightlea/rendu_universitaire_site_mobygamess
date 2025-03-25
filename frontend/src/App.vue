<template>
  <div class="flex min-h-screen text-gray-900 bg-white">
    <Sidebar />
    <router-view />
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
import Topbar from './components/Topbar.vue'
import HeaderTitle from './components/HeaderTitle.vue'
import SearchBar from './components/SearchBar.vue'
import SubscribeSection from './components/SubscribeSection.vue'
</script>