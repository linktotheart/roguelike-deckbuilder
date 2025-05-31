<template>
  <AppHeader @restart="restartGame" />

  <AppGrid class="deck-of-cards flex flex-col items-center relative mt-8">
    <player-info></player-info>
    <TransitionGroup name="list" tag="div" class="justify-center w-full gap-2 items-center flex" mode="in-out">
      <div class="fan" v-for="c, i in playerDeck" :key="i + c.card_id">
        <PlayCard :card="c" :key="c.value + c.suit" :is-selected="checkIfSelected(c)" @select="addCardToHand" />
      </div>
    </TransitionGroup>
  </AppGrid>

  <app-footer>
    <DeckOfCards />
    <div class="ml-auto flex gap-2 items-center">
      <PlayButton text="> Hand" class="btn-primary btn-lg" :disabled="isDiscarding" @click="startGame" />
      <PlayButton text="Sort" class="btn-soft btn-secondary btn-sm" @click="sortCardsInDeck(true)"
        :disabled="isDiscarding" />
      <PlayButton text="Discard" class="btn-warning btn-lg" @click="discardHand" :disabled="isDiscarding" />
    </div>
    <!-- <PlayButton text="Start Game" @click="startGame"></PlayButton> -->
    <DeckOfCards class="ml-auto" />
  </app-footer>

  <warn-modal v-if="showModal" :is-open="showModal" @close="closeModal">
    'You have no Cards to Discard'
  </warn-modal>

</template>

<script setup>
import AppGrid from './components/AppGrid.vue'
import AppHeader from './components/AppHeader.vue'
import PlayCard from './components/PlayCard.vue'
import { ref } from 'vue'
import { useStore } from './stores/cards.js'
import AppFooter from './components/AppFooter.vue'
import PlayButton from './components/PlayButton.vue'
import PlayerInfo from './components/PlayerInfo.vue'
import DeckOfCards from './components/DeckOfCards.vue'
import WarnModal from './components/WarnModal.vue'

// const cards = ref([])
const deckOfCards = ref([])
const playerDeck = ref([])
const playerHand = ref([])
const showModal = ref(false)
const isSortedBySuit = ref(false)
const isDiscarding = ref(false)

const store = useStore()
store.resetDeck()
store.shuffleCards()
deckOfCards.value = store.getCards

const startGame = () => {
  playerDeck.value = store.dealCards(8)
  sortCardsInDeck()
  playerHand.value = []
}

const addCardToHand = (card) => {
  if (!playerHand.value.includes(card)) {
    if (playerHand.value.length >= 5) {
      showModal.value = true
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

const waitFor = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const discardHand = async () => {
  isDiscarding.value = true
  if (playerHand.value.length === 0) {
    showModal.value = true
    return
  }
  const numberOfCardsToDiscard = playerHand.value.length
  for (let i = 0; i < playerHand.value.length; i++) {
    const card = playerHand.value[i]
    const index = playerDeck.value.findIndex(c => c.card_id === card.card_id)
    if (index !== -1) {
      await waitFor(200)
      playerDeck.value.splice(index, 1)
    }
  }
  await waitFor(300)
  playerHand.value = []
  for (let i = 0; i < numberOfCardsToDiscard; i++) {
    await waitFor(100)
    playerDeck.value = [...playerDeck.value, ...store.dealCards(1)]
  }
  isDiscarding.value = false
}

const sortCardsInDeck = ((chagedOrder = false) => {
  let sorted
  if (isSortedBySuit.value) {
    sorted = playerDeck.value.sort((a, b) => {
      if (a.suit === b.suit) {
        return b.sort_order - a.sort_order
      }
      return a.suit.localeCompare(b.suit)
    })
  }
  else {
    sorted = playerDeck.value.sort((a, b) => {
      return b.sort_order - a.sort_order
    })
  }
  if (chagedOrder) {
    isSortedBySuit.value = !isSortedBySuit.value;
  }
  return sorted;

})

const closeModal = () => {
  showModal.value = false
}

startGame()


</script>

<style scoped>
.fan {
  transition-delay: calc(var(--index) * 1s);
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
  transform-origin: center;
  position: relative;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

.list-move {
  transition: transform 0.3s ease;
}

.list-leave-active {
  position: absolute;
  bottom: 50%;
}
</style>
