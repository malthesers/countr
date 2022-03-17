<template>
  <header class="absolute z-10 w-full bg-violet-900 text-yellow-100 font-mono lowercase flex justify-between px-6 py-3">
    <NuxtLink to="/" class="text-2xl">Countr</NuxtLink>
    <nav class="flex place-items-center gap-6 text-lg">
      <NuxtLink to="/secret" v-if="counterStore.secret" class="animate-secret">Secret</NuxtLink>
      <NuxtLink to="/">Counter</NuxtLink>
      <NuxtLink to="/favourites">Favourites</NuxtLink>
    </nav>
  </header>
</template>

<script setup>
import { useCounterStore } from '~~/store';
const counterStore = useCounterStore();
</script>

<style scoped>
nav a {
  position: relative;
}

nav a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 0%;
  background-color: #FEFCE8;
  transition-duration: 300ms;
}

nav a:hover::after, nav a.router-link-exact-active::after  {
  width: 100%;
}
</style>