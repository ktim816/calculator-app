<template>
  <button
    :type="type"
    :data-key="_key"
    :class="[[$style.wrapper], [$style[`wrapper--${theme}`]]]"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import {ButtonHTMLAttributes, withDefaults} from 'vue';

const props = withDefaults(
  defineProps<{
    _key: string;
    type?: ButtonHTMLAttributes['type'];
    theme?: 'light' | 'dark' | 'primary';
  }>(),
  {
    type: 'button',
    theme: 'light',
  }
);
</script>

<style lang="scss" module>
button.wrapper {
  @apply relative uppercase transform transition overflow-hidden;

  &,
  &::before {
    @apply sm:rounded-[10px] rounded-[5px] transform;
  }

  &::before {
    content: '';
    @apply absolute bottom-0 left-0 w-full h-full sm:rounded-[10px] transition-transform;
  }

  &--light {
    @apply sm:text-3xl text-2xl sm:py-3 py-3.5 px-3 bg-theme-1-white-chocolate text-theme-1-outer-space;

    &:hover {
      @apply bg-white;
    }

    &::before {
      box-shadow: inset 0px -4px 0px #b3a497;
    }

    @include theme(theme-2) {
      @apply bg-theme-2-platinum text-theme-2-dark-charcoal;

      &::before {
        box-shadow: inset 0px -4px 0px #a79e91;
      }
    }

    @include theme(theme-3) {
      @apply bg-theme-3-russian-violet text-theme-3-banana-yellow;

      &:hover {
        @apply bg-theme-3-dark-grape;
      }

      &::before {
        box-shadow: inset 0px -4px 0px #881c9e;
      }
    }
  }

  &--dark {
    @apply sm:text-xl text-md sm:p-5 py-5 px-2.5 bg-theme-1-dark-blue-gray text-white;

    &:hover {
      @apply bg-theme-1-maximum-blue-purple;
    }

    &::before {
      box-shadow: inset 0px -4px 0px #414e73;
    }

    @include theme(theme-2) {
      @apply bg-theme-2-teal-blue;

      &:hover {
        @apply bg-theme-2-moonstone-blue;
      }

      &::before {
        box-shadow: inset 0px -4px 0px #1b6066;
      }
    }

    @include theme(theme-3) {
      @apply bg-theme-3-indigo;

      &:hover {
        @apply bg-theme-3-grape;
      }

      &::before {
        box-shadow: inset 0px -4px 0px #be15f4;
      }
    }
  }

  &--primary {
    @apply sm:text-xl text-md sm:p-5 py-6 px-2.5 bg-theme-1-persian-red text-white;

    &:hover {
      @apply bg-theme-1-bittersweet;
    }

    &::before {
      box-shadow: inset 0px -4px 0px #93261a;
    }

    @include theme(theme-2) {
      @apply bg-theme-2-burnt-orange;

      &:hover {
        @apply bg-theme-2-mango-tango;
      }

      &::before {
        box-shadow: inset 0px -4px 0px #873901;
      }
    }

    @include theme(theme-3) {
      @apply bg-theme-3-dark-turquoise;

      &:hover {
        @apply bg-theme-3-waterspout;
      }

      &::before {
        box-shadow: inset 0px -4px 0px #6cf9f1;
      }
    }
  }

  :root[data-key='1'] &[data-key='1'],
  :root[data-key='2'] &[data-key='2'],
  :root[data-key='3'] &[data-key='3'],
  :root[data-key='4'] &[data-key='4'],
  :root[data-key='5'] &[data-key='5'],
  :root[data-key='6'] &[data-key='6'],
  :root[data-key='7'] &[data-key='7'],
  :root[data-key='8'] &[data-key='8'],
  :root[data-key='9'] &[data-key='9'],
  :root[data-key='0'] &[data-key='0'],
  :root[data-key='+'] &[data-key='+'],
  :root[data-key='-'] &[data-key='-'],
  :root[data-key='*'] &[data-key='*'],
  :root[data-key='/'] &[data-key='/'],
  :root[data-key='.'] &[data-key='.'],
  :root[data-key='Backspace'] &[data-key='Backspace'],
  :root[data-key='Delete'] &[data-key='Delete'],
  :root[data-key='Enter'] &[data-key='Enter'],
  &:active {
    @apply translate-y-0.5;

    &::before {
      @apply translate-y-0.5;
    }
  }
}
</style>
