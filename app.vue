<template>
  <Header/> 
  <div class="w-screen min-h-screen grid bg-violet-800 text-yellow-100 text-5xl">
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
  <CounterHistory v-if="currentRoute === 'index'"/>
</template>

<script setup>
import { useCounterStore, useFavStore } from "./store";
const counterStore = useCounterStore();
const favStore = useFavStore();

const currentRoute = computed(() => {
  return useRouter().currentRoute.value.name;
})

counterStore.$subscribe(() => {
  counterStore.rollTheDie();
})

// Cookie handling

const favCookie = useCookie('fav')

onMounted(() => {
  // Load cookie into state
  if (favCookie.value) favStore.favs = JSON.parse(JSON.stringify(favCookie.value))
})

favStore.$subscribe(() => {
  // Update cookie 
  favCookie.value = JSON.parse(JSON.stringify(favStore.favs))
})

</script>
