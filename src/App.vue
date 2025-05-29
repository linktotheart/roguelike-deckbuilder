<script setup>
import AppHeader from './components/AppHeader.vue'
import AppGrid from './components/AppGrid.vue'
import PlayCard from './components/PlayCard.vue'

import { useStore } from './stores/cards.js'

const store = useStore()
import { onMounted, ref } from 'vue'


const card = ref({
  id: 1,
  name: 'Sample Card',
  description: 'This is a sample card description.',
  image: 'card_clubs_02.png'
})

onMounted(() => {
  console.log('Store initialized:', store);
})
</script>

<template>
  <AppHeader />

  <AppGrid> 
    <play-card :card="card"></play-card>  
  </AppGrid>

  <footer></footer>
</template>

<style scoped></style>
