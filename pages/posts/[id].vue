<script setup lang="ts">
import postSchema from '@/types/postSchema'

const id = useRoute().params.id

const { data: post, error } = await useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    transform: data => postSchema.parse(data)
})
// const post = ref({id: 1, title: 'Title', body: 'body...'})

if (!post.value || error.value){
    throw createError({
        statusCode: 404,
        message: 'Post not found'
    })
}
</script>

<template>
    <div>
        <h1>{{ post?.title }}</h1>            
        <p>{{ post?.body }}</p>
        <NuxtLink to="/">Back home</NuxtLink>
    </div>
</template>