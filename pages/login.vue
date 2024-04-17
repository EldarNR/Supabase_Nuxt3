<template>
    <div>
        You succes logined
    </div>
</template>

<script setup lang="ts">
import { createClient } from '@supabase/supabase-js'
const config = useRuntimeConfig()
const supabaseClient = useSupabaseClient()


const supabaseClients = createClient(config.public.URL, config.public.KEY);
</script>
