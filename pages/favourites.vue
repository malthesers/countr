<template>
  <section>
    <Transition name="appear">
      <h1 v-if="favStore.favs.length === 0" class="text-4xl text-center">no favourites yet</h1>
    </Transition>
    <div v-if="favStore.favs.length !== 0" class="flex flex-wrap justify-center gap-8 mt-10 p-2 text-center">
      <TransitionGroup name="fade">
        <span v-for="number in favStore.favs" :key="number" @click="removeFavourite($event)" class="relative cursor-pointer overflow-hidden">
          <div class="top-0 left-0 px-8 py-4 border-2 border-yellow-100 rounded-full duration-200 hover:bg-yellow-100 hover:text-violet-800">{{ number }}</div>
        </span>
      </TransitionGroup>
    </div>
  </section>
</template>

<script setup>
import { useFavStore } from "~~/store"
const favStore = useFavStore()

function removeFavourite (e) {
  const index = Array.from(e.currentTarget.parentNode.children).indexOf(e.currentTarget)
  
  favStore.$patch((state) => {
    state.favs.splice(index, 1)
  })
}

useHead({
  title: 'countr | favourites'
})
</script>

<style scoped>
::-webkit-scrollbar {
  width: 0.5rem;
}

::-webkit-scrollbar-track {
  background: #5b21b6;
}

::-webkit-scrollbar-thumb {
  background: #4c1d95;
}

.appear-enter-active,
.appear-leave-active {
  transition: opacity 250ms ease;
}

.appear-enter-from,
.appear-leave-to {
  opacity: 0
}

.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 250ms ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-leave-active div {
  position: absolute;
}
</style>