// TheGamePage.vue
<template>
  <div class="max-w-7xl mx-auto p-6 space-y-6">
    <button class="bg-gray-800 text-white px-4 py-1 rounded-full text-sm">Go Back</button>

    <GameTabs />

    <div class="flex flex-col lg:flex-row gap-10">
      <div class="flex-1 space-y-6">
        <GameMedia />
        <GameTags :tags="tags" />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ReviewList :reviews="reviews" title="Recent Reviews" />
          <ReviewList :reviews="friendReviews" title="Rating from friends" :showScore="true" />
        </div>
      </div>

      <div class="w-full lg:w-80 space-y-6">
        <GameInfoCard />
        <GameIntroduction />
      </div>
    </div>
  </div>
</template>

<script setup>
import GameTabs from '@/components/TheGameTabs.vue'
import GameMedia from '@/components/TheGameMedia.vue'
import GameTags from '@/components/TheGameTags.vue'
import GameInfoCard from '@/components/TheGameInfoCard.vue'
import GameIntroduction from '@/components/TheGameIntroduction.vue'
import ReviewList from '@/components/ReviewList.vue'

const tags = ['3D', 'Windows', 'Social simulation', 'Adventure']
const reviews = [
  { user: 'Gamer123', date: 'dd/mm/yyyy', content: 'Fantastic game, highly recommended' }
]
const friendReviews = [
  { user: 'PlayerX', date: 'dd/mm/yyyy', content: 'Disappointing graphics, but great gameplay.' }
]
</script>
