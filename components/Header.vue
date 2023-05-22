<script setup lang="ts">
import { SITE, SOCIAL_MEDIA, LOGO_IMAGE} from "~/config";

export interface HeaderProps {
    navigationLinks?: "posts" | "projects" | "about" | "contact" | "resume";
    activeLink?: string;
}

const {navigationLinks, activeLink} = defineProps<HeaderProps>();
</script>
<template>
  <div>
      <header>
          <div class="mx-auto flex max-w-3xl flex-col items-center justify-between sm:flex-row;">
              <div class="relative flex w-full items-start justify-between sm:flex-row">
                <NuxtLink to="/" class="logo">
                    {{
                    LOGO_IMAGE.enable ?  
                    }}
                </NuxtLink>
              </div>
          </div>
      </header>
  </div>
</template>