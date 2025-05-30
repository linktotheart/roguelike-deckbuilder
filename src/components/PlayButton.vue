<template>
	<button class="play-button" @click="$emit('click')">
		<slot>
			<span class="play-text font-pixel">
				{{ text }}
			</span>
		</slot>
	</button>
</template>
<script setup>
defineProps({
	text: {
		type: String,
		default: 'Play'
	}
});
defineEmits(['click']);
</script>
<style scoped>
button.play-button {
	background: var(--color-accent);
	font-family: inherit;
	padding: 10px 20px;
	font-size: 14px;
	border: 4px solid var(--color-dark);
	border-radius: 50px;
	box-shadow: 4px 4px;
	cursor: pointer;
}

button.large {
	font-size: 16px;
	padding: 12px 24px;
}

button.play-button.red {
	background: var(--color-error);
}

button.play-button.pink {
	background: var(--color-secondary);
}

button.play-button.green {
	background: var(--color-highlight);
}

button.play-button.blue {
	background: var(--color-primary);
}

button.play-button:hover {
	transform: translate(-0.05em, -0.05em);
	box-shadow: 5px 5px;
}

button.play-button:active {
	transform: translate(0.05em, 0.05em);
	box-shadow: 2px 2px;
}
</style>