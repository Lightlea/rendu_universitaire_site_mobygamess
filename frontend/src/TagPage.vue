<template>
  <div class="flex-1 flex flex-col">
    <Topbar />
    <div class="p-6">
      <div class="max-w-3xl mx-auto">
        <TagHeader />
        <SearchBar />
        <TagGrid :tags="tags" />
      </div>
    </div>
    <BackToTop />
  </div>
</template>

<script setup>
import Topbar from './components/Topbar.vue'
import TagHeader from './components/TagHeader.vue'
import SearchBar from './components/SearchBar.vue'
import TagGrid from './components/TagGrid.vue'
import BackToTop from './components/Backtotop.vue'

const tags = [
  '# Windows', '# Mac OS', '# System', '# Steam', '# Indie', '# Mobile',
  '# Action', '# RPG', '# Puzzle', '# Casual', '# VR', '# Retro',
  '# Shooter', '# Strategy', '# Adventure', '# Simulation', '# Horror', '# Platformer'
]
</script>
  