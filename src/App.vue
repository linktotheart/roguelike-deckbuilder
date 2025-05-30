<script setup>
import AppGrid from './components/AppGrid.vue'
import AppHeader from './components/AppHeader.vue'
import PlayCard from './components/PlayCard.vue'
import { ref, onMounted } from 'vue'
import { useStore } from './stores/cards.js'
import AppFooter from './components/AppFooter.vue'
import PlayButton from './components/PlayButton.vue'
import DeckOfCards from './components/DeckOfCards.vue'
// const cards = ref([])
const deckOfCards = ref([])
const playerDeck = ref([])
const playerHand = ref([])

const store = useStore()
store.resetDeck()
store.shuffleCards()
deckOfCards.value = store.getCards

const startGame = () => {
  playerDeck.value = store.dealCards(8)
}

const addCardToHand = (card) => {
  if (!playerHand.value.includes(card)) {
    if (playerHand.value.length >= 5) {
      alert('You can only hold 5 cards in your hand.')
      return
    }
    playerHand.value.push(card)
  } else {
    playerHand.value = playerHand.value.filter(c => c !== card)
  }
}
const checkIfSelected = (card) => {
  return playerHand.value.includes(card)
}

const restartGame = () => {
  playerHand.value = []
  playerDeck.value = []
  store.resetDeck()
  store.shuffleCards()
  deckOfCards.value = store.getCards
  startGame()
}

const discardHand = () => {
  if (playerHand.value.length === 0) {
    alert('You have no cards to discard.')
    return
  }
  const numberOfCardsToDiscard = playerHand.value.length
  playerHand.value.forEach(card => {
    const index = playerDeck.value.findIndex(c => c.card_id === card.card_id)
    if (index !== -1) {
      playerDeck.value.splice(index, 1)
    }
  })
  playerHand.value = []
  playerDeck.value = [...playerDeck.value, ...store.dealCards(numberOfCardsToDiscard)]
}

const sortCardsInDeck = () => {
  playerDeck.value.sort((a, b) => {
    if (a.suit === b.suit) {
      return b.sort_order - a.sort_order
    }
    return a.suit.localeCompare(b.suit)
  })
}

startGame()

// onMounted(() => {

// })
</script>

<template>
  <AppHeader @restart="restartGame" />

  <AppGrid class="deck-of-cards flex">
    <div class="fan" v-for="c in playerDeck" :key="c.value + c.suit">
      <PlayCard :card="c" :key="c.value + c.suit" :is-selected="checkIfSelected(c)" @select="addCardToHand" />
    </div>
    <div class="flex flex-gap">
      <PlayButton text="Deal" class="blue" @click="startGame" />
      <PlayButton text="Sort" class="green" @click="sortCardsInDeck" />
      <PlayButton text="Discard" class="red" @click="discardHand" />
    </div>
  </AppGrid>

  <app-footer>
    <!-- <PlayButton text="Start Game" @click="startGame"></PlayButton> -->
    <DeckOfCards />
  </app-footer>
</template>

<style scoped>
.deck-of-cards {
  /* fan these cards  */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
</style>
