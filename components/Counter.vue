<template>
  <div @wheel="scrollCounter" class="flex justify-between">
    <CrementerCounterDecrementer/>
    <CrementerCounterDisplay/>
    <CrementerCounterIncrementer/>
  </div>
</template>

<script setup>
import { useStore } from '~~/store';
const store = useStore();

function scrollCounter (e) {  
  if (e.deltaY < 0) {
    store.$patch({
      counter: store.counter + 1
    })
  }

  if (e.deltaY > 0 && store.counter > 0) {
    store.$patch({
      counter: store.counter - 1
    })
  }
}
</script>