<template>
  <div class="w-screen min-h-screen flex flex-col justify-between bg-violet-800 text-yellow-100">
    <Header/> 
    <div class="grid text-5xl">
      <NuxtLayout>
        <NuxtPage :key="$route.fullPath"/>
      </NuxtLayout>
    </div>
    <CounterHistory/>
  </div>
</template>

<script setup>
import { useCounterStore, useFavStore } from "./store";

useHead({
  link: [{ rel: "icon", type: "image/x-icon", href: "favicon.ico" }]
})

const counterStore = useCounterStore();
const favStore = useFavStore();

const currentRoute = computed(() => {
  return useRouter().currentRoute.value.name;
})

counterStore.$subscribe(() => {
  counterStore.rollTheDie();
})

// Cookie handling
const counterCookie = useCookie('counter')
const favCookie = useCookie('fav')

counterStore.$subscribe(() => {
  counterCookie.value = JSON.parse(JSON.stringify(counterStore.$state))
})

favStore.$subscribe(() => {
  favCookie.value = JSON.parse(JSON.stringify(favStore.favs))
})

onMounted(() => {
  // Load cookies
  if (favCookie.value) favStore.favs = JSON.parse(JSON.stringify(favCookie.value))
  if (counterCookie.value) counterStore.$state = JSON.parse(JSON.stringify(counterCookie.value))
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 250ms;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>