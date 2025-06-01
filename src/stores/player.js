import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { WINNING_CONDITIONS } from '@/helpers/cards';

export const usePlayerStore = defineStore('player', () => {
	const maxPlayHands = 5;
	const maxDiscards = 4;

	const winningConditions = ref({ ...WINNING_CONDITIONS });
	const isGameOver = ref(false);
	const playerHands = ref(maxPlayHands);
	const playerDiscards = ref(maxDiscards);
	const playerCards = ref([]);

	// getters
	const playerHandCount = computed(() => playerHands.value);
	const maxPlayerHands = computed(() => maxPlayHands);
	const maxPlayerDiscards = computed(() => maxDiscards);

	// actions
	const decreasePlayerHands = (count = 1) => {
		if (playerHands.value > 0) {
			playerHands.value = playerHands.value - count;
			if (playerHands.value < 0) {
				playerHands.value = 0;
				isGameOver.value = true;
			}
		}
	}

	const decreaseDiscards = (count = 1) => {
		if (playerDiscards.value > 0) {
			playerDiscards.value -= count;
			if (playerDiscards.value < 0) {
				playerDiscards.value = 0;
			}
		}
	}

	const setPlayerCards = (cards) => {
		playerCards.value = cards;
	}

	const evaluateHand = (cards) => {
		const rankCount = {};
		const suitCount = {};
		const rankValues = [];

		cards.forEach(card => {
			const rank = parseInt(card.sort_order); // assumes rank is "2"–"10", "11"=J, "12"=Q, etc.
			console.log(`Evaluating card: ${card} with rank: ${rank}`);

			rankValues.push(rank);
			rankCount[rank] = (rankCount[rank] || 0) + 1;
			suitCount[card.suit] = (suitCount[card.suit] || 0) + 1;
		});

		// Sort ranks to check for straight
		rankValues.sort((a, b) => a - b);

		const isSequential = (ranks) => {
			for (let i = 0; i < ranks.length - 1; i++) {
				if (ranks[i + 1] - ranks[i] !== 1) return false;
			}
			return true;
		};

		// Check for regular straight
		const isStraight = (rankValues.length === 5 &&
			isSequential(rankValues)) ||
			(rankValues.includes(14) && isSequential([1, ...rankValues.slice(0, 4)]));

		const isFlush = Object.values(suitCount).some(count => count === 5);

		const counts = Object.values(rankCount);
		const hasFour = counts.includes(4);
		const hasThree = counts.includes(3);
		const pairCount = counts.filter(c => c === 2).length;

		const isRoyal =
			rankValues.includes(10) &&
			rankValues.includes(11) &&
			rankValues.includes(12) &&
			rankValues.includes(13) &&
			rankValues.includes(14); // 10, J, Q, K, A

		if (isRoyal && isFlush) return winningConditions.value.ROYAL_FLUSH;
		if (isStraight && isFlush) return winningConditions.value.STRAIGHT_FLUSH;
		if (hasFour) return winningConditions.value.FOUR_OF_A_KIND;
		if (hasThree && pairCount === 1) return winningConditions.value.FULL_HOUSE;
		if (isFlush) return winningConditions.value.FLUSH;
		if (isStraight) return winningConditions.value.STRAIGHT;
		if (hasThree) return winningConditions.value.THREE_OF_A_KIND;
		if (pairCount === 2) return winningConditions.value.TWO_PAIR;
		if (pairCount === 1) return winningConditions.value.ONE_PAIR;

		return winningConditions.value.HIGH_CARD;
	}


	return {
		playerHands,
		playerHandCount,
		maxPlayerHands,
		winningConditions,
		maxPlayerDiscards,
		decreaseDiscards,
		evaluateHand,
		setPlayerCards,
		decreasePlayerHands,
		isGameOver
	};
})
