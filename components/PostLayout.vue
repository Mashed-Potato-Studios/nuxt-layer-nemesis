<script setup lang="ts">
import { SITE, SOCIAL_MEDIA, LOGO_IMAGE} from "../config";
import {BlogPost} from "../types";
import MainLayout from "~/components/MainLayout.vue";


export interface PostLayoutProps {
  pageNumber: number;
  totalPages: number;
  posts: BlogPost[]
}

const props = defineProps<PostLayoutProps>();

console.log("POSTS LAYOUT", props.posts)

// const prev = pageNumber > 1 ? `/blog/page/${pageNumber - 1}` : null;
// const next = pageNumber < totalPages ? `/blog/page/${pageNumber + 1}` : null;
</script>
<template>
      <Header/>

       <MainLayout title="Blog" pageDescription="This is the blog page">


            <CardSimple v-for="post in props.posts" :key="post.blogSlug" :blog="post" :href="`/blog/${post.blogSlug}`" />

      </MainLayout>

</template>