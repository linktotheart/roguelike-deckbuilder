<template>
	<dialog :id="modalId" class="modal" ref="myModal">
		<div class="modal-box">
			<h3 class="text-lg font-bold text-center" v-if="title && title !== ''">{{ title }}</h3>
			<p class="py-4 text-center">
				<slot>
					Are you sure you want to proceed? This action cannot be undone.
				</slot>
			</p>
			<div class="modal-action justify-center">
				<form method="dialog">
					<button class="btn" @click="closeModal">Close</button>
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
	console.log(myModal.value)
	if (modal) {
		if (props.isOpen) {
			modal.showModal();
		} else {
			modal.close();
		}
	}
});
</script>