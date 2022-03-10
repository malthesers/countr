<template>
  <footer class="absolute w-full bottom-0 bg-violet-900 p-4">
    <div class="text-xl flex gap-[12px] overflow-x-scroll">
      <span>0</span>
    </div>
    <div class="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-r from-transparent to-violet-900 pointer-events-none"/>
  </footer>
</template>

<script setup>
import { useStore } from '~~/store';
const store = useStore();

// Log number on change
store.$subscribe(() => {
  const num = document.createElement("span");
  num.textContent = store.counter;
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