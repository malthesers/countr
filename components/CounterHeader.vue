<template>
  <header class="w-full bg-violet-900 lowercase flex justify-between px-6 py-3 z-10">
    <NuxtLink to="/" class="text-2xl">Countr</NuxtLink>
    <nav class="hidden sm:flex place-items-center gap-6 text-lg">
      <Transition name="fade">
        <NuxtLink to="/secret" v-if="counterStore.secret">Secret</NuxtLink>
      </Transition>
      <NuxtLink to="/">Counter</NuxtLink>
      <NuxtLink to="/favourites">Favourites</NuxtLink>
    </nav>
    <p class="sm:hidden place-items-center text-lg">
      <span @click="showMobileMenu = !showMobileMenu" class="cursor-pointer">menu</span>
    </p>
    <Teleport to="body">
      <Transition name="appear">
        <div v-if="showMobileMenu" class="fixed top-0 z-10 w-full h-[100dvh] bg-violet-900 text-yellow-100 grid lowercase">
          <nav @click="showMobileMenu = false" class="flex flex-col my-auto gap-6 text-4xl">
            <Transition name="fade">
              <NuxtLink to="/secret" v-if="counterStore.secret" class="mx-auto">Secret</NuxtLink>
            </Transition>
            <NuxtLink to="/" class="mx-auto">Counter</NuxtLink>
            <NuxtLink to="/favourites" class="mx-auto">Favourites</NuxtLink>
          </nav>
        </div>
      </Transition>
    </Teleport>
  </header>
</template>

<script setup>
import { useCounterStore } from '~~/store';
const counterStore = useCounterStore();

const showMobileMenu = ref(false)
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

.appear-enter-active,
.appear-leave-active {
  transition: opacity 400ms ease;
}

.appear-enter-from,
.appear-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 400ms linear;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>