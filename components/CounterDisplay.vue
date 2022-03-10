<template>
  <div class="w-full border-y-2 border-yellow-100 grid">
    <span v-if="store.method === 'default'" class="self-center px-8">{{ store.counter }}</span>
    <span v-if="store.method === 'double'" class="self-center px-8">{{ store.doubleCounter }}</span>
    <span v-if="store.method === 'triple'" class="self-center px-8">{{ store.tripleCounter }}</span>
  </div>
</template>

<script setup>
import { useStore } from '~~/store';
const store = useStore();
</script>