<template>
    <div class="relative mx-auto max-w-screen-xl max-h-54 px-4 py-16 sm:px-6 lg:px-8">
        <alert v-show="alerts" class="absolute z-20 left-1/2 transform -translate-x-1/2 mb-5" :title="'Added to cart '"
            :description="'Check your shopping cart!'" @close="alerts = false" />
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

                    <Button @click="productData && addToCartAndShowAlert(productData)"
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
import alert from "~/components/ui/alert/alert.vue";

type Product = {
    title: string;
    description: string;
    price: number;
    id: number;
    img: string[];
}

const route = useRoute();
const store = productsStore();


let text = {
    question: "What is the return policy?",
    response: "We accept returns within 30 days of purchase. Read more about our return policy here."
}

const productData = ref<Product | null>(null);
let alerts = ref(false);
const getProduct = async (id: number) => {
    try {
        productData.value = await store.getProduct(id);
    } catch (error) {
        console.error('Failed to get product:', error);
    }
}

const addToCartAndShowAlert = (product: Product) => {
    store.addToCart(product);

    alerts.value = true;
    setTimeout(() => {
        alerts.value = false;
    }, 3000);
}


watch(() => route.params.id, (newId) => {
    getProduct(Number(newId));
}, { immediate: true });


</script>