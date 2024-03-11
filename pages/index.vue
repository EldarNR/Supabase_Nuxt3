<template>
    <header>
        <home />
        {{ user }}
    </header>
</template>

<script lang="ts" setup>
import home from '~/layoute/home.vue';
import { createClient } from '@supabase/supabase-js'
const user = useSupabaseClient()
</script>

<style></style>