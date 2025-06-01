<template>
  <AppHeader @restart="restartGame" />

  <AppGrid class="deck-of-cards flex flex-col items-center relative mt-8">
    <PlayerInfo :selected-cards="playerHand" @show-help="showHelpModal = true" />
    <TransitionGroup name=" list" tag="div" class="justify-center w-full gap-2 items-center flex" mode="in-out">
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
      <PlayButton text="Discard" class="btn-accent btn-lg" @click="discardHand" :disabled="isDiscarding" />
    </div>
    <!-- <PlayButton text="Start Game" @click="startGame"></PlayButton> -->
    <DeckOfCards class="ml-auto" />
  </app-footer>

  <warn-modal v-if="showWarningModal" :is-open="showWarningModal" @close="closeModal">
    <div class="text-secondary mt-4">
      {{ warningtext }}
    </div>
  </warn-modal>

  <warn-modal v-if="showHelpModal" modal-id="show-help-modal" title="Poker Hands" :is-open="showHelpModal"
    @close="closeModal">
    <winning-hands />
  </warn-modal>

</template>

<script setup>
import AppGrid from './components/AppGrid.vue'
import AppHeader from './components/AppHeader.vue'
import PlayCard from './components/PlayCard.vue'
import { ref } from 'vue'
import { useStore } from './stores/cards.js'
import { usePlayerStore } from './stores/player'
import AppFooter from './components/AppFooter.vue'
import PlayButton from './components/PlayButton.vue'
import PlayerInfo from './components/PlayerInfo.vue'
import DeckOfCards from './components/DeckOfCards.vue'
import WarnModal from './components/WarnModal.vue'
import WinningHands from './components/WinningHands.vue'

// STATES
const deckOfCards = ref([])
const playerDeck = ref([])
const playerHand = ref([])
const showWarningModal = ref(false)
const showHelpModal = ref(false)
const isSortedBySuit = ref(false)
const isDiscarding = ref(false)
const warningtext = ref('')

const store = useStore()
const playerStore = usePlayerStore()
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
      showWarningModal.value = true
      warningtext.value = 'You can only hold 5 cards in your hand at a time.'
      return
    }
    playerHand.value.push(card)
  } else {
    playerHand.value = playerHand.value.filter(c => c !== card)
  }
  playerStore.setPlayerCards(playerHand.value)
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
  if (playerHand.value.length === 0) {
    showWarningModal.value = true
    warningtext.value = 'You have no cards in your hand to discard.'
    return
  }
  isDiscarding.value = true
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
  showWarningModal.value = false
  warningtext.value = ''
  isDiscarding.value = false
  showHelpModal.value = false
}

startGame()


</script>

<style scoped>
.fan {
  transition-delay: calc(var(--index) * 1s);
}

.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease-in-out;
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
  z-index: 22;
}
</style>
