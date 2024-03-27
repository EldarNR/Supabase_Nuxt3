<template>
    <section id="banner" class="text-center">
        <span class="text-xl font-medium">Sale promotion</span>
        <div class="mx-auto max-w-screen-xl px-4 sm:px-6 sm:py-12 lg:px-8">
            <div class=" lg:items-stretch">
                <div class="lg:col-span-2 ">
                    <ul class="grid grid-cols-3 gap-4">
                        <li>
                            <a class="group relative block">
                                <div class="relative h-[350px] sm:h-[450px]">
                                    <img src="https://i.pinimg.com/564x/2e/6c/89/2e6c89b9037e0a88466f64328c47894a.jpg"
                                        alt="" class="absolute inset-0 h-full w-full object-cover opacity-100 " />
                                </div>

                                <div class="absolute inset-0 flex flex-col items-end justify-end p-6">
                                    <h3 class="text-xl font-medium text-white">Arm Chair</h3>

                                    <Button @click="store.filterByCategory(['chair'])"
                                        class="mt-3 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                                        Shop Now
                                    </Button>
                                </div>
                            </a>
                        </li>

                        <li v-for="item in text" :key="item.id">
                            <NuxtLink v-if="store.banner.length !== 0" :to="`/store/${item.id}`" class="group block">
                                <img :src="item?.img[0]" alt="picture"
                                    class="aspect-square w-full rounded object-cover" />

                                <div class="mt-3">
                                    <h3
                                        class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                                        {{ item.title }}
                                    </h3>

                                    <s class="mt-1 text-sm text-gray-700">${{ item.price }}</s> ${{
                                        item.discount?.priceAfterDiscount }}
                                </div>
                            </NuxtLink>
                            <span v-else>Loading</span>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { productsStore } from '~/stores/index';
import type { Cart } from '../type/card';


const store = productsStore();

let text = ref([]) as Ref<Cart[]>;

watch(() => store.banner, (newBanner) => {
    text.value = newBanner;
}, { immediate: true });
</script>

<style></style>