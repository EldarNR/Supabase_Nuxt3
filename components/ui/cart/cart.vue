<template>
    <div class="relative">
        <svg @click="showCart = true" style="cursor: pointer;" xmlns="http://www.w3.org/2000/svg" width="36" height="36"
            viewBox="0 0 24 24">
            <title>cart</title>
            <path
                d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
        </svg>
        <div class="absolute z-10">
            <div v-show="showCart" alt="cart"
                class="relative  w-screen max-w-sm border border-gray-600 bg-gray-100 px-4 py-8 sm:px-6 lg:px-8"
                aria-modal="true" role="dialog" tabindex="-1">
                <button class="absolute end-4 top-4 text-gray-600 transition hover:scale-110" @click="showCart = false">
                    <span class="sr-only">Close cart</span>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="h-5 w-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div class="mt-4 space-y-6">
                    <ul class=" space-y-4 max-h-56 overflow-auto">
                        <NuxtLink v-for="item in cart"
                            class="flex items-center gap-4 rounded border border-gray-600 px-5 py-3 text-sm text-gray-600 transition  hover:bg-gray-300"
                            :to="`/store/${item.id}`">

                            <NuxtImg :src="item.img[0]" :key="item.id" alt="" class="size-16 rounded object-cover" />

                            <div>
                                <h3 class="text-sm text-gray-900 hover:text-white">{{ item.title }}</h3>
                                <dl class="mt-0.5 space-y-px text-[10px] text-gray-600 hover:text-white">
                                    <dt class="inline">Count: {{ item.count }} </dt>
                                </dl>
                            </div>


                        </NuxtLink>
                        <li v-if="cart.length === 0" class="text-center">
                            <span class="font-medium text-sm text-bold">Cart is empty</span>
                        </li>

                    </ul>

                    <div class="space-y-4 text-center">
                        <NuxtLink to="/cart"
                            class="block rounded border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400">
                            View my cart ({{ cart.length }})
                        </NuxtLink>

                        <NuxtLink to="/checkout"
                            class="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600">
                            Checkout
                        </NuxtLink>

                        <a href="#"
                            class="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600">
                            Continue shopping
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { productsStore } from '~/stores/index';

const store = productsStore();
const cart = ref(store.cart);

// watch(() => route.params.id, (newId) => {
//     getProduct(Number(newId));
// }, { immediate: true });
const showCart = ref(false);
</script>

<style></style>