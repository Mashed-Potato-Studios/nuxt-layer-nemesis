<template>
    <div>
        <PostLayout :posts="sortedPosts" :total-pages="totalPages.length"/>
    </div>
</template>

<script setup lang="ts">
const postQuery = await queryContent('blogs').find()

console.log("BLOGS", postQuery)

// Sort Function
const sortedPosts = useSort(postQuery)
console.log(sortedPosts)

const totalPages = usePageNumbers(sortedPosts.length)
console.log(totalPages)
</script>

<style scoped>

</style>