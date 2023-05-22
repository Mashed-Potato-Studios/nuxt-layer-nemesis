<script setup lang="ts">
import { SITE, SOCIAL_MEDIA, LOGO_IMAGE} from "../config";
import {BlogPost} from "../types";


export interface PostLayoutProps {
  pageNumber: number;
  totalPages: number;
  posts: BlogPost[]
}

const {pageNumber, totalPages, posts} = defineProps<PostLayoutProps>();

const prev = pageNumber > 1 ? `/blog/page/${pageNumber - 1}` : null;
const next = pageNumber < totalPages ? `/blog/page/${pageNumber + 1}` : null;
</script>
<template>
  <Layout :title="SITE.title">
      <Header/>
      <Main>
        <ul>
          {{
          posts.forEach((post) => {
            return (
              <CardSimple />
            )
          }) 
             }}
        </ul>
      </Main>
      {{ 
      
      }}
  </Layout>
</template>