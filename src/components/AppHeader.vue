<template>
  <header class="app-header relative flex py-4 px-10 items-center bg-base-300 shadow-lg rounded-b-4xl">
    <h1 class="flex-grow-1 text-lg text-center">Zoker</h1><play-button class="absolute right-4 btn btn-secondary"
      text="@" @click="$emit('restart')"></play-button>
  </header>
</template>

<script setup>
import PlayButton from './PlayButton.vue';
defineEmits(['restart']);
</script>

<style scoped></style>
