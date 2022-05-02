<template>
  <form ref="form" :class="[$style.form]" @submit.prevent="calculateValue">
    <div :class="[$style.header]">
      <h1>calc</h1>
      <ThemeSwitcher />
    </div>
    <div class="space-y-6">
      <input
        type="text"
        ref="display"
        v-model="input"
        :class="[$style.display]"
        @keydown="handleKeydown"
        @keyup="handleKeyup"
        @keypress="handleKeyPress"
        @keypress.enter="calculateValue"
      />
      <div :class="[$style.keys, $style.layout]">
        <div :class="[[$style.layout], 'grid-cols-4']">
          <CalculatorKey
            :key="key"
            :_key="key"
            v-for="key in keys[0]"
            @click="handleChange(key)"
          >
            {{ key }}
          </CalculatorKey>
          <CalculatorKey _key="Backspace" theme="dark" @click="handleDelete">
            Del
          </CalculatorKey>
          <CalculatorKey
            :key="key"
            :_key="key"
            v-for="key in keys[1]"
            @click="handleChange(key)"
          >
            {{ key === '*' ? '✕' : key }}
          </CalculatorKey>
        </div>
        <div :class="[[$style.layout], 'grid-cols-2']">
          <CalculatorKey _key="Delete" theme="dark" @click="handleReset"
            >Reset</CalculatorKey
          >
          <CalculatorKey _key="Enter" type="submit" theme="primary"
            >=</CalculatorKey
          >
        </div>
      </div>
    </div>
  </form>
</template>

<script lang="ts" setup>
import {defineComponent, ref, onUpdated, onMounted} from 'vue';
import ThemeSwitcher from '@components/ThemeSwitcher.vue';
import CalculatorKey from '@components/CalculatorKey.vue';
import {calculate, onlyNumberKey} from '@helpers/common';

// State
const input = ref('');
const isDown = ref(false);
const form = ref<HTMLFormElement>();
const display = ref<HTMLInputElement>();
const operations = ['+', '-', '*', '/', '.'];
const keys = [
  ['7', '8', '9'],
  ['4', '5', '6', '+', '1', '2', '3', '-', '.', '0', '/', '*'],
];

// Hooks
onMounted(focusDisplay);
onUpdated(focusDisplay);

// Functions
function focusDisplay() {
  display.value?.focus();
}

function handleReset() {
  input.value = '';
}

function handleChange(key: string) {
  if (/[0-9]/g.test(key)) {
    input.value += key;
  }

  operationCheck(key);
}

function calculateValue() {
  input.value = calculate(input.value);
}

function handleDelete() {
  input.value = input.value.slice(0, -1);
}

function handleKeydown(e: KeyboardEvent) {
  if (isDown.value) return;
  if (['Shift', 'Control', 'Alt'].includes(e.key)) {
    return;
  }

  isDown.value = true;

  document.documentElement.dataset.key = e.key;

  switch (e.key) {
    case 'Delete':
      return handleReset();
  }
}

function handleKeyup(e: KeyboardEvent) {
  isDown.value = false;
  delete document.documentElement.dataset.key;
}

function handleKeyPress(e: KeyboardEvent) {
  if (onlyNumberKey(e)) return;
  if (!input.value) return;
  operationCheck(e.key);
}

function operationCheck(key: string) {
  if (operations.includes(key)) {
    const len = input.value.length;
    const matchNums = input.value.match(/[+-]?\d+(\.\d+)?/g);

    if (matchNums) {
      const lastNum = matchNums[matchNums.length - 1];
      console.log(lastNum);
      const isFloatNum = !Number.isInteger(+lastNum);

      if (isFloatNum && key === '.') return;
    }

    if (!operations.includes(input.value[len - 1])) {
      input.value += key;
    }
  }
}
</script>

<style lang="scss" module>
.form {
  @apply sm:max-w-[540px] max-w-[327px];
}

.display {
  @apply rounded-[10px] w-full text-white sm:text-5xl text-3xl tracking-tight text-right outline-none sm:p-9 p-[26px] bg-theme-1-dark-gunmetal;

  @include theme(theme-2) {
    @apply bg-theme-2-bright-gray text-theme-2-dark-charcoal;
  }

  @include theme(theme-3) {
    @apply bg-theme-3-dark-purple text-theme-3-banana-yellow;
  }
}

.layout {
  @apply grid sm:gap-y-7 sm:gap-x-6 gap-y-[18px] gap-x-3.5;
}

.header {
  @apply flex items-end justify-between sm:mb-8 mb-9;
}

.keys {
  @apply rounded-[10px] sm:p-8 p-6 bg-theme-1-yankees-blue;

  @include theme(theme-2) {
    @apply bg-theme-2-american-silver;
  }

  @include theme(theme-3) {
    @apply bg-theme-3-dark-purple;
  }
}
</style>
