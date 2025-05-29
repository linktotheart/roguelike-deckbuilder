<template>
  <header class="app-header">
    <h1 class="app-title text-center">Zoker</h1>
  </header>
</template>

<script setup>
// No script logic needed for this simple header
</script>

<style scoped>
.app-header {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background: var(--color-background, #222);
  color: var(--color-on-background, #fff);
  border-bottom: 5px solid var(--color-border, #444);
  border-top: 5px solid var(--color-border, #444);
  box-shadow: 0 2px px rgba(0, 0, 0, 0.08);
}

.app-title {
  font-size: 20px;
  text-align: center;
  flex: 1;
  font-family: var(--font-pixel);
}
</style>
