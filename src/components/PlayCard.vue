<template>
	<div class="tooltip ">
		<span class="tooltip-content px-4 text-xs font-pixel tracking-widest" v-if="props.card">
			{{ props.card.name }}
		</span>
		<article class="card relative select-none w-20 h-34 transition-all ease-in-out filter origin-center 
				rounded-sm duration-150 hover:shadow-lg shadow shadow-info-content drop-shadow-info transform scale-100" :class="{
					flipped: isFlipped,
					'z-[100] drop-shadow-lg bottom-2 scale-105 shadow': isSelected,
					'heart hue-rotate-[320deg]': props.card.suit === CARD_SUITS.HEARTS,
					'spade hue-rotate-60': props.card.suit === CARD_SUITS.SPADES,
					'diamond hue-rotate-180': props.card.suit === CARD_SUITS.DIAMONDS,
					club: props.card.suit === CARD_SUITS.CLUBS
				}" @mousemove="handleEffect" @mouseleave="handleEffect" @click="$emit('select', props.card)">
			<figure
				class="card-face mx cursor-pointer absolute w-full h-full transition-transform duration-500 ease-in-out card-front z-20">
				<img :src="getCardImage" alt="front Icon" class="w-full h-full object-cover" />
			</figure>
			<figure
				class="card-face mx cursor-pointer absolute w-full h-full transition-transform duration-500 ease-in-out card-back">
				<img :src="getCardBackImage" alt="back Icon" class="w-full h-full object-cover" />
			</figure>
		</article>
	</div>
</template>

<script setup>
import { CARD_SUITS } from '@/helpers/cards.js';

const props = defineProps({
	card: Object,
	isFlipped: Boolean,
	isSelected: Boolean
});

const getCardImage = `./images/${props.card.image}`.replace(/\\/g, '/');
const getCardBackImage = './images/card_back.png';

const handleEffect = (event) => {
	const card = event.currentTarget;
	if (!card) return;
	const rotFactor = 30;
	if (event.type === 'mousemove') {
		const rect = card.getBoundingClientRect();
		const rotateX = ((event.clientY - rect.top) / rect.height - 0.75) * rotFactor;
		const rotateY = ((event.clientX - rect.left) / rect.width - 0.5) * rotFactor;
		card.style.transform = `scale(1.05) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
	} else if (event.type === 'mouseleave') {
		card.style.transform = 'scale(1) rotateX(0deg) rotateY(0deg)';
	}
};
</script>

<style scoped>
.card {
	perspective: 1000px;
}

.card-face {
	position: absolute;
	backface-visibility: hidden;
	image-rendering: pixelated;
}

.card-front {
	transform: rotateY(0deg);
}

.card-back {
	transform: rotateY(180deg);
}

.flipped .card-front {
	transform: rotateY(180deg);
}

.flipped .card-back {
	transform: rotateY(0deg);
}
</style>
