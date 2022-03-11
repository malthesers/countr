<template>
  <header class="absolute z-10 w-full bg-violet-900 text-yellow-100 font-mono lowercase flex justify-between px-6 py-3">
    <NuxtLink to="/" class="text-2xl">Countr</NuxtLink>
    <nav class="flex place-items-center gap-6 text-lg">
      <NuxtLink to="/secret" v-if="store.secret" class="animate-secret">Secret</NuxtLink>
      <NuxtLink to="/">Counter</NuxtLink>
    </nav>
  </header>
</template>

<script setup>
import { useStore } from '~~/store';
const store = useStore();
</script>