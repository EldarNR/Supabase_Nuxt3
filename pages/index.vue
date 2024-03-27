<template>
        <home />
</template>

<script lang="ts" setup>
import home from '~/layoute/home.vue';
import { createClient } from '@supabase/supabase-js'
import { reviews } from '../stores/review'

const review = reviews();
onMounted(() => {
        review.fetchReviews();
})
</script>

<style></style>