<template>
	<button class="btn" @click="$emit('click')">
		<slot>
			<span class="uppercase font-pixel tracking-widest">
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
<style scoped></style>