<template>
	<div class="my-8">
		<section class="badge badge-secondary badge-outline py-4 capitalize px-6">
			Help me
		</section>
	</div>
</template>
<script setup>
const props = defineProps({
	selectedCards: {
		type: Array,
		required: true
	}
})
</script>