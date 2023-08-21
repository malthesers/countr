<template>
  <footer class="absolute w-full bottom-0 bg-violet-900 p-4 font-mono text-yellow-100">
    <div class="text-xl flex gap-[12px] overflow-x-scroll"></div>
    <div class="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-r from-transparent to-violet-900 pointer-events-none"/>
  </footer>
</template>

<script setup>
import { useCounterStore } from '~~/store';
const counterStore = useCounterStore();

counterStore.$subscribe(() => {
  const num = document.querySelector("[display] span").cloneNode(true);
  document.querySelector("footer div").prepend(num);
}, { detached: true })
</script>

<style scoped>
::-webkit-scrollbar {
  height: 0.5rem;
}

::-webkit-scrollbar-track {
  background: #5b21b6;
}

::-webkit-scrollbar-thumb {
  background: #4c1d95;
}
</style>