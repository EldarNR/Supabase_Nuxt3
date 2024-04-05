<template>
    <section class="bg-white">
        
        <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div class="md:flex md:items-end md:justify-between">
                <div class="max-w-xl">
                    <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        Read trusted reviews from our customers
                    </h2>

                    <p class="mt-6 max-w-lg leading-relaxed text-gray-700">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur praesentium natus
                        sapiente commodi. Aliquid sunt tempore iste repellendus explicabo dignissimos placeat,
                        autem harum dolore reprehenderit quis! Quo totam dignissimos earum.
                    </p>
                </div>

                <NuxtLink to="/review"
                    class="mt-6 inline-flex shrink-0 items-center gap-2 rounded-full border border-rose-600 px-5 py-3 text-rose-600 transition hover:bg-rose-600 hover:text-white md:mt-0">
                    <span class="font-medium"> Read all reviews </span>

                    <svg xmlns="http://www.w3.org/2000/svg" class="size-4 rtl:rotate-180" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </NuxtLink>
            </div>
            <div class="mt-3 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
                <card v-for="review in list.slice(0, 3)" :key="review.id" :review="review" />
            </div>
        </div>
    </section>
</template>
<script lang="ts" setup>
import card from './reviewMinmal/card.vue';
import { reviews } from '~/stores/review';
import { type Review } from "~/stores/review";
import breadcrump from '../ui/breadcrump/breadcrump.vue';

let list = ref([]) as unknown as Ref<Review[]>;

watchEffect(() => {
    list.value = reviews().reviews;
});

defineExpose({ Review: null });

</script>
