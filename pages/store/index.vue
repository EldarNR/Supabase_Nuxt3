<template>
    <div class="container">
        <carusel />

        <span class="text-xl text-zinc-900">Find what you need</span>
        <filters />

        <div class="max-w-screen-xl flex flex-col">
            <div class=" justify-center">
                <div v-if="list.length >= 1" class="grid grid-cols-2 gap-6 sm:grid-cols-4 items-center">
                    <card v-for="item in list" :card="item" :key="item.id" />
                </div>
                <span v-else-if="list.length === 0" class="grid grid-cols-2 gap-6 sm:grid-cols-4 items-center">
                    <div v-for="item in store.page.itemsPerPage" :key="item" class="flex flex-col space-y-3">
                        <Skeleton class="h-[125px] w-[250px] rounded-xl" />
                        <div class="space-y-2">
                            <Skeleton class="h-4 w-[250px]" />
                            <Skeleton class="h-4 w-[200px]" />
                        </div>
                    </div>
                </span>

                <span v-else class="mt-4 text-center">Error!</span>
            </div>

            <pagination :props="page" class="m-auto mt-8" />
        </div>


    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { productsStore } from '~/stores/index';
import carusel from '~/components/carusel/carusel.vue';
import filters from '../components/filter_components/filters.vue';
import card from '../components/card/card.vue';
import pagination from '~/components/pagination/pagination.vue';


const store = productsStore();
let list = ref<any>([]);

const page = reactive({
    total: 0,
    page: 0,
    totalPage: 0,
});

onMounted(() => {
    store.fetchProductsFromDB();

    watchEffect(() => {
        list.value = store.paginatedProducts;

        page.total = store.page.itemsPerPage;
        page.page = store.page.currentPage;
        page.totalPage = store.totalPages;
    });
});
</script>
