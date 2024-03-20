<template>
    <div class="mx-auto max-w-screen-xl max-h-54 px-4 py-16 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:h-94 lg:grid-cols-2">
            <div class="relative z-10 lg:py-16">
                <div class="relative h-24 sm:h-80 lg:h-full">

                    <Carousel>
                        <CarouselContent>
                            <CarouselItem v-for="item  in productData?.img" :key="item" class="w-full lg:items-stretch">
                                <NuxtImg :src="item" />
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>

            <div class="relative flex items-center bg-gray-100">
                <span class="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

                <div class="p-8 sm:p-16 lg:p-24">
                    <h2 class="text-2xl font-bold sm:text-3xl">
                        {{ productData?.title }}
                    </h2>

                    <p class="mt-4 text-gray-600">
                        {{ productData?.description }}
                    </p>

                    <Button @click="store.addToCart(productData)"
                        class="mt-8  rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
                        Add to cart
                    </Button>
                </div>
            </div>
        </div>
        <FAQ :text="text" class="mt-6" />
    </div>
</template>

<script lang="ts" setup>
import { ref, onBeforeMount, watch } from 'vue';
import { productsStore } from '~/stores/index';
import { useRoute } from 'vue-router';
import FAQ from '~/components/FAQ/FAQ.vue';

type Product = {
    title: string;
    description: string;
    price: number;
    id: number;
    img: string[];
}

const route = useRoute();
const store = productsStore();

const productData = ref<Product | null>(null);

const getProduct = async (id: number) => {
    try {
        productData.value = await store.getProduct(id);
    } catch (error) {
        console.error('Failed to get product:', error);
    }
}

let text = {
    question: "What is the return policy?",
    response: "We accept returns within 30 days of purchase. Read more about our return policy here."
}

watch(() => route.params.id, (newId) => {
    getProduct(Number(newId));
}, { immediate: true });
</script>