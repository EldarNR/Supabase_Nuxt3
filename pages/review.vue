<template>
    <div>
        <breadcrump :title="`review`" :href="`review`" />
        <span class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center py-6">People trust
            us!</span>
        <div class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
            <card v-for="review in list" :key="review.id" :review="review" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watchEffect } from "vue";
import { reviews } from "../stores/review";
import card from '../components/mainPage_body/reviewMinmal/card.vue';
import { type Review } from "~/stores/review";
import breadcrump from "~/components/ui/breadcrump/breadcrump.vue";

const review = reviews();

let list = ref([]) as Ref<Review[]>;

watchEffect(() => {
    list.value = review.reviews;
});

onMounted(() => {
    review.fetchReviews()
});

</script>

<style></style>