<template>
  <div class="flex-1 p-6">
    <Topbar />
    <HeaderTitle />
    <SearchBar />
    <SubscribeSection />
  </div>
</template>

<script setup>
import Topbar from '../components/Topbar.vue'
import HeaderTitle from '../components/HeaderTitle.vue'
import SearchBar from '../components/SearchBar.vue'
import SubscribeSection from '../components/SubscribeSection.vue'
</script>