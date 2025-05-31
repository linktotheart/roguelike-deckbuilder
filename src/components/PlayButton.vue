<template>
	<button class="btn" @click="$emit('click')" :disabled="disabled">
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
	},
	disabled: {
		type: Boolean,
		default: false
	},
});
defineEmits(['click']);
</script>
<style scoped></style>