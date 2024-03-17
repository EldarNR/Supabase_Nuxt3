<template>
    <div class="container">
        <carusel />

        <span class="text-xl text-zinc-900">Find what you need</span>
        <filters />

        <div class="max-w-screen-xl ">
            <div class="">
                <div v-if="list" class="grid grid-cols-2 gap-6 sm:grid-cols-4 items-center">
                    <card v-for="item in list.products" :card="item" :key="item.id" />
                </div>
                <loader v-else />
            </div>
        </div>

    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { productsStore } from '~/stores/index';
import carusel from '~/components/carusel/carusel.vue';
import filters from '../components/filter_components/filters.vue';
import card from '../components/card/card.vue';
import loader from '~/components/ui/loader.vue/loader.vue';


const store = productsStore();
let list = ref<any>([]);

onMounted(async () => {
    store.fetchProductsFromDB();

    await watchEffect(() => {
        list.value = store.products[0];
    });
});
</script>
