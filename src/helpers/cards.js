export const CARD_SUITS = {
  HEARTS: 'Hearts',
  DIAMONDS: 'Diamonds',
  CLUBS: 'Clubs',
  SPADES: 'Spades'
}

export const CARD_VALUES = {
  TWO: '2',
  THREE: '3',
  FOUR: '4',
  FIVE: '5',
  SIX: '6',
  SEVEN: '7',
  EIGHT: '8',
  NINE: '9',
  TEN: '10',
  JACK: 'Jack',
  QUEEN: 'Queen',
  KING: 'King',
  ACE: 'Ace'
}

export const listOfCards = [
  // Hearts
  { suit: CARD_SUITS.HEARTS, value: CARD_VALUES.TWO, card_id: '2H', base_chips: 2, rank: '2', name: 'Two of Hearts', image: 'card_hearts_02.png' },
  { suit: CARD_SUITS.HEARTS, value: CARD_VALUES.THREE, card_id: '3H', base_chips: 3, rank: '3', name: 'Three of Hearts', image: 'card_hearts_03.png' },
  { suit: CARD_SUITS.HEARTS, value: CARD_VALUES.FOUR, card_id: '4H', base_chips: 4, rank: '4', name: 'Four of Hearts', image: 'card_hearts_04.png' },
  { suit: CARD_SUITS.HEARTS, value: CARD_VALUES.FIVE, card_id: '5H', base_chips: 5, rank: '5', name: 'Five of Hearts', image: 'card_hearts_05.png' },
  { suit: CARD_SUITS.HEARTS, value: CARD_VALUES.SIX, card_id: '6H', base_chips: 6, rank: '6', name: 'Six of Hearts', image: 'card_hearts_06.png' },
  { suit: CARD_SUITS.HEARTS, value: CARD_VALUES.SEVEN, card_id: '7H', base_chips: 7, rank: '7', name: 'Seven of Hearts', image: 'card_hearts_07.png' },
  { suit: CARD_SUITS.HEARTS, value: CARD_VALUES.EIGHT, card_id: '8H', base_chips: 8, rank: '8', name: 'Eight of Hearts', image: 'card_hearts_08.png' },
  { suit: CARD_SUITS.HEARTS, value: CARD_VALUES.NINE, card_id: '9H', base_chips: 9, rank: '9', name: 'Nine of Hearts', image: 'card_hearts_09.png' },
  { suit: CARD_SUITS.HEARTS, value: CARD_VALUES.TEN, card_id: '10H', base_chips: 10, rank: '10', name: 'Ten of Hearts', image: 'card_hearts_10.png' },
  { suit: CARD_SUITS.HEARTS, value: CARD_VALUES.JACK, card_id: 'JH', base_chips: 10, rank: 'j', name: 'Jack of Hearts', image: 'card_hearts_J.png' },
  { suit: CARD_SUITS.HEARTS, value: CARD_VALUES.QUEEN, card_id: 'QH', base_chips: 10, rank: 'q', name: 'Queen of Hearts', image: 'card_hearts_Q.png' },
  { suit: CARD_SUITS.HEARTS, value: CARD_VALUES.KING, card_id: 'KH', base_chips: 10, rank: 'k', name: 'King of Hearts', image: 'card_hearts_K.png' },
  { suit: CARD_SUITS.HEARTS, value: CARD_VALUES.ACE, card_id: 'AH', base_chips: 11, rank: 'a', name: 'Ace of Hearts', image: 'card_hearts_A.png' },

  // Diamonds
  { suit: CARD_SUITS.DIAMONDS, value: CARD_VALUES.TWO, card_id: '2D', base_chips: 2, rank: '2', name: 'Two of Diamonds', image: 'card_diamonds_02.png' },
  { suit: CARD_SUITS.DIAMONDS, value: CARD_VALUES.THREE, card_id: '3D', base_chips: 3, rank: '3', name: 'Three of Diamonds', image: 'card_diamonds_03.png' },
  { suit: CARD_SUITS.DIAMONDS, value: CARD_VALUES.FOUR, card_id: '4D', base_chips: 4, rank: '4', name: 'Four of Diamonds', image: 'card_diamonds_04.png' },
  { suit: CARD_SUITS.DIAMONDS, value: CARD_VALUES.FIVE, card_id: '5D', base_chips: 5, rank: '5', name: 'Five of Diamonds', image: 'card_diamonds_05.png' },
  { suit: CARD_SUITS.DIAMONDS, value: CARD_VALUES.SIX, card_id: '6D', base_chips: 6, rank: '6', name: 'Six of Diamonds', image: 'card_diamonds_06.png' },
  { suit: CARD_SUITS.DIAMONDS, value: CARD_VALUES.SEVEN, card_id: '7D', base_chips: 7, rank: '7', name: 'Seven of Diamonds', image: 'card_diamonds_07.png' },
  { suit: CARD_SUITS.DIAMONDS, value: CARD_VALUES.EIGHT, card_id: '8D', base_chips: 8, rank: '8', name: 'Eight of Diamonds', image: 'card_diamonds_08.png' },
  { suit: CARD_SUITS.DIAMONDS, value: CARD_VALUES.NINE, card_id: '9D', base_chips: 9, rank: '9', name: 'Nine of Diamonds', image: 'card_diamonds_09.png' },
  { suit: CARD_SUITS.DIAMONDS, value: CARD_VALUES.TEN, card_id: '10D', base_chips: 10, rank: '10', name: 'Ten of Diamonds', image: 'card_diamonds_10.png' },
  { suit: CARD_SUITS.DIAMONDS, value: CARD_VALUES.JACK, card_id: 'JD', base_chips: 10, rank: 'j', name: 'Jack of Diamonds', image: 'card_diamonds_J.png' },
  { suit: CARD_SUITS.DIAMONDS, value: CARD_VALUES.QUEEN, card_id: 'QD', base_chips: 10, rank: 'q', name: 'Queen of Diamonds', image: 'card_diamonds_Q.png' },
  { suit: CARD_SUITS.DIAMONDS, value: CARD_VALUES.KING, card_id: 'KD', base_chips: 10, rank: 'k', name: 'King of Diamonds', image: 'card_diamonds_K.png' },
  { suit: CARD_SUITS.DIAMONDS, value: CARD_VALUES.ACE, card_id: 'AD', base_chips: 11, rank: 'a', name: 'Ace of Diamonds', image: 'card_diamonds_A.png' },

  // Clubs
  { suit: CARD_SUITS.CLUBS, value: CARD_VALUES.TWO, card_id: '2C', base_chips: 2, rank: '2', name: 'Two of Clubs', image: 'card_clubs_02.png' },
  { suit: CARD_SUITS.CLUBS, value: CARD_VALUES.THREE, card_id: '3C', base_chips: 3, rank: '3', name: 'Three of Clubs', image: 'card_clubs_03.png' },
  { suit: CARD_SUITS.CLUBS, value: CARD_VALUES.FOUR, card_id: '4C', base_chips: 4, rank: '4', name: 'Four of Clubs', image: 'card_clubs_04.png' },
  { suit: CARD_SUITS.CLUBS, value: CARD_VALUES.FIVE, card_id: '5C', base_chips: 5, rank: '5', name: 'Five of Clubs', image: 'card_clubs_05.png' },
  { suit: CARD_SUITS.CLUBS, value: CARD_VALUES.SIX, card_id: '6C', base_chips: 6, rank: '6', name: 'Six of Clubs', image: 'card_clubs_06.png' },
  { suit: CARD_SUITS.CLUBS, value: CARD_VALUES.SEVEN, card_id: '7C', base_chips: 7, rank: '7', name: 'Seven of Clubs', image: 'card_clubs_07.png' },
  { suit: CARD_SUITS.CLUBS, value: CARD_VALUES.EIGHT, card_id: '8C', base_chips: 8, rank: '8', name: 'Eight of Clubs', image: 'card_clubs_08.png' },
  { suit: CARD_SUITS.CLUBS, value: CARD_VALUES.NINE, card_id: '9C', base_chips: 9, rank: '9', name: 'Nine of Clubs', image: 'card_clubs_09.png' },
  { suit: CARD_SUITS.CLUBS, value: CARD_VALUES.TEN, card_id: '10C', base_chips: 10, rank: '10', name: 'Ten of Clubs', image: 'card_clubs_10.png' },
  { suit: CARD_SUITS.CLUBS, value: CARD_VALUES.JACK, card_id: 'JC', base_chips: 10, rank: 'j', name: 'Jack of Clubs', image: 'card_clubs_J.png' },
  { suit: CARD_SUITS.CLUBS, value: CARD_VALUES.QUEEN, card_id: 'QC', base_chips: 10, rank: 'q', name: 'Queen of Clubs', image: 'card_clubs_Q.png' },
  { suit: CARD_SUITS.CLUBS, value: CARD_VALUES.KING, card_id: 'KC', base_chips: 10, rank: 'k', name: 'King of Clubs', image: 'card_clubs_K.png' },
  { suit: CARD_SUITS.CLUBS, value: CARD_VALUES.ACE, card_id: 'AC', base_chips: 11, rank: 'a', name: 'Ace of Clubs', image: 'card_clubs_A.png' },

  // Spades
  { suit: CARD_SUITS.SPADES, value: CARD_VALUES.TWO, card_id: '2S', base_chips: 2, rank: '2', name: 'Two of Spades', image: 'card_spades_02.png' },
  { suit: CARD_SUITS.SPADES, value: CARD_VALUES.THREE, card_id: '3S', base_chips: 3, rank: '3', name: 'Three of Spades', image: 'card_spades_03.png' },
  { suit: CARD_SUITS.SPADES, value: CARD_VALUES.FOUR, card_id: '4S', base_chips: 4, rank: '4', name: 'Four of Spades', image: 'card_spades_04.png' },
  { suit: CARD_SUITS.SPADES, value: CARD_VALUES.FIVE, card_id: '5S', base_chips: 5, rank: '5', name: 'Five of Spades', image: 'card_spades_05.png' },
  { suit: CARD_SUITS.SPADES, value: CARD_VALUES.SIX, card_id: '6S', base_chips: 6, rank: '6', name: 'Six of Spades', image: 'card_spades_06.png' },
  { suit: CARD_SUITS.SPADES, value: CARD_VALUES.SEVEN, card_id: '7S', base_chips: 7, rank: '7', name: 'Seven of Spades', image: 'card_spades_07.png' },
  { suit: CARD_SUITS.SPADES, value: CARD_VALUES.EIGHT, card_id: '8S', base_chips: 8, rank: '8', name: 'Eight of Spades', image: 'card_spades_08.png' },
  { suit: CARD_SUITS.SPADES, value: CARD_VALUES.NINE, card_id: '9S', base_chips: 9, rank: '9', name: 'Nine of Spades', image: 'card_spades_09.png' },
  { suit: CARD_SUITS.SPADES, value: CARD_VALUES.TEN, card_id: '10S', base_chips: 10, rank: '10', name: 'Ten of Spades', image: 'card_spades_10.png' },
  { suit: CARD_SUITS.SPADES, value: CARD_VALUES.JACK, card_id: 'JS', base_chips: 10, rank: 'j', name: 'Jack of Spades', image: 'card_spades_J.png' },
  { suit: CARD_SUITS.SPADES, value: CARD_VALUES.QUEEN, card_id: 'QS', base_chips: 10, rank: 'q', name: 'Queen of Spades', image: 'card_spades_Q.png' },
  { suit: CARD_SUITS.SPADES, value: CARD_VALUES.KING, card_id: 'KS', base_chips: 10, rank: 'k', name: 'King of Spades', image: 'card_spades_K.png' },
  { suit: CARD_SUITS.SPADES, value: CARD_VALUES.ACE, card_id: 'AS', base_chips: 11, rank: 'a', name: 'Ace of Spades', image: 'card_spades_A.png' }
]



// WINNING CONDITIONS 
export const WINNING_CONDITIONS = {
  ROYAL_FLUSH: {
    name: 'Royal Flush',
    description: 'A, K, Q, J, 10 of the same suit',
    mult: 8,
    rank: 10,
    level: 1
  },
  STRAIGHT_FLUSH: {
    name: 'Straight Flush',
    description: 'Five consecutive cards of the same suit',
    mult: 8,
    rank: 10,
    level: 1
  },
  FOUR_OF_A_KIND: {
    name: 'Four of a Kind',
    description: 'Four cards of the same rank',
    mult: 7,
    rank: 60,
    level: 1
  },
  FULL_HOUSE: {
    name: 'Full House',
    description: 'Three of a kind and a pair',
    mult: 4,
    rank: 40,
    level: 1
  },
  FLUSH: {
    name: 'Flush',
    description: 'Five cards of the same suit',
    mult: 4,
    rank: 35,
    level: 1
  },
  STRAIGHT: {
    name: 'Straight',
    description: 'Five consecutive cards of different suits',
    mult: 4,
    rank: 30,
    level: 1
  },
  THREE_OF_A_KIND: {
    name: 'Three of a Kind',
    description: 'Three cards of the same rank',
    mult: 3,
    rank: 30,
    level: 1
  },
  TWO_PAIR: {
    name: 'Two Pair',
    description: 'Two pairs of different ranks',
    mult: 2,
    rank: 20,
    level: 1
  },
  ONE_PAIR: {
    name: 'One Pair',
    description: 'Two cards of the same rank',
    mult: 2,
    rank: 10,
    level: 1
  },
  HIGH_CARD: {
    name: 'High Card',
    description: 'The highest card in the hand',
    mult: 1,
    rank: 5,
    level: 1
  }
}
