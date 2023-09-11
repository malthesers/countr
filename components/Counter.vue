<template>
  <div @wheel.passive="scrollCounter" class="flex justify-between">
    <CrementerCounterDecrementer/>
    <CrementerCounterDisplay/>
    <CrementerCounterIncrementer/>
  </div>
</template>

<script setup>
import { useCounterStore } from '~~/store';
const counterStore = useCounterStore();

function scrollCounter (e) {
  // Only if shift was not held to allow scrolling through higher numbers
  if (!e.shiftKey) {
    if (e.deltaY < 0) {
      counterStore.$patch({
        counter: counterStore.counter + 1
      })
    }

    if (e.deltaY > 0) {
      counterStore.$patch({
        counter: counterStore.counter - 1
      })
    }
  }
}
</script>