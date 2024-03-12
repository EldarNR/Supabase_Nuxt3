<template>
    <header>
        <home />
    </header>
    <div v-for="(item, i) in '/assets/img'" :key="i">
        <Sponsor :img="item" :alt="item" />
    </div>
</template>

<script lang="ts" setup>
import home from '~/layoute/home.vue';
import Sponsor from "../components/ui/sponsor/card.vue";
import { createClient } from '@supabase/supabase-js'

const image1 = new URL('../assets/img/1-1.png', import.meta.url);
const image2 = new URL('../assets/img/2-2.png', import.meta.url);
const images = [image1, image2];
</script>

<style></style>