<template>
    <div>
        <PostLayout pageNumber="1" posts="filteredPosts" totalPages="totalPages.length"/>
    </div>
</template>

<script setup lang="ts">
const postQuery = await queryContent('posts')

// const sortedPosts = 
</script>

<style scoped>

</style>