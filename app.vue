<script setup lang="ts">
import { SITE, SOCIAL_MEDIA, LOGO_IMAGE} from "./config";


useHead({
  title: SITE.siteName,
  meta: [
    {
      name: "description",
      content: SITE.description,
    },
    {
      name: "og:title",
      content: SITE.name,
    },
    {
      name: "og:description",
      content: SITE.description,
    },
    {
      name: "og:image",
      content: LOGO_IMAGE,
    },
    {
      name: "og:url",
      content: SITE.url,
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:site",
      content: SITE.twitter,
    },
    {
      name: "twitter:title",
      content: SITE.name,
    },
    {
      name: "twitter:description",
      content: SITE.description,
    },
    {
      name: "twitter:image",
      content: LOGO_IMAGE,
    },
  ],
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico",
    },
    {
      rel: "stylesheet",
      href:
        "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap",
    },
  ],
});

</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
