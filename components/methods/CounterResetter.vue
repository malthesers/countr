<template>
  <button @click="counterStore.$reset" class="h-[68px] w-full mt-4 text-3xl border-2 border-yellow-100 rounded-full duration-200 hover:bg-yellow-100 hover:text-violet-800 active:scale-90">reset</button>
</template>

<script setup>
import { useCounterStore } from '~~/store';
const counterStore = useCounterStore();
</script>
