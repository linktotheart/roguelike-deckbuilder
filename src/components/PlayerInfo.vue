<template>
	<div class="my-10">
		<section class="badge relative badge-secondary badge-outline rounded-full py-5 text-sm capitalize px-20">
			<transition name="fade" mode="out-in">
				<span class="text-secondary font-pixel tracking-widest" v-if="selectedNumber === 0">
					No cards selected
				</span>
				<span class="font-pixel text-primary tracking-widest" v-else>
					{{ getPlayerWinningRank.name }}
				</span>
			</transition>

			<button class="btn absolute right-1 top-1 btn-circle btn-warning btn-sm btn-soft"
				@click="$emit('show-help')">
				?
			</button>
		</section>
	</div>
</template>
<script setup>
import { computed } from 'vue';
import { usePlayerStore } from '@/stores/player'

const playerStore = usePlayerStore();

const props = defineProps({
	selectedCards: {
		type: Array,
		required: true
	}
})
defineEmits(['show-help']);

const selectedNumber = (computed(() => props.selectedCards.length || 0))
const getPlayerWinningRank = computed(() => playerStore.evaluateHand(props.selectedCards));
</script>
<style scoped>
.badge {
	transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.35s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
	opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.35s ease-in-out;
}
</style>