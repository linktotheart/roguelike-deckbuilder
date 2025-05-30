<template>
  <main class="main-container">
    <slot />
  </main>
</template>

<script setup></script>

<style scoped>
.main-container {
  max-width: 600px;
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  border-radius: 30px;
  background-color: var(--color-background);
  flex: 1;
  border: 10px solid var(--color-border);
  margin-top: 50px;
  margin-bottom: 50px;
  box-shadow: 0 4px 50px var(--color-dark);
}
</style>
