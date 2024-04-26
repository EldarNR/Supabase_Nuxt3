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
                        :redirectTo="'http://localhost:3000/'"  />
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
const REDIRECT_TO_URL = process.env.REDIRECT_TO_URL || 'http://localhost:3000/'
const FORGOTTEN_PASSWORD_URL = process.env.FORGOTTEN_PASSWORD_URL || 'http://localhost:3000/forgot-password'

const authView = ref('sign_in')
console.log(supabaseClient.auth)
async function signUpNewUser() {
    // Используйте введенные пользователем данные
    const { data, error } = await supabaseClient.auth.signUp({
        email,
        password,
        options: {
            emailRedirectTo: 'http://localhost:3000/login', // Обновите на нужный URL
        },
    })

    if (error) {
        console.error('Ошибка регистрации:', error)
        // Обработайте ошибку регистрации
    } else {
        console.log('Регистрация успешна:', data)
        // ... (Перенаправление или другие действия после успешной регистрации)
    }
}


const redirectTo = computed(() => {
    return authView.value === 'forgotten_password' ? FORGOTTEN_PASSWORD_URL : REDIRECT_TO_URL
})


</script>

<style></style>