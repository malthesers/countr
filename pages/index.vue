<template>
  <div class="max-w-xs place-self-center text-center px-4">
    <Counter/>
    <MethodsCounterReplacer/>
    <MethodsCounterMultiplier/>
    <MethodsCounterResetter/>
    <MethodsCounterFavouriter/>
  </div>
</template>

<script setup>
useHead({
  title: 'countr'
})
</script>