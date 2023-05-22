<script setup lang="ts">
import { SITE, SOCIAL_MEDIA, LOGO_IMAGE} from "../config";
import {BlogPost} from "../types";
import Layout from "./Layout.vue";
import Header from "../components/Header.vue";


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

      </Main>
  </Layout>
</template>