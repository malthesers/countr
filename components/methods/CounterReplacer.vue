<template>
  <div class="h-[68px] flex justify-between mt-4">
    <button @click="replaceCounter('-')" class="grid place-content-center border-2 border-yellow-100 rounded-l-full py-2 px-4 duration-200 hover:bg-yellow-100 hover:text-violet-800"><span>−</span></button>
    <input v-model="num" class="border-y-2 border-yellow-100 bg-violet-800 w-full text-center" type="number" min="0" placeholder="0">
    <button @click="replaceCounter('+')" class="grid place-content-center border-2 border-yellow-100 rounded-r-full py-2 px-4 duration-200 hover:bg-yellow-100 hover:text-violet-800"><span>+</span></button>
  </div>
</template>

<script setup>
import { useStore } from '~~/store';
const store = useStore();
const num = ref();

function replaceCounter (method) {
  if (num.value === undefined) return
  
  let newCounter;
  if (method === '-') {
    newCounter = store.counter - num.value
    if (newCounter < 0) newCounter = 0
  }
  if (method === '+') {
    newCounter = store.counter + num.value
    }

  store.$state = {
    counter: newCounter
  };
}
</script>

<style scoped>
input, input:hover, input:focus, input:focus-visible {
  outline: none;
}

input::-webkit-inner-spin-button {
  display: none;
}
</style>