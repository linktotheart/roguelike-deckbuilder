<template>
	<section class="deck-of-cards">
		<!-- <play-card v-for="card in listOfCards" :isFlipped="true" :card="card" :key="card.id"></play-card> -->
		<span class="card-details">
			{{ listOfCards.length }} / {{ 52 }}
		</span>
	</section>
</template>
<script setup>
import PlayCard from './PlayCard.vue'
import { useStore } from '@/stores/cards';
import { ref, onMounted } from 'vue';

const store = useStore();
const listOfCards = ref([]);

const fetchCards = () => {
	listOfCards.value = store.getCards;
};
onMounted(() => {
	fetchCards();
});
</script>
<style scoped>
.deck-of-cards {
	display: grid;
	justify-content: center;
	position: relative;
}

.card-container {
	position: absolute;
	top: 0;
	left: 0;
}

.card-details {
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	text-align: center;
	font-size: 1.2rem;
	font-family: var(--font-pixel);
	color: var(--color-secondary, #6c757d);
}
</style>
