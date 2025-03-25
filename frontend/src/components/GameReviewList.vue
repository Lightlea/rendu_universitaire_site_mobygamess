<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <GameReviewCard
      v-for="(review, i) in reviews"
      :key="i"
      :user="review.user"
      :date="review.date"
      :content="review.content"
    />
  </div>
</template>

<script setup>
import GameReviewCard from './GameReviewCard.vue'

const reviews = [
  { user: 'Gamer123', date: 'dd/mm/yyyy', content: 'Fantastic game, highly recommended' },
  { user: 'PlayerX', date: 'dd/mm/yyyy', content: 'Disappointing graphics, but great gameplay.' },
]
</script>
