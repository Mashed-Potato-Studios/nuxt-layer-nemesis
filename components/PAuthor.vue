<script setup lang="ts">
import { Author } from "~/types";

const {image, name } = defineProps<Author>()
</script>
<template>
    <li class="flex items-center"><img
                                    :src="image"
                                    alt="avatar" class="object-cover w-10 h-10 mx-4 mt-4 rounded-full">
                                <p><a href="#" class="mx-1 font-bold text-gray-700 hover:underline">{{ name }}</a><span
                                        class="text-sm font-light text-gray-700">Created 23 Posts</span></p>
                            </li>
</template>