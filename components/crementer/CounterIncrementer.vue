<template>
  <button @click="incCounter" class="grid place-content-center border-2 border-yellow-100 rounded-r-full py-2 px-4 duration-200 hover:bg-yellow-100 hover:text-violet-800 group">
    <span class="duration-200 group-active:scale-75">❯</span>
  </button>
</template>

<script setup>
import { useCounterStore } from "~~/store"
const counterStore = useCounterStore()

function incCounter () {
  counterStore.$patch({
    counter: counterStore.counter + 1,
  })
}
</script>
