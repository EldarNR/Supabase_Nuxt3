<template>
    <div>
        <label for="Quantity" class="sr-only"> Quantity </label>

        <div class="flex items-center gap-1">
            <button @click="store.removeFromCart(props.item)" type="button"
                class="size-10 leading-10 text-gray-600 transition hover:opacity-75">
                &minus;
            </button>

            <div id="Quantity"
                class="flex items-center justify-center h-10 w-16 rounded border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none">
                {{ props.quantity }} </div>

            <button type="button" class="size-10 leading-10 text-gray-600 transition hover:opacity-75"
                @click="store.addToCart(props.item)">
                &plus;
            </button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { productsStore } from '~/stores/index';
import { type Cart } from '~/components/type/card';

const store = productsStore();

const props = defineProps<{
    item: Cart;
    quantity: number;
}>();

</script>

<style></style>