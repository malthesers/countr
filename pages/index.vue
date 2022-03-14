<template>
  <div class=" w-80 place-self-center text-center">
    <Counter/>
    <MethodsCounterReplacer/>
    <MethodsCounterMultiplier/>
    <MethodsCounterResetter/>
    <MethodsCounterFavouriter/>
  </div>
</template>

<script setup>
import { useStore } from '~~/store';
const store = useStore();

// const favourites = useCookie('fav')

// const favs = '2,14';

// favourites.value = favs
</script>