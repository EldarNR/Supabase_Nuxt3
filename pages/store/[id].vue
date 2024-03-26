<template>
    <div class="relative mx-auto max-w-screen-xl max-h-54 px-4 py-16 sm:px-6 lg:px-8">
        <breadcump :title="String(idPage)" :href="String(idPage)" />
        <alert v-show="alerts" class="absolute z-20 left-1/2 transform -translate-x-1/2 mb-5" :title="'Added to cart '"
            :description="'Check your shopping cart!'" @close="alerts = false" />
        <div class="grid grid-cols-2 lg:h-94 lg:grid-cols-2">
            <div class="relative z-10 py-4 lg:py-16">
                <div class="flex flex-col items-center h-28 sm:h-80 sm:w-full lg:h-full">
                    <Carousel class="relative w-full max-w-xs shadow-sm " @init-api="(val) => emblaMainApi = val">
                        <CarouselContent>
                            <CarouselItem v-for="(_, index) in productData?.img" :key="index">
                                <NuxtImg :src="_" />
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>

                    <Carousel class="relative w-full max-w-xs" @init-api="(val) => emblaThumbnailApi = val">
                        <CarouselContent class="flex gap-1 ml-0">
                            <CarouselItem v-for="(_, index) in productData?.img" :key="index"
                                class="pl-1 basis-1/12 cursor-pointer flex" @click="onThumbClick(index)">
                                <a
                                    class="inline-block mt-2 rounded-full border border-indigo-400 bg-indigo-600 p-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
                                    <span class="sr-only"> slide {{ index }} </span>
                                </a>
                            </CarouselItem>
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>

            <div class="relative flex items-center bg-gray-100 sm:w-full">
                <span class="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

                <div class="p-8 sm:p-16 lg:p-24">
                    <h2 class="text-3xl  font-bold sm:text-3xl">
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
import type { Cart } from '~/components/type/card';
import breadcump from '~/components/ui/breadcrump/breadcrump.vue';
import { watchOnce } from '@vueuse/core'
import { Carousel, type CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'

type Product = {
    title: string;
    description: string;
    price: number;
    id: number;
    img: string[];
}

let text = {
    question: "What is the return policy?",
    response: "We accept returns within 30 days of purchase. Read more about our return policy here."
}


const route = useRoute();
const store = productsStore();
const idPage = route.params.id;
const emblaMainApi = ref<CarouselApi>()
const emblaThumbnailApi = ref<CarouselApi>()
const selectedIndex = ref(0)

function onSelect() {
    if (!emblaMainApi.value || !emblaThumbnailApi.value)
        return
    selectedIndex.value = emblaMainApi.value.selectedScrollSnap()
    emblaThumbnailApi.value.scrollTo(emblaMainApi.value.selectedScrollSnap())
}

function onThumbClick(index: number) {
    if (!emblaMainApi.value || !emblaThumbnailApi.value)
        return
    emblaMainApi.value.scrollTo(index)
}

watchOnce(emblaMainApi, (emblaMainApi) => {
    if (!emblaMainApi)
        return

    onSelect()
    emblaMainApi.on('select', onSelect)
    emblaMainApi.on('reInit', onSelect)
})


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
    const cartItem: Cart = {
        ...product,
        count: 1, // or any default value
        category: '',
    };
    store.addToCart(cartItem);

    alerts.value = true;
    setTimeout(() => {
        alerts.value = false;
    }, 3000);
}

watch(() => route.params.id, (newId) => {
    getProduct(Number(newId));
}, { immediate: true });


</script>