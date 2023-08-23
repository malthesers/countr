<template>
  <div display class="inline-grid w-full border-y-2 border-yellow-100">
    <Transition name="fade" mode="out-in">
      <span :key="counterStore.multipliedCounter" class="self-center">{{ counterStore.multipliedCounter }}</span>
    </Transition>
  </div>
</template>

<script setup>
import { useCounterStore } from "~~/store"
const counterStore = useCounterStore()
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 250ms ease-in;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>