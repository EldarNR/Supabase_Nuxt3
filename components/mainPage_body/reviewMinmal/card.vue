<template>
    <blockquote class="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
        <div class="flex items-center gap-4">
            <NuxtImg alt="avatar" :src="props.review.picture" class="size-14 rounded-full object-cover" />
            <div>
                <div v-for="star in props.review.star" :key="star" class="flex justify-center gap-0.5 text-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                </div>

                <p class="mt-0.5 text-lg font-medium text-gray-900">{{ props.review.name }}</p>
            </div>
        </div>
        <p class="mt-4 text-gray-700">
            {{ props.review.review }}
        </p>
    </blockquote>
</template>

<script lang="ts" setup>
import { type Review } from '../Review.vue'
const props = defineProps({
    review: {
        type: String as unknown as PropType<Review>,
        required: true
    }
})
</script>

<style></style>