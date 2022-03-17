<template>
  <button @click="store.$reset" class="h-[68px] w-full mt-4 text-3xl border-2 border-yellow-100 rounded-full duration-200 hover:bg-yellow-100 hover:text-violet-800">reset</button>
</template>

<script setup>
import { useStore } from '~~/store';
const store = useStore();
</script>
