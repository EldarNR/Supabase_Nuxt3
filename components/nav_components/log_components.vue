<template>

    <NuxtLink v-if="!user" to="/auth" class="text-sm font-semibold leading-6 text-gray-900">Log in <span
            aria-hidden="true">&rarr;</span></NuxtLink>
    <div v-if="user" class="flex items-center">
        <cart class="mr-4" />

        <div class="rounded-xl border-2 border-gray-100 bg-white py-2">



            <DropdownMenu>

                <div class="flex items-center gap-5 p-0.1  pr-2 ">
                    <DropdownMenuTrigger>
                        open
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuItem class="bg-red-600 text-white" @click="logOut">Log out</DropdownMenuItem>
                    </DropdownMenuContent>

                </div>

            </DropdownMenu>
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
