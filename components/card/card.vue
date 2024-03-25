<template>
    <div class="group block overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition p-2 cursor-pointer">
        <NuxtLink :to="`/store/${props.card.id}`">
            <div class="relative h-48 overflow-hidden">
                <img :src="props.card.img[0]" alt="poster"
                    class="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0" />

                <img v-if="props.card.img[1]" :src="props.card.img[1]" alt="poster"
                    class="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100" />
            </div>

            <div class="relative bg-white pt-3">
                <h3 class="text-md text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    {{ props.card.title }}
                </h3>

                <div class="mt-1.5 flex items-center justify-between text-gray-900">
                    <p class="tracking-wide">${{ props.card.price }}</p>

                    <p class="text-xs uppercase tracking-wide">{{ props.card.category }}</p>
                </div>
            </div>
        </NuxtLink>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

type Card = {
    title: string;
    description: string;
    price: number;
    id: number;
    img: string[];
    category: string;
}

const props = defineProps({
    card: { type: Object as () => Card, required: true },
})
</script>
