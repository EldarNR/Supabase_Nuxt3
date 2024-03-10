<template>
    <div class="max-w-full min-h-screen flex mx-auto my-auto items-center">
        <div class="max-w-[500px] w-full mx-auto">
            <Card>
                <CardTitle>
                    <div class="text-center pb-22">Welcome</div>
                </CardTitle>
                <CardContent>
                    <Auth :supabaseClient="supabaseClient" :appearance="{
                        theme: ThemeSupa
                    }" />
                </CardContent>
            </Card>
        </div>

    </div>
</template>

<script setup lang="ts">
// Import predefined theme
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { Auth } from '@nuxtbase/auth-ui-vue'

const supabaseClient = useSupabaseClient()
</script>

<style></style>