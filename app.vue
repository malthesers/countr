<template>
  <div class="w-screen h-screen grid bg-violet-800 text-yellow-100 text-5xl font-mono">
    <div class="place-self-center text-center">
      <Counter/>
      <CounterReplacer/>
      <CounterResetter/>
      <CounterMethod/>
    </div>
    <CounterHistory/>
  </div>
</template>

<script setup>
import { useStore } from './store';
const store = useStore();

</script>