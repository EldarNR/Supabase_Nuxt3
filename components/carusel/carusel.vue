<template>
    <div class="mx-auto max-w-screen-xl   sm:px-6 sm:py-12 ">
        <Carousel>

            <CarouselContent>

                <CarouselItem v-for="item in list" :key="item.id"
                    class="w-full grid grid-cols-1  lg:grid-cols-3 lg:items-stretch">
                    <div v-if="list.length !== 0" class="grid place-content-center rounded bg-gray-200 p-6 sm:p-8">
                        <div class="mx-auto max-w-md text-center lg:text-left">
                            <header>
                                <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">{{ item.title }}</h2><br>
                                <p class="mt-2 text-gray-500">
                                    {{ item.description }}


                                </p>
                                <s v-if="item.discount" class="text-xl mt-2 text-gray-900">
                                    $ {{ item.price }}
                                </s>
                                <span v-else class="text-xl mt-2 text-gray-900">
                                    $ {{ item.price }}
                                </span>
                            </header>
                            <div class="flex hover:cursor-pointer focus:outline-none focus:ring hover:shadow">
                                <a @click="addToCartAndShowAlert(item)" class="mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-6 py-3 text-sm font-medium
                                     text-white transition active:bg-green-300 hover:bg-green-600">
                                    Add to cart
                                </a>
                                <NuxtLink :to="`/store/${item.id}`"
                                    class="mt-8 ml-2 inline-block rounded border border-gray-900 bg-gray-900 px-6 py-3 text-sm font-medium text-white transition  active:bg-gray-900 hover:bg-gray-400">
                                    Visit page <span class="text-white text_rotate">&uarr;</span>
                                </NuxtLink>
                            </div>

                        </div>
                    </div>

                    <div class="lg:col-span-2 lg:py-8">
                        <ul class="grid grid-cols-2 gap-4">
                            <li class="block" v-for="image in item.img" :key="image">
                                <NuxtImg :src="image"
                                    class="aspect-square mx-auto rounded object-cover w-80 sm:w-62"
                                    alt="picture" />
                            </li>
                        </ul>
                    </div>
                    <span v-if="list.length === 0" class="text-h3">Loading...</span>
                </CarouselItem>

            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />

        </Carousel>

    </div>
</template>

<script lang="ts" setup>
import { productsStore } from "~/stores/index"
import { type Cart } from "@/components/type/card";
const store = productsStore();

type Product = {
    title: string;
    description?: string;
    price: number;
    id: number;
    img: string[];
}


let list = ref<Cart[]>([]);

const addToCartAndShowAlert = (product: Product) => {
    const cartItem: Cart = {
        ...product,
        count: 1, // or any default value
        category: '',
    };
    store.addToCart(cartItem);
}


onMounted(() => {
    watch(() => store.carusel, (newValue) => {
        list.value = newValue; // Обновляем значение ссылки
    });
});

</script>

<style scoped>
.text_rotate {
    margin-left: 2px;
    display: inline-block;
    transform: rotate(45deg);
}
</style>
