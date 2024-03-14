<template>
    <div class="max-w-full min-h-screen flex mx-auto mb-2 items-center">
        <div class="max-w-[500px] w-full mx-auto">
            <Card>
                <CardTitle>
                    <div class="text-center p-22 mt-4">Welcome</div>
                </CardTitle>
                <CardContent>
                    <Auth :supabaseClient="supabaseClient" :appearance="{
                        theme: ThemeSupa
                    }" :providers="['google', 'github', 'twitter']" show-links redirect-to="/" theme="light" />
                </CardContent>
            </Card>
        </div>

    </div>
</template>

<script setup lang="ts">
// Import predefined theme
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { Auth } from '@nuxtbase/auth-ui-vue'
import { createClient } from '@supabase/supabase-js'
const config = useRuntimeConfig()
const supabaseClient = useSupabaseClient()

const supabaseClients = createClient(config.public.URL, config.public.KEY);
console.log(supabaseClients)
definePageMeta({
    layoute: 'home',
});
</script>

<style></style>