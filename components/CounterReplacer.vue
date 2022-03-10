<template>
  <button @click="replaceCounter" class="h-[60px] w-full mt-4 text-3xl border-2 border-yellow-100 rounded-full duration-200 hover:bg-yellow-100 hover:text-violet-800">replace</button>
</template>

<script setup>
import { useStore } from '~~/store';

const store = useStore();

function replaceCounter () {
  store.$state = {
    counter: 10
  };
}
</script>
