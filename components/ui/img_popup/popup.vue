<template>
    <div class="absolute ">
        <button>close</button>
        <img :src="props.img" alt="img" class="">
    </div>
</template>

<script lang="ts" setup>


const props = defineProps({
    img: { type: String, required: true },
})
</script>

<style></style>