<script setup>
import AppHeader from './components/AppHeader.vue'
import AppGrid from './components/AppGrid.vue'
import PlayCard from './components/PlayCard.vue'
import { ref, onMounted } from 'vue'
import { useStore } from './stores/cards.js'


const cards = ref([])
const store = useStore()
store.shuffleCards()
cards.value = store.getCards // Assuming you want to display the first card


onMounted(() => {
  console.log('Store initialized:', store);
})
</script>

<template>
  <AppHeader />

  <AppGrid>
    <play-card v-for="c in cards" :card="c" :key="c.id"></play-card>
  </AppGrid>

  <footer></footer>
</template>

<style scoped></style>
