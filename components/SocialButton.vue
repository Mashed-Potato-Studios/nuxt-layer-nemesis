<script setup lang="ts">
import { SOCIAL_MEDIA } from "~/config";

export interface SocialButtonProps {
    href: string;
    title?: string; 
    disabled?: boolean;
}

const { href, title, disabled } = defineProps<SocialButtonProps>();
const socials = SOCIAL_MEDIA.filter(link => link.active).map(link => {
    console.log(link)
    return {
        ...link,
       url: link.url,
        title: link.linkTitle,
        name: link.name,
        svg: link.svg
    }

})
console.log(socials)
</script>
<template>
    <div class="social-icons">
        <NuxtLink v-for="social in socials" :key="social" :to="social.url" class="link-button">
           <div v-html="social.svg"></div>
        </NuxtLink>
    </div>
</template>
<style>
 .social-icons {
    @apply flex-wrap justify-center gap-1;
  }
  .link-button {
    @apply p-2 hover:rotate-6 sm:p-1;
  }
</style>