<template>
  <main class="main-container p-8 bg-base-200/50">
    <slot />
  </main>
</template>

<script setup></script>

<style scoped>
.main-container {
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  flex: 1;
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
