<template>
    <div class="flex gap-8 items-center justify-end">
        <div class="flex items-stretch shadow p-2 rounded-lg mb-4">
            <svg viewBox="0 0 20 20" aria-hidden="true"
                class="pointer-events-none mr-2 ml-1  w-5 fill-gray-500 transition">
                <path
                    d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z">
                </path>
            </svg>
            <label class="sr-only" for="search">Search</label>

            <input v-model="search" class="w-full rounded-lg border-gray-200 p-2 text-sm" placeholder="Search..."
                type="text" id="phone" @input="store.searchProducts(search)" />

        </div>
        <div class="relative">
            <details class="group [&_summary::-webkit-details-marker]:hidden">
                <summary
                    class="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
                    <span class="text-sm font-medium"> Category </span>

                    <span class="transition group-open:-rotate-180">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="h-4 w-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </span>
                </summary>

                <div class="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2">
                    <div class="w-96 rounded border border-gray-200 bg-white">
                        <header class="flex items-center justify-between p-4">
                            <span class="text-sm text-gray-700">{{ checked.length }} Selected </span>

                            <button @click="store.fetchProductsFromDB(), checked = []" type="button"
                                class="text-sm text-gray-900 underline underline-offset-4">
                                Reset
                            </button>
                        </header>

                        <ul class="space-y-1 border-t border-gray-200 p-4">
                            <li v-for="item in category" :key="item.category">
                                <label for="FilterInStock" class="inline-flex items-center gap-2">
                                    <input v-model="checked" type="checkbox" id="FilterCategory" :value="item"
                                        class="size-5 rounded border-gray-300" />
                                    <span class="text-sm font-medium text-gray-700"> {{ item }} </span>

                                </label>
                            </li>

                        </ul>
                    </div>
                </div>
            </details>
        </div>

        <div class="relative">
            <details class="group [&_summary::-webkit-details-marker]:hidden">
                <summary
                    class="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
                    <span class="text-sm font-medium"> Price </span>

                    <span class="transition group-open:-rotate-180">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="h-4 w-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </span>
                </summary>

                <div class="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2">
                    <div class="w-96 rounded border border-gray-200 bg-white">
                        <header v-if="click" class="flex items-center justify-between p-4">
                            <span class="text-sm text-gray-700"> Find {{ store.products.length }}</span>

                            <button @click="click = false, store.fetchProductsFromDB()" type="button"
                                class="text-sm text-gray-900 underline underline-offset-4">
                                Reset
                            </button>
                        </header>

                        <div class="border-t border-gray-200 p-4">
                            <div class="flex justify-between gap-4">
                                <label for="FilterPriceFrom" class="flex items-center gap-2">
                                    <span class="text-sm text-gray-600">$</span>

                                    <input type="number" id="FilterPriceFrom" placeholder="From"
                                        class="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                        v-model="filter.priceFrom" />
                                </label>

                                <label for="FilterPriceTo" class="flex items-center gap-2">
                                    <span class="text-sm text-gray-600">$</span>

                                    <input type="number" id="FilterPriceTo" placeholder="To"
                                        class="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                        v-model="filter.priceTo" />
                                </label>
                                <label for="FilterPriceTo" class="flex items-center gap-2">
                                    <Button @click="store.sortPrice(filter.priceFrom, filter.priceTo), click = true">
                                        Apply
                                    </Button>
                                </label>
                            </div>
                            <div class="flex justify-between gap-4 mt-2">
                                <RadioGroup default-value="option-one">
                                    <span class="text-sm text-gray-600">Starting with:</span>
                                    <div class="flex items-center space-x-2">
                                        <RadioGroupItem @click="store.fetchProductsFromDB()" id="option-one"
                                            value="option-one" />
                                        <span for="option-one">Default</span>
                                    </div>
                                    <div class="flex items-center space-x-2">
                                        <RadioGroupItem @click="store.sortPriceMax()" id="option-two"
                                            value="option-two" />
                                        <span for="option-two">Max price</span>
                                    </div>
                                    <div class="flex items-center space-x-2">
                                        <RadioGroupItem @click="store.sortPriceMin()" id="option-three"
                                            value="option-three" />
                                        <span for="option-three">Min price</span>
                                    </div>
                                </RadioGroup>
                            </div>
                        </div>

                    </div>
                </div>
            </details>

        </div>



    </div>
</template>

<script lang="ts" setup>
import { defineComponent, reactive, ref, watch } from 'vue';
import { productsStore } from '../../../stores/index';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
const store = productsStore();
let search = ref('');
const click = ref(false);

let filter = reactive({
    inStock: false,
    preOrder: false,
    outOfStock: false,
    priceFrom: 0,
    priceTo: 0,
});

let switchs = ref(false);


let category = ref([]) as any;
const checked = ref([])

watch(checked, (value) => {
    store.filterByCategory(value);
});

watchEffect(() => {
    const newCategories = Array.from(new Set(store.products.map((item) => item.category)));
    newCategories.forEach((newCategory) => {
        if (!category.value.includes(newCategory)) {
            category.value.push(newCategory);
        }
    });
});

</script>

<style></style>