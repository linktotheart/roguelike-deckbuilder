<template>
	<article class="card-container" :class="{
		'flipped': isFlipped,
		'heart': props.card.suit === CARD_SUITS.HEARTS,
		'spade': props.card.suit === CARD_SUITS.SPADES,
		'diamond': props.card.suit === CARD_SUITS.DIAMONDS,
		'club': props.card.suit === CARD_SUITS.CLUBS
	}" @click="toggleFlip" @mouseenter="handleEffect" @mouseleave="handleEffect">
		<div class="card-front">
			<img :src="getCardImage" alt="front Icon" class="front-img">
		</div>
		<div class="card-back">
			<img :src="getCardBackImage" alt="back Icon" class="back-img">
		</div>
	</article>
</template>

<script setup>
import { ref } from 'vue';
import { CARD_SUITS } from '@/helpers/cards.js';

const props = defineProps({
	card: {
		type: Object,
		required: true
	}
});

const isFlipped = ref(false);

const getCardImage = `./images/${props.card.image}`.replace(/\\/g, '/'); // Ensure correct path format for images
const getCardBackImage = './images/card_back.png';

console.log('Card Image URL:', props.card);
const toggleFlip = () => {
	isFlipped.value = !isFlipped.value;
};

const handleEffect = (event) => {
	if (event.type === 'mouseenter') {
		// Add hover effect logic here if needed
		console.log('Mouse entered the card');

	} else if (event.type === 'mouseleave') {
		// Remove hover effect logic here if needed
	}
};

</script>

<style scoped>
.card-container {
	width: 100px;
	height: 150px;
	position: relative;
	perspective: 1000px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	transition: all 0.15s ease;
}

.diamond {
	filter: hue-rotate(300deg);
}

.spade {
	filter: sepia(0.45) hue-rotate(90deg);
}

.heart {
	filter: hue-rotate(330deg);
}

.card-container:hover {
	cursor: pointer;
	box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
	transform: scale(1.05);
}

.card-container.flipped .card-front {
	transform: rotateY(180deg);
}

.card-container.flipped .card-back {
	transform: rotateY(0deg);
}

.flipped {
	filter: none !important;
}

.card-front,
.card-back {
	width: 100%;
	height: 100%;
	position: absolute;
	backface-visibility: hidden;
	aspect-ratio: 2 / 3;
	transition: transform 0.6s;
	/* pixel art  */
	image-rendering: pixelated;
}

.card-front {
	z-index: 2;
	transform: rotateY(0deg);
}

.card-back {
	transform: rotateY(180deg);
}

.front-img,
.back-img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.card-front img,
.card-back img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
</style>