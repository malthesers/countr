<template>
  <Header/> 
  <div class="w-screen min-h-screen grid bg-violet-800 text-yellow-100 text-5xl font-mono">
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
  <CounterHistory v-if="currentRoute === 'index'"/>
</template>

<script setup>
import { useStore } from "./store";
const store = useStore();

const currentRoute = computed(() => {
  return useRouter().currentRoute.value.name;
})

store.$subscribe(() => {
  store.rollTheDie();
})
</script>
