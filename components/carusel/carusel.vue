<template>
    <div class="mx-auto max-w-screen-xl   sm:px-6 sm:py-12 ">
        <Carousel>
            <CarouselContent>

                <CarouselItem v-for="item  in img" :key="item.id"
                    class="w-full grid grid-cols-1  lg:grid-cols-3 lg:items-stretch">
                    <div class="grid place-content-center rounded bg-gray-200 p-6 sm:p-8">
                        <div class="mx-auto max-w-md text-center lg:text-left">
                            <header>
                                <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">{{ item.title }}</h2>
                                <p class="mt-5 text-gray-500">
                                    {{ item.discripton }}
                                    <span class="text-xl text-gray-900">
                                        {{ item.price }} $
                                    </span>
                                </p>
                            </header>
                            <div class="flex ">
                                <a href="#"
                                    class="mt-8  inline-block rounded border border-gray-900 bg-gray-900 px-6 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring">
                                    Add to cart
                                </a>
                                <a href="#"
                                    class="mt-8 ml-2 inline-block rounded border border-gray-900 bg-gray-900 px-6 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring">
                                    Visit page <span class="text-white text_rotate">&uarr;</span>
                                </a>
                            </div>

                        </div>
                    </div>

                    <div class="lg:col-span-1 grid">
                        <ul class=" grid grid-cols-1 gap-2">
                            <li class="block">
                                <a href="#" class="flex  justify-stretch">

                                    <NuxtImg v-for="image in item.src" :key="image" :src="image"
                                        class="aspect-square p-2  rounded object-cover " :alt="item.alt" />

                                </a>
                            </li>
                        </ul>
                    </div>

                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />

        </Carousel>

    </div>
</template>

<script lang="ts" setup>
type item = {
    id: number;
    src: string[];
    title: string;
    discripton: string;
    price: number;
    information?: string;
    alt: string;
}

const img: item[] = [
    {
        id: 1,
        src: ['https://casadiousa.com/cdn/shop/products/BODUN_DESK_LIGHT_TAUPE_SQ_2_1600x.jpg?v=1678958325', 'https://casadiousa.com/cdn/shop/products/BODUN_DESK_DARK_TAUPE_SQ_1_1600x.jpg?v=1678958325'
        ],
        title: 'BODUN DESK',
        discripton: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Quos, quae.',
        price: 120,
        alt: 'DESK',
        information: 'DIMENSION Overall: W 96 in D 42 in  H 30 in'
    },
    {
        id: 2,
        src: ['https://casadiousa.com/cdn/shop/products/TROMBETA_NIGHTSTAND_SQ_1_1600x.jpg?v=1673013892', 'https://casadiousa.com/cdn/shop/products/TROMBETA_NIGHTSTAND_SQ_2_1600x.jpg?v=1673013892'],
        title: 'TROMBETA NIGHTSTAND',
        price: 100,
        discripton: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Quos, quae.',
        alt: 'table'
    },
    {
        id: 3,
        src: ['https://casadiousa.com/cdn/shop/files/DENMARK_BAR_STOOL_SQ_3_1600x.jpg?v=1683906449', 'https://casadiousa.com/cdn/shop/files/DENMARK_BAR_STOOL_SQ_2_1600x.jpg?v=1683906449',],
        title: 'DENMARK BAR STOOL',
        discripton: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Quos, quae.',
        price: 40,
        alt: 'chair',
        information: 'DIMENSIONS.Overall: W 19 in D 20 in H 42 in'
    }
]

</script>

<style scoped>
.text_rotate {
    margin-left: 2px;
    display: inline-block;
    transform: rotate(45deg);
}
</style>
