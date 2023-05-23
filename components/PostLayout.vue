<script setup lang="ts">
import { SITE, SOCIAL_MEDIA, LOGO_IMAGE} from "../config";
import {BlogPost} from "../types";


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
  <Layout :title="SITE.title">
      <Header/>
      <Main>
        <ul>
          <li v-for="post in props.posts" :key="post">
              <CardBlog :blog="post" /> {{post}}
          </li>
        </ul>
      </Main>
      {{ 
      
      }}
  </Layout>
</template>