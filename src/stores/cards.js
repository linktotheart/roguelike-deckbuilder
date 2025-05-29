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

  const shuffleCards = () => {
    cards.value.sort(() => Math.random() - 0.5)
  }

  const getCards = computed(() => cards.value)

  return { 
    cards, addCard, removeCard, 
    getCards, shuffleCards,
    currentHand, currentBet
   }
})
