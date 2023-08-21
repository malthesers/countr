<template>
  <div class="w-80 place-self-center text-center">
    <Counter/>
    <MethodsCounterReplacer/>
    <MethodsCounterMultiplier/>
    <MethodsCounterResetter/>
    <MethodsCounterFavouriter/>
  </div>
</template>

<script setup lang="js">
useHead({
  title: 'countr'
})
</script>