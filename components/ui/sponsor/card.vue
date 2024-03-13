<template>
    <div class="w-full h-24 flex justify-center items-center gap-5 rounded-lg shadow mt-6 mb-6">
        <a v-for="(item, i) in img" :key="i">
            <img :src="item.src" :class="item.class" :alt="item.alt">
        </a>
        <NuxtLink v-for="(item, i) in img" :key="i">
            <img :src="item.src" :class="item.class" :alt="item.alt">
        </NuxtLink>
        <NuxtLink v-for="(item, i) in img" :key="i">
            <img :src="item.src" :class="item.class" :alt="item.alt">
        </NuxtLink>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
defineExpose({ Sponsor: null });


const img = [{ src: "https://upload.wikimedia.org/wikipedia/ru/a/aa/Logo_of_Kaspi_bank.png", class: "h-24", alt: "kaspi", },
{ src: "https://www.b-soc.ru/wp-content/uploads/2021/11/ikea_2018_srgb_100.png", class: "w-64 h-44", alt: "ikea", }
]
</script>

<style></style>