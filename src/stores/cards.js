import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { listOfCards } from '../helpers/cards'

export const useStore = defineStore('cards', () => {
  const cards = ref([
    ...listOfCards,
  ])

  const currentHand = ref([])
  const currentBet = ref(0)

  const addCard = (card) => {
    cards.value.push(card)
  }

  const removeCard = (index) => {
    cards.value.splice(index, 1)
  }

  const resetDeck = () => {
    cards.value = [...listOfCards]
  }

  const shuffleCards = () => {
    cards.value.sort(() => Math.random() - 0.5)
  }

  const popCard = () => {
    if (cards.value.length > 0) {
      return cards.value.pop()
    }
    return null
  }

  const dealCards = (number = 5) => {
    const dealtCards = []
    for (let i = 0; i < number; i++) {
      const card = popCard()
      if (card) {
        dealtCards.push(card)
      }
    }
    currentHand.value = dealtCards
    return dealtCards
  }

  const getCards = computed(() => cards.value)

  return {
    cards, addCard, removeCard,
    getCards, shuffleCards,
    currentHand, currentBet,
    popCard, dealCards, resetDeck
  }
})
