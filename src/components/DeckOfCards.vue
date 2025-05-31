<template>
	<div class="stack w-24 h-24 shadow">
		<div class="border-base-content card bg-base-100 border text-center">
			<div class="card-body text-center text-base-content px-0 text-sm">
				<div class="flex justify-center gap-1">
					<span class="countdown text-md items-center justify-center">
						<span :style="`--value: ${listOfCards.length};`" aria-live="polite"
							:aria-label="listOfCards.length">
							{{ listOfCards.length }}
						</span>
					</span>
					<small>/52</small>
				</div>
				<small>Cards</small>
			</div>
		</div>
		<div class="border-base-content card bg-base-200 border text-center">
			<div class="card-body">B</div>
		</div>
		<div class="border-base-content card bg-base-100 border text-center">
			<div class="card-body">C</div>
		</div>
	</div>
</template>
<script setup>
import { useStore } from '@/stores/cards';
import { storeToRefs } from 'pinia';
import { ref, onMounted } from 'vue';

const store = useStore();
const listOfCards = storeToRefs(store).cards;

// const fetchCards = () => listOfCards.value = store.getCards;
onMounted(() => {
	// fetchCards();
});
</script>
<style scoped></style>
