<template>
	<footer
		class="app-footer flex justify-center gap-4 items-center bg-base-300 shadow-lg rounded-4xl p-4 rounded-b-none">
		<slot />
	</footer>
</template>

<script setup>
defineProps({
	listOfCards: {
		type: Array,
		default: () => []
	}
})
</script>
<style scoped></style>
