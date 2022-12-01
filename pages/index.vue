<script setup lang="ts">
import { z } from 'zod'
import postSchema from '@/types/postSchema'

const { data: posts } = await useFetch('https://jsonplaceholder.typicode.com/posts', {
    transform: data => z.array(postSchema).parse(data)
})
// const posts = ref([{id: 1, title: 'Title', body: 'body...'}])
</script>

<template>
    <div>
        <h1>Blog posts</h1>

        <article v-for="post in posts" :key="post.id">
            <header><strong>{{ post.title }}</strong></header>
            <p>{{ post.body }}</p>
            <NuxtLink :to="`/posts/${post.id}`">Read more &eqslantgtr;</NuxtLink>
        </article>
    </div>
</template>