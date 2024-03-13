<template>
    <Headers />
    <Sponsor />
    <main>
        <About />
        <Review />
    </main>
</template>

<script lang="ts" setup>
import Headers from '~/components/header_mainpage/header.vue';
import Sponsor from '~/components/ui/sponsor/card.vue';
import About from '~/components/mainPage_body/About.vue';
import Review from '~/components/mainPage_body/Review.vue';
</script>

<style></style>