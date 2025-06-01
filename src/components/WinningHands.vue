<template>
	<div class="section">
		<ul class="list">
			<li v-for="win in winningConditions"
				class="flex text-left flex-col text-sm py-2 mb-1 border-secondary border-b" :key="win">
				<div class="text-primary mb-1 flex items-center text-pretty font-bold bold">
					{{ win.name }}
					<div class="tooltip tooltip-secondary" :data-tip="win.description">
						<button class="btn ml-4 btn-xs btn-accent btn-outline btn-circle">!</button>
					</div>
					<span class="text-info text-base ml-auto">
						{{ win.mult }} x {{ win.rank }}
					</span>
				</div>
				<!-- <small class="text-left font-mono text-sm flex">
					{{ win.description }} <span class="ml-auto">
					</span> -->
				<div class="flex gap-2">
					<span class="kbd " v-for="example in win.example.split(',')" :key="example">
						{{ example }}
					</span>
				</div>
			</li>
		</ul>
	</div>
</template>
<script setup>
import { WINNING_CONDITIONS } from '@/helpers/cards.js'
import { ref } from "vue"

const winningConditions = ref(WINNING_CONDITIONS)
</script>