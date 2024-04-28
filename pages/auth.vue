<template>
    <div class="max-w-full min-h-screen flex mx-auto mb-2 items-center">
        <div class="max-w-[500px] w-full mx-auto">
            <Card>
                <CardTitle>
                    <div class="text-center p-22 mt-2">Welcome</div>
                </CardTitle>
                <CardContent>
                    <Auth :supabaseClient="supabaseClient" :appearance="{ theme: ThemeSupa }"
                        :providers="['google', 'github', 'discord']" socialLayout="horizontal" class="mt-4" />
                </CardContent>
            </Card>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { Auth } from '@nuxtbase/auth-ui-vue'


const supabaseClient = useSupabaseClient();
const user = useSupabaseUser();
const config = useRuntimeConfig()
const router = useRouter();

onMounted(async () => {
    watch(user, (user) => {
        if (user) {
            router.push('/')
        }
    })
})
</script>
