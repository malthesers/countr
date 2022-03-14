<template>
  <section class="w-full max-w-lg mx-auto pt-20 overflow-y-auto">
    <h1 class="text-4xl text-center">favourites</h1>
    <div class="mt-10 text-center">
      <div v-for="number in favNums" :key="number" @click="removeFavourite($event)" class="cursor-pointer inline-block text-center px-8 py-4 mx-4 my-4 border-2 border-yellow-100 rounded-full duration-200 transform hover:bg-yellow-100 hover:text-violet-800 hover:scale-110">
          {{ number }}
      </div>
    </div>
  </section>
</template>

<script setup>
const favourites = useCookie('fav');

const favNums = computed(() => {
  return favourites.value.split(',');
})

function removeFavourite (e) {
  const index = Array.from(e.currentTarget.parentNode.children).indexOf(e.currentTarget);

  let favNums = favourites.value.split(',')
  favNums.splice(index, 1);

  favourites.value = favNums.toString();
}

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
</style>