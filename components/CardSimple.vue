<script setup lang="ts">
import type { BlogPost } from '../types';


export interface CardSimpleProps {
    href?: string;
    blog: BlogPost;
    heading?: boolean
}

const { href, blog, heading} = defineProps<CardSimpleProps>();

const { author, publishedDateAt, title, blogSlug, featured, draft, tags, description, ogpImage } = blog
</script>
<template>
    <a class="relative flex flex-col items-start justify-end col-span-12 px-5 pb-5 overflow-hidden bg-gray-800 cursor-pointer h-96 md:col-span-6 lg:col-span-3 group">

          <img class="absolute inset-0 object-cover object-center w-full h-full transition duration-300 ease-out transform scale-100 group-hover:scale-105" src="https://cdn.devdojo.com/images/may2021/blog-img-1.jpg">

          <span class="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent to-gray-900 opacity-90"></span>
          <span class="bg-purple-500 text-white px-2 py-0.5 inline relative text-xs mb-3 uppercase">{{ tags[0] }}</span>
          <span class="relative mb-3 text-xl font-bold leading-tight text-white">{{ title }}</span>
          <span class="relative flex text-xs text-white opacity-90">
                    <span class="mr-1 font-semibold">{{author}}</span>·<span class="ml-1">{{ publishedDateAt }}</span>
                </span>
        </a>
</template>