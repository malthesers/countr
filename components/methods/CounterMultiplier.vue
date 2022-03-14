<template>
  <div class="h-[68px] w-full mt-4 text-3xl rounded-full grid grid-cols-3">
    <button @click="changeMethod(1)" :class="{ 'bg-yellow-100 text-violet-800' : store.method === 1}" class="border-2 border-yellow-100 rounded-l-full duration-200 hover:bg-yellow-100 hover:text-violet-800">x1</button>
    <button @click="changeMethod(2)" :class="{ 'bg-yellow-100 text-violet-800' : store.method === 2}" class="border-y-2 border-yellow-100 duration-200 hover:bg-yellow-100 hover:text-violet-800">x2</button>
    <button @click="changeMethod(3)" :class="{ 'bg-yellow-100 text-violet-800' : store.method === 3}" class="border-2 border-yellow-100 rounded-r-full duration-200 hover:bg-yellow-100 hover:text-violet-800">x3</button>
  </div>
</template>

<script setup>
import { useStore } from '~~/store';

const store = useStore();

function changeMethod (newMethod) {
  store.rollTheDie();
  
  store.$patch({
    method: newMethod
  })
}
</script>
