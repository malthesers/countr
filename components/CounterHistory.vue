<template>
  <footer class="absolute w-full bottom-0 bg-violet-900 p-4 font-mono text-yellow-100">
    <div class="text-xl flex gap-[12px] overflow-x-scroll">
      <TransitionGroup name="slide">
        <span v-for="number in historyStore.history" :key="number">{{ number }}</span>
      </TransitionGroup>
    </div>
    <div class="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-r from-transparent to-violet-900 pointer-events-none"/>
  </footer>
</template>

<script setup>
import { useCounterStore } from '~~/store';
import { useHistoryStore } from '~~/store';
const counterStore = useCounterStore();
const historyStore = useHistoryStore();

counterStore.$subscribe(() => {
  historyStore.$patch((state) => {
    state.history.unshift(counterStore.multipliedCounter)
  })
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

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}
</style>