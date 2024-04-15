<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <header
    class="bg-gray-800 text-white py-4 px-6 flex justify-between items-center"
  >
    <h1>Akmal Shafie</h1>
    <p>Student At Politeknik Brunei</p>
  </header>

  <div class="flex flex-col md:flex-row items-center py-4 px-6">
    <img
      src="https://placehold.co/150"
      alt="Profile Picture"
      class="w-32 h-32 rounded-full shadow-md mb-4 md:mr-4"
      crossorigin="anonymous"
    />
    <div>
      <h2 class="text-xl font-bold">John Doe</h2>
      <p class="text-zinc-600">Computer Science Student</p>
      <p class="text-zinc-600">University of ABC</p>
    </div>
  </div>
</template>

<style scoped></style>
