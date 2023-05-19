<script setup lang="ts">

export interface MainLayoutProps {
  title: string;
  pageDescription?: string;
}

const props = defineProps<MainLayoutProps>();

</script>
<template>
  <main class="mx-auto w-full max-w-3xl px-4 pb-12">
      <h1>{{props.title}}</h1>
      <p>{{props.pageDescription}}</p>
      <slot />
  </main>
</template>