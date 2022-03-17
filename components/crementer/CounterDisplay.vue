<template>
  <div display class="inline-grid w-full border-y-2 border-yellow-100">
    <span  class="self-center">{{ counterStore.multipliedCounter }}</span>
  </div>
</template>

<script setup>
import { useCounterStore } from "~~/store"
const counterStore = useCounterStore()
</script>