<template>
	<dialog :id="modalId" class="modal" ref="myModal">
		<div class="modal-box max-w-2xl">
			<h3 class="text-xl font-bold text-center" v-if="title && title !== ''">{{ title }}</h3>
			<p class="py-4 text-center">
				<slot>
					Are you sure you want to proceed? This action cannot be undone.
				</slot>
			</p>
			<div class="modal-action  w-full justify-center">
				<form method="dialog" class="flex w-full">
					<button class="btn btn-wide btn-soft mx-auto btn-warning" @click="closeModal">Close</button>
				</form>
			</div>
		</div>
	</dialog>
</template>
<script setup>
import { defineProps, defineEmits, onMounted, ref } from 'vue';
const props = defineProps({
	title: {
		type: String,
		default: ''
	},
	modalId: {
		type: String,
		default: 'app-modal-dialog'
	},
	isOpen: {
		type: Boolean,
		default: false
	}
});

const myModal = ref(null)
const emit = defineEmits(['close']);

const closeModal = () => {
	const modal = document.getElementById(props.modalId);
	if (modal) {
		modal.close();
	}
	emit('close');
};
onMounted(() => {
	const modal = document.getElementById(props.modalId);
	if (modal) {
		if (props.isOpen) {
			modal.showModal();
		} else {
			modal.close();
		}
	}
});
</script>