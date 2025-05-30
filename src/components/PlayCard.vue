<template>
	<article class="card-container" :class="{
		'flipped': isFlipped,
		'selected': isSelected,
		'heart': props.card.suit === CARD_SUITS.HEARTS,
		'spade': props.card.suit === CARD_SUITS.SPADES,
		'diamond': props.card.suit === CARD_SUITS.DIAMONDS,
		'club': props.card.suit === CARD_SUITS.CLUBS
	}" @mousemove="handleEffect" @mouseleave="handleEffect" @click="$emit('select', props.card)">
		<div class="card-front">
			<img :src="getCardImage" alt="front Icon" class="front-img">
		</div>
		<div class="card-back">
			<img :src="getCardBackImage" alt="back Icon" class="back-img">
		</div>
	</article>
</template>

<script setup>
import { CARD_SUITS } from '@/helpers/cards.js';

const props = defineProps({
	card: {
		type: Object,
		required: true
	},
	isFlipped: {
		type: Boolean,
		default: false
	},
	isSelected: {
		type: Boolean,
		default: false
	}
});

// const isFlipped = ref(false);

const getCardImage = `./images/${props.card.image}`.replace(/\\/g, '/'); // Ensure correct path format for images
const getCardBackImage = './images/card_back.png';

// const toggleFlip = () => {
// 	isFlipped.value = !isFlipped.value;
// };

const handleEffect = (event) => {
	let cardContainer = event.currentTarget;
	if (!cardContainer) return;
	const rotFactor = 30;
	if (event.type === 'mousemove') {
		let rect = cardContainer.getBoundingClientRect();
		let rotateX = ((event.clientY - rect.top) / rect.height - 0.75) * rotFactor;
		let rotateY = ((event.clientX - rect.left) / rect.width - 0.5) * rotFactor;
		cardContainer.style.transform = `scale(1.05) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

	} else if (event.type === 'mouseleave') {
		cardContainer.style.transform = 'scale(1) rotateX(0deg) rotateY(0deg)';
	}
};

</script>

<style scoped>
.card-container {
	width: 120px;
	height: 150px;
	opacity: 1;
	position: relative;
	perspective: 2000px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	transition: all 0.15s ease;
	transform: scale(1) rotateX('15deg') rotateY('15deg');
}

.card-container:hover {
	cursor: pointer;
	box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
	transform: scale(1.05);
}

.card-container.selected {
	box-shadow: 0 4px 16px var(--color-primary, #007bff);
	bottom: 20px;
	z-index: 100;
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