<template>
  <div display class="inline-grid w-full border-y-2 border-yellow-100">
    <span  class="self-center">{{ store.multipliedCounter }}</span>
  </div>
</template>

<script setup>
import { useStore } from '~~/store';
const store = useStore();
</script>