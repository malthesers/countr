<template>
  <div class="h-[68px] w-full mt-4 text-3xl rounded-full grid grid-cols-3">
    <button @click="changeMethod(1)" :class="{ 'bg-yellow-100 text-violet-800' : counterStore.method === 1}" class="grid place-content-center border-2 border-yellow-100 rounded-l-full duration-200 hover:bg-yellow-100 hover:text-violet-800 group/1">
      <span class="duration-200 group-active/1:scale-75">x1</span>
    </button>
    <button @click="changeMethod(2)" :class="{ 'bg-yellow-100 text-violet-800' : counterStore.method === 2}" class="grid place-content-center border-y-2 border-yellow-100 duration-200 hover:bg-yellow-100 hover:text-violet-800 group/2">
      <span class="duration-200 group-active/2:scale-75">x2</span>
    </button>
    <button @click="changeMethod(3)" :class="{ 'bg-yellow-100 text-violet-800' : counterStore.method === 3}" class="grid place-content-center border-2 border-yellow-100 rounded-r-full duration-200 hover:bg-yellow-100 hover:text-violet-800 group/3">
      <span class="duration-200 group-active/3:scale-75">x3</span>
    </button>
  </div>
</template>

<script setup>
import { useCounterStore } from '~~/store';
const counterStore = useCounterStore();

function changeMethod (newMethod) {
  counterStore.$patch({
    method: newMethod
  })
}
</script>
