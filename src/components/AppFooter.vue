<template>
	<footer class="app-footer">
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
<style scoped>
.app-footer {
	display: flex;
	width: 90dvw;
	justify-content: center;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	margin: 20px auto 0;
	align-items: center;
	background-color: var(--color-background-alt, #f8f9fa);
	padding: 1rem;
	border-top: 5px solid var(--color-border);
	color: #6c757d;
}
</style>
