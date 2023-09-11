<template>
  <div display class="inline-grid w-full px-2 border-y-2 border-yellow-100">
    <Transition name="fade" mode="out-in">
      <span :key="counterStore.multipliedCounter" class="self-center leading-normal overflow-x-scroll">{{ counterStore.multipliedCounter }}</span>
    </Transition>
  </div>
</template>

<script setup>
import { useCounterStore } from "~~/store"
const counterStore = useCounterStore()
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 250ms ease-in;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>