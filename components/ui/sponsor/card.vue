<template>
    <div class="w-100 bg-red-300">
        <img :src="props.img" :alt="props.alt" :class="props?.class">
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

defineExpose({ Sponsor: null });
const props = defineProps({
    img: String,
    alt: String,
    class: String
})

</script>

<style></style>