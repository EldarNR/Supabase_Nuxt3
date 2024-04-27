<template>
    <div class="max-w-full min-h-screen flex mx-auto mb-2 items-center">
        <div class="max-w-[500px] w-full mx-auto">
            <Card>
                <CardTitle>
                    <div class="text-center p-22 mt-2">Welcome</div>
                </CardTitle>
                <CardContent>
                    <Auth :supabaseClient="supabaseClient" :appearance="{ theme: ThemeSupa }"
                        :providers="['google', 'github', 'discord']" socialLayout="horizontal" class="mt-4"
                        :redirectTo="'http://localhost:3000/'" />
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

// Используйте переменные среды или конфигурацию для URL-адресов
const REDIRECT_TO_URL = config.public.URL;
const FORGOTTEN_PASSWORD_URL = process.env.FORGOTTEN_PASSWORD_URL;

const authView = ref('sign_in')


const redirectTo = computed(() => {
    return authView.value === 'forgotten_password' ? FORGOTTEN_PASSWORD_URL : REDIRECT_TO_URL
})


</script>

<style></style>