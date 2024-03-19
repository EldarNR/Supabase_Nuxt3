<template>
    <div>
        {{ route.params.id }}
        <Button @click="product(Number(route.params.id))">Go to product</Button>

    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { productsStore } from '~/stores/index';
import { useRoute } from 'vue-router';

const route = useRoute();
const store = productsStore();

const product = async (id: number) => {
    await store.getProducts(id);
}
</script>

<style></style>
