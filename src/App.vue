<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <header
    class="bg-gray-800 text-white py-4 px-6 flex justify-between items-center"
  >
    <h1>My Blog</h1>
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
      <h2 class="text-xl font-bold">Akmal Shafiee</h2>
      <p class="text-zinc-600">Diploma In Website Development</p>
      <p class="text-zinc-600">Politeknik Brunei</p>
    </div>
  </div>

  <div class="py-4 px-6">
    <h2 class="text-lg font-bold mb-4">About Me</h2>
    <div class="bg-white dark:bg-zinc-300 p-4 rounded-lg shadow-md">
      <p class="text-zinc-600">
        Assalamualaikum, miss. My name is Mohammad Akmal Shafie'e Bin Roslan,
        and my course is Diploma in Website Development. My most recent college
        experience was at IBTE SSRC, where I studied HNtec in Information
        Technology. Overall my experience in coding has been improving over the
        years Alhamdulilah. Good communication skills are essential not just in
        everyday life, but also in the job and in business. Insyallah, during
        the next ten years, I will gain confidence and financial independence.
      </p>
    </div>
  </div>

  <div class="mb-8 py-4 px-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="bg-white dark:bg-zinc-300 p-4 rounded-lg shadow-md">
        <h3 class="text-lg font-bold mb-2">Hobbies</h3>
        <p class="text-zinc-600">
          Mainly exploring or traveling the world, but I also enjoy hiking and
          gaming in my leisure time. I also enjoy photography and music.
        </p>
      </div>
      <div class="bg-white dark:bg-zinc-300 p-4 rounded-lg shadow-md">
        <h3 class="text-lg font-bold mb-2">Interest</h3>
        <li class="text-zinc-600">Music</li>
        <li class="text-zinc-600">Photography</li>
        <li class="text-zinc-600">Travel</li>
        <li class="text-zinc-600">Video Gaming</li>
      </div>
    </div>
  </div>

  <footer class="bg-gray-800 text-white py-4 fixed bottom-0 w-full">
    <div class="container mx-auto text-center">© 2023 Student Portfolio</div>
  </footer>
</template>

<style scoped></style>
