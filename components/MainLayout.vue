<script setup lang="ts">

export interface MainLayoutProps {
  title: string;
  pageDescription?: string;
}

const props = defineProps<MainLayoutProps>();

</script>
<template>
  <section class="relative w-full h-screen py-10 bg-black bg-opacity-95 sm:py-16">

    <div class="absolute inset-0 w-full h-full bg-blue-900 opacity-10"></div>
    <div class="max-w-6xl px-10 mx-auto">
      <div class="flex justify-between w-full pb-5">
        <div class="flex flex-col items-start sm:flex-row sm:items-center">
          <div class="px-3 py-2 text-sm font-medium text-white uppercase bg-gray-800">{{ title }}</div>
          <a href="#_" class="mt-3 text-white transition duration-300 ease-out opacity-40 sm:ml-4 sm:mt-0 hover:opacity-80">{{ pageDescription }}</a>
        </div>
        <div class="flex items-center">
          <a href="#_" class="text-white transition duration-300 ease-out opacity-40 hover:opacity-80">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
          </a>
          <a href="#_" class="text-white transition duration-300 ease-out opacity-40 hover:opacity-80">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          </a>
        </div>
      </div>
      <div class="grid grid-cols-12 gap-1">
        <slot />
      </div>



    </div>
  </section>
</template>