<template>
  <button :class="[$style.wrapper]">
    <slot></slot>
  </button>
</template>

<script setup lang="ts"></script>

<style lang="scss" module>
.wrapper {
}
</style>
