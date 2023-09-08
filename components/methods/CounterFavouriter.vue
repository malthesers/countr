<template>
  <button @click="addFavourite" class="h-[68px] w-full mt-4 text-3xl border-2 border-yellow-100 rounded-full duration-200 hover:bg-yellow-100 hover:text-violet-800 active:scale-90">favourite</button>
</template>

<script setup>
import { useFavStore } from '~~/store'
const favStore = useFavStore()

function addFavourite () {
  const num = parseInt(document.querySelector("[display] span").textContent);
  favStore.$patch((state) => {
    state.favs.push(num)
  })
}
</script>
