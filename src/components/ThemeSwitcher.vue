<template>
  <div :class="[$style.wrapper]">
    <div :class="[$style.label]">Theme</div>
    <div :class="[$style.toggle]">
      <div :key="_theme" v-for="_theme in themes" class="relative">
        <div :class="[$style.number]">{{ _theme }}</div>
        <input
          type="radio"
          name="toggle"
          :class="[
            [$style.button],
            {
              [$style['button--active']]: _theme === theme,
            },
          ]"
          @click="changeTheme(_theme)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref, onMounted} from 'vue';

const themes = ref(['1', '2', '3']);
const theme = ref(localStorage.getItem('theme') || themes.value[0]);

function changeTheme(_theme: string) {
  theme.value = _theme;
  localStorage.setItem('theme', _theme);
  const htmlElement = document.documentElement;
  htmlElement.dataset.theme = `theme-${_theme}`;
}

onMounted(() => {
  changeTheme(theme.value);
});
</script>

<style lang="scss" module>
.wrapper {
  @apply flex items-center space-x-5 pt-6;
}
.label,
.number {
  @apply text-white text-xs;

  @include theme(theme-2) {
    @apply text-theme-2-dark-charcoal;
  }

  @include theme(theme-3) {
    @apply text-theme-3-banana-yellow;
  }
}
.label {
  @apply uppercase tracking-wider;
}
.toggle {
  @apply flex justify-center space-x-1.5 p-[5px] bg-theme-1-yankees-blue rounded-full;

  @include theme(theme-2) {
    @apply bg-theme-2-american-silver;
  }

  @include theme(theme-3) {
    @apply bg-theme-3-dark-purple;
  }
}

.number {
  @apply absolute -top-6 left-2/4 transform -translate-x-2/4;
}

.button {
  @apply block w-4 h-4 appearance-none bg-theme-1-dark-blue-gray rounded-full opacity-0 cursor-pointer transition-opacity;

  @include theme(theme-2) {
    @apply bg-theme-2-bright-gray;
  }

  @include theme(theme-3) {
    @apply bg-theme-3-dark-grape;
  }

  &:hover {
    @apply opacity-50;
  }

  &--active,
  &--active:hover {
    @apply bg-theme-1-persian-red opacity-100;

    @include theme(theme-2) {
      @apply bg-theme-2-burnt-orange;
    }

    @include theme(theme-3) {
      @apply bg-theme-3-dark-turquoise;
    }
  }
}
</style>
