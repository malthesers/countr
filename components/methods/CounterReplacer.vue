<template>
  <div class="h-[68px] flex justify-between mt-4">
    <button @click="subtractCounter" class="grid place-content-center border-2 border-yellow-100 rounded-l-full py-2 px-4 duration-200 hover:bg-yellow-100 hover:text-violet-800"><span>−</span></button>
    <input v-model="num" class="border-y-2 border-yellow-100 bg-violet-800 w-full text-center" type="number" min="0" placeholder="0">
    <button @click="addCounter" class="grid place-content-center border-2 border-yellow-100 rounded-r-full py-2 px-4 duration-200 hover:bg-yellow-100 hover:text-violet-800"><span>+</span></button>
  </div>
</template>

<script setup>
import { useCounterStore } from '~~/store';
const counterStore = useCounterStore();
const num = ref();

function subtractCounter () {
  counterStore.$patch((state) => {
    state.counter = state.counter - (num.value || 0)
  })
}

function addCounter () {
  counterStore.$patch((state) => {
    state.counter = state.counter + (num.value || 0)
  })
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