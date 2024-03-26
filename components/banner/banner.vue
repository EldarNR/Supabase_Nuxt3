<template>
    <section id="banner" class="text-center">
        <span class="text-xl font-medium">Sale promotion</span>
        <div class="mx-auto max-w-screen-xl px-4 sm:px-6 sm:py-12 lg:px-8">
            <div class=" lg:items-stretch">
                <div class="lg:col-span-2 ">
                    <ul class="grid grid-cols-3 gap-4">
                        <li>
                            <a href="#" class="group relative block">
                                <div class="relative h-[350px] sm:h-[450px]">
                                    <img src="https://i.pinimg.com/564x/2e/6c/89/2e6c89b9037e0a88466f64328c47894a.jpg"
                                        alt="" class="absolute inset-0 h-full w-full object-cover opacity-100 " />
                                </div>

                                <div class="absolute inset-0 flex flex-col items-end justify-end p-6">
                                    <h3 class="text-xl font-medium text-white">Arm Chair</h3>

                                    <span @click=""
                                        class="mt-3 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                                        Shop Now
                                    </span>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a href="#" class="group block">
                                <img src="https://i.pinimg.com/564x/2d/23/51/2d23518c7553e5fef26cc4e540e2a5bd.jpg"
                                    alt="" class="aspect-square w-full rounded object-cover" />

                                <div class="mt-3">
                                    <h3
                                        class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                                        Table
                                    </h3>

                                    <s class="mt-1 text-sm text-gray-700">$150</s> $120
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="group block">
                                <img src="https://i.pinimg.com/564x/c3/58/19/c35819f0858a4b02fbf66ff7f60eba79.jpg"
                                    alt="" class="aspect-square w-full rounded object-cover" />

                                <div class="mt-3">
                                    <h3
                                        class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                                        Bookshelf
                                    </h3>

                                    <s class="mt-1 text-sm text-gray-700">$150</s> $110
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { productsStore } from '~/stores/index';

const store = productsStore();
let chair = "chair";
provide('chair', chair);

</script>

<style></style>