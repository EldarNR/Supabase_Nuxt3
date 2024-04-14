<template>
    <div>
        <detail :step="3" />
        <div class="relative mx-auto w-full bg-white">
            <div class="grid min-h-screen grid-cols-10">
                <div class="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24">
                    <div class="mx-auto w-full max-w-lg">
                        <h1 class="relative text-2xl font-medium text-gray-700 sm:text-3xl">Secure Checkout<span
                                class="mt-2 block h-1 w-10 bg-teal-600 sm:w-20"></span></h1>
                        <form action="" class="mt-10 flex flex-col space-y-4">
                            <div><label for="email" class="text-xs font-semibold text-gray-500">Email</label><input
                                    type="email" id="email" name="email" placeholder="john.capler@fang.com"
                                    class="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500" />
                            </div>
                            <div
                                class="flex mt-3 py-4 flex-col justify-around bg-gray-800 p-4 border border-white border-opacity-30 rounded-lg shadow-md max-w-xs mx-auto">
                                <div class="flex flex-row items-center justify-between mb-3">
                                    <input
                                        class="w-full h-10 border-none outline-none text-sm bg-gray-800 text-white font-semibold caret-orange-500 pl-2 mb-3 flex-grow"
                                        type="text" name="cardName" id="cardName" placeholder="Full Name" />
                                    <div
                                        class="flex items-center justify-center relative w-14 h-9 bg-gray-800 border border-white border-opacity-20 rounded-md">
                                        <svg class="text-white fill-current" xmlns="http://www.w3.org/2000/svg"
                                            width="30" height="30" viewBox="0 0 48 48">
                                            <path fill="#ff9800" d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"></path>
                                            <path fill="#d50000" d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"></path>
                                            <path fill="#ff3d00"
                                                d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="flex flex-col space-y-3">
                                    <input
                                        class="w-full h-10 border-none outline-none text-sm bg-gray-800 text-white font-semibold caret-orange-500 pl-2"
                                        type="text" name="cardNumber" id="cardNumber"
                                        placeholder="0000 0000 0000 0000" />
                                    <div class="flex flex-row justify-between">
                                        <input
                                            class="w-full h-10 border-none outline-none text-sm bg-gray-800 text-white font-semibold caret-orange-500 pl-2"
                                            type="text" name="expiryDate" id="expiryDate" placeholder="MM/AA" />
                                        <input
                                            class="w-full h-10 border-none outline-none text-sm bg-gray-800 text-white font-semibold caret-orange-500 pl-2"
                                            type="text" name="cvv" id="cvv" placeholder="CVV" />
                                    </div>
                                </div>
                            </div>

                        </form>
                        <p class="mt-10 text-center text-sm font-semibold text-gray-500">By placing this order you agree
                            to the <a href="#"
                                class="whitespace-nowrap text-teal-400 underline hover:text-teal-600">Terms and
                                Conditions</a></p>
                        <button type="submit" @click="store.postMessage()"
                            class="mt-4 inline-flex w-full items-center justify-center rounded bg-teal-600 py-2.5 px-4 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-teal-500 sm:text-lg">Place
                            Order</button>
                    </div>
                </div>
                <div class="relative col-span-full flex flex-col py-6 pl-8 pr-4 sm:py-12 lg:col-span-4 lg:py-24">
                    <h2 class="sr-only">Order summary</h2>
                    <div>
                        <img src="https://images.unsplash.com/photo-1581318694548-0fb6e47fe59b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                            alt="" class="absolute inset-0 h-full w-full object-cover" />
                        <div
                            class="absolute inset-0 h-full w-full bg-gradient-to-t from-teal-800 to-teal-400 opacity-95">
                        </div>
                    </div>
                    <div class="relative">
                        <ul v-if="store.cart.length !== 0" class="space-y-5">
                            <li v-for="item in store.cart" :key="item.id" class="flex justify-between">
                                <div class="inline-flex">
                                    <img :src="item.img[1]" alt="img" class="max-h-16" />
                                    <div class="ml-3">
                                        <p class="text-base font-semibold text-white">{{ item.title }}</p>
                                        <p class="text-sm font-medium text-white text-opacity-80">{{
                                            item.description }}
                                        </p>
                                    </div>
                                </div>
                                <p class="text-sm font-semibold text-white mt-5">${{ item.price }}</p>
                            </li>
                        </ul>
                        <div v-else class=" text-center">
                            <span class="text-base font-semibold text-white">Empty cart</span>
                        </div>
                        <div class="my-5 h-0.5 w-full bg-white bg-opacity-30"></div>
                        <div class="space-y-2">
                            <p class="flex justify-between text-lg font-bold text-white"><span>Total
                                    price:</span><span>${{ store.totalPrice.toFixed(2) }}</span></p>
                            <p class="flex justify-between text-sm font-medium text-white"><span>Vat:
                                    10%</span><span>${{ store.VAT.toFixed(2) }}</span></p>
                        </div>
                    </div>
                    <div class="relative mt-10 text-white">
                        <h3 class="mb-5 text-lg font-bold">Support</h3>
                        <p class="text-sm font-semibold">+01 653 235 211 <span class="font-light">(International)</span>
                        </p>
                        <p class="mt-1 text-sm font-semibold">support@nanohair.com <span
                                class="font-light">(Email)</span></p>
                        <p class="mt-2 text-xs font-medium">Call us now for payment related issues</p>
                    </div>
                    <div class="relative mt-10 flex">
                        <p class="flex flex-col"><span class="text-sm font-bold text-white">Money Back
                                Guarantee</span><span class="text-xs font-medium text-white">within 30 days of
                                purchase</span></p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script lang="ts" setup>
import detail from '~/components/ui/detail/detail.vue';
import { productsStore, } from '@/stores/index';


const store = productsStore();

</script>

<style></style>