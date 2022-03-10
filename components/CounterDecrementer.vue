<template>
  <button @click="decCounter" class="border-2 border-yellow-100 rounded-l-full py-2 px-4 duration-200 hover:bg-yellow-100 hover:text-violet-800">−</button>
</template>

<script setup>
import { useStore } from '~~/store';

const store = useStore();

function decCounter () {
  if (0 < store.counter) {
    store.$patch({
      counter: store.counter - 1,
    })
  }
}
</script>
