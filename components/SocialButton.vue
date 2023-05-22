<script setup lang="ts">
export interface SocialButtonProps {
    href: string;
    title?: string; 
    disabled?: boolean;
}

const { href, title, disabled } = defineProps<SocialsButtonProps>();
</script>
<template>
    <NuxtLink :to="href" class="">

        <slot />
    </NuxtLink>
</template>
<style>
a {
    @apply hover:text-skin-accent
}
</style>