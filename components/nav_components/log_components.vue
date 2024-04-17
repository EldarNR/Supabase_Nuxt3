<template>

    <NuxtLink v-if="!user" to="/auth" class="text-sm font-semibold leading-6 text-gray-900">Log in <span
            aria-hidden="true">&rarr;</span></NuxtLink>
    <div v-if="user" class="flex items-center">
        <cart class="mr-8" />

        <div class="rounded-xl  border-gray-100 bg-white py-2">


            <client-only>
                <DropdownMenu>

                    <div class="flex items-center gap-2 ">

                        <DropdownMenuTrigger>
                            <NuxtImg
                                :src="user.user_metadata.avatar_url || `https://i.pinimg.com/736x/2c/33/9a/2c339af1688746a6ff514da0ea9980d9.jpg`"
                                class="rounded-full h-10 w-10" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <NuxtLink to="/profile">
                                <DropdownMenuItem>Profile</DropdownMenuItem>
                            </NuxtLink>

                            <DropdownMenuItem class="bg-red-600 text-white" @click="logOut">Log out</DropdownMenuItem>
                        </DropdownMenuContent>

                    </div>

                </DropdownMenu>
            </client-only>
        </div>
    </div>

</template>

<script lang="ts" setup>
import { supabase } from '@supabase/auth-ui-shared';
import cart from '../ui/cart/cart.vue';

const userIn = ref(false);
const user = useSupabaseUser()
const supabaseClient = useSupabaseClient();


const logOut = async () => {
    navigateTo('/auth');
    await supabaseClient.auth.signOut();
}
</script>
