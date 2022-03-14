<template>
  <button @click="addFavourite" class="h-[68px] w-full mt-4 text-3xl border-2 border-yellow-100 rounded-full duration-200 hover:bg-yellow-100 hover:text-violet-800">favourite</button>
</template>

<script setup>
import { useStore } from '~~/store';

const store = useStore();
const favourites = useCookie('fav');

function addFavourite () {
  store.rollTheDie();

  const num = document.querySelector("[display] span").textContent;
  favourites.value = favourites.value + `,${num}`;
}
</script>
