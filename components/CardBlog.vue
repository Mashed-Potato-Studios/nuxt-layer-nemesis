<script setup lang="ts">
import type { BlogPost } from '../types';


export interface CardBlogProps {
    href?: string;
    blog: BlogPost;
    heading?: boolean
}

const { href, blog, heading} = defineProps<CardBlogProps>();

const { author, publishedDateAt, title, blogSlug, featured, draft, tags, description } = blog
</script>
<template>
    <li class="my-6">
        <NuxtLink :to="href" class="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0">
            {{
                heading ? '<h2 class="text-lg font-medium decoration-slice hover:underline">title</h2>' : '<h3 class="text-lg font-medium decoration-dashed hover:underline">title</h3>'
                 }}
        </NuxtLink>
        <p>{{ description }}</p>
    </li>
</template>