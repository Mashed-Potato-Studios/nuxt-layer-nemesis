<script setup lang="ts">

import { SITE, SOCIAL_MEDIA } from "../config";
import {definePageMeta} from "nuxt/dist/pages/runtime";

const router = useRouter();
export interface DefaultLayoutProps {
  title: string;
  author?: string;
  pageDescription?: string;
  pageImage?: string;
}

const props = defineProps<DefaultLayoutProps>();

const approvedURL = new URL(router.url.pathname, props.title);

definePageMeta({
  title: props.title,
  description: props.pageDescription,
  url: approvedURL.href,
  og: {
    title: props.title,
    description: props.pageDescription,
    image: props.pageImage,
    url: approvedURL.href,
    site_name: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    site: SITE.twitter,
    title: props.title,
    description: props.pageDescription,
    image: props.pageImage,
  },
})
</script>
<template>
  <div>
      <h1>Layout</h1>
  </div>
</template>