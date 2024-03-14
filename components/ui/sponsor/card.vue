<template>
    <div class="w-full h-24 flex justify-center items-center  rounded-lg shadow m-5">
        <a v-for="(item, i) in img" :key="i" class="pl-3">
            <img :src="item.src" :class="item.class" :alt="item.alt">
        </a>
        <NuxtLink v-for="(item, i) in img" :key="i" class="pr-3">
            <img :src="item.src" :class="item.class" :alt="item.alt">
        </NuxtLink>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
defineExpose({ Sponsor: null });


const img = [{ src: "https://upload.wikimedia.org/wikipedia/ru/a/aa/Logo_of_Kaspi_bank.png", class: "h-24", alt: "kaspi", },
{ src: "https://www.b-soc.ru/wp-content/uploads/2021/11/ikea_2018_srgb_100.png", class: "w-64 h-44", alt: "ikea", },
{ src: "https://habrastorage.org/r/w1560/getpro/habr/upload_files/ec3/e07/787/ec3e07787bbb3ed116f4a05ca9c06c73.png", class: "w-54 h-44", alt: "yandex", }
]
</script>

<style></style>