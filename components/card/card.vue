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
                <h3 class="text-md text-gray-700 group-hover:underline group-hover:underline-offset-4 truncate ">
                    {{ props.card.title }}
                </h3>
                <div class="mt-2 flex items-end justify-between text-gray-900">
                    <p class="tracking-wide">${{ props.card.price }}</p>
                    <p class="text-xs uppercase tracking-wide">{{ props.card.category }}</p>
                </div>
            </div>
        </NuxtLink>
        <div class="flex items-center justify-start mt-2">
            <Button class="">Buy</Button>
            <Button @click="switchButton()" class="bg-white ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <title>heart</title>
                    <path :fill="isFavourite ? '#ef4444' : 'black'"
                        d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                </svg>
            </Button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineProps, ref } from 'vue'
import { productsStore } from '@/stores/index'

type Card = {
    title: string;
    description: string;
    price: number;
    id: number;
    img: string[];
    category: string;
    favourite?: boolean;
}

const store = productsStore();
const props = defineProps({
    card: { type: Object as () => Card, required: true },
    // Change type to number, assuming it's a product ID
})
const productId = props.card.id;
const isFavourite = ref(props.card.favourite ?? false); // Initialize favourite state

const switchButton = () => {
    if (isFavourite.value) {
        try {
            store.deleteFavProduct(productId)
            console.log('Product deleted from favouritesы!')
        } catch (error) {
            console.error('Error deleting product from favourites:', error);
        }
    } else {
        try {
            store.postProductFav(productId);
            console.log('Product added to favourites');
        } catch (error) {
            console.error('Error adding product to favourites:', error);
        }
    }
    isFavourite.value = !isFavourite.value; // Toggle favourite state
}


</script>