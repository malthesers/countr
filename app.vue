<template>
  <div class="w-screen h-screen grid bg-violet-800 text-yellow-100 text-5xl font-mono">
    <div class=" w-80 place-self-center text-center">
      <Counter/>
      <MethodsCounterReplacer/>
      <MethodsCounterMultiplier/>
      <MethodsCounterResetter/>
    </div>
    <CounterHistory v-if="store.secret"/>
  </div>
</template>

<script setup>
import { useStore } from './store';
const store = useStore();
</script>