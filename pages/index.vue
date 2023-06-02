<script setup lang="ts">
import { SITE, SOCIAL_MEDIA} from "~/config";
import {PostCardProps} from "~/types";
import {ParsedContent} from "@nuxt/content/dist/runtime/types";


const socialLinks = SOCIAL_MEDIA.filter(link => link.active).length
const postQuery: ParsedContent[] = await queryContent('blogs').find()

// Cast postQuery to PostCardProps
const postQueryProps = postQuery as unknown as PostCardProps[]

console.log("BLOGS", postQuery)

definePageMeta({
    layout: "index",
})
</script>
<template>
  <div>
    <Hero />
    <div class="py-12 md:py-24">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h2 class="text-xs text-indigo-500 font-medium title-font">
            YAARD MAN A DO IT
          </h2>
          <h1 class="sm:text-3x1 text-4x1 mb-4 text-gray-900">
            Featured Posts
          </h1>
        </div>
        <div class="flex flex-wrap">
          <PostCard v-for="item in postQueryProps" :key="item.slug" :item="item" />
        </div>
      </div>
    </div>
    <div class="py-12 bg-gray-200 md:py-24">
      <div
        class="max-w-screen-xl px-6 mx-auto mb-12 lg:px-8 xl:px-4 lg:mb-16 xl:mb-24"
      >
        <div class="mb-6 text-center md:mb-8">
          <h2
            class="mb-2 text-3xl font-bold text-gray-800 md:text-4xl lg:text-5xl md:mb-4"
          >
            Projects
          </h2>
          <p class="text-lg text-gray-300 xl:text-xl">
            Various Framework including React.js, Nuxt.js, & Vue.js
          </p>
        </div>
      </div>
      <div class="flex flex-wrap">
<!--        <ProjectCard-->
<!--          v-for="item in projects"-->
<!--          :key="item.slug"-->
<!--          :item="item"/>-->
      </div>
    </div>
  </div>
</template>
<style>
#main-content {
    @apply mx-auto w-full max-w-3xl px-4 pb-12;
  }
 #hero {
    @apply pt-8 pb-6;
  }
   #hero h1 {
      @apply text-4xl font-bold text-gray-900 dark:text-gray-100;
    }
    #hero p {
      @apply mt-4 text-gray-600 dark:text-gray-400;
    }
    #hero .rss-link {
      @apply inline-flex items-center justify-center w-10 h-10 mt-4 text-gray-600 transition-colors duration-200 rounded-full dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-300;
    }
    #hero .rss-icon {
      @apply w-5 h-5;
    }
</style>