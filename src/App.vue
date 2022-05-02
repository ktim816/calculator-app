<template>
  <main :class="[$style.wrapper]">
    <CalculatorApp />
  </main>
</template>

<script setup lang="ts">
import CalculatorApp from '@components/CalculatorApp.vue';
</script>

<style lang="scss" module>
.wrapper {
  @apply flex justify-center items-center min-h-screen sm:p-8 p-6;
}
</style>
