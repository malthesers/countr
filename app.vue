<template>
  <Header/> 
  <div class="w-screen h-screen grid bg-violet-800 text-yellow-100 text-5xl font-mono">
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
  <CounterHistory v-if="currentRoute === 'index'"/>
</template>

<script setup>
const currentRoute = computed(() => {
  return useRouter().currentRoute.value.name;
})
</script>
