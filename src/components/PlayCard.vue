<template>
  <article class="card-container" :class="{ flipped: isFlipped }"
  @click="toggleFlip" @mouseenter="handleEffect" @mouseleave="handleEffect">
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

const props = defineProps({
  card: {
	type: Object,
	required: true
  }
});

const isFlipped = ref(false);

const getCardImage = `./images/${props.card.image}`;
const getCardBackImage = './images/card_back.png';

console.log('Card Image URL:', getCardImage);
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
}
.card-container.flipped .card-front {
  transform: rotateY(180deg);
}
.card-container.flipped .card-back {
  transform: rotateY(0deg);
}
.card-front, .card-back {
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
.front-img, .back-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card-front img, .card-back img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>