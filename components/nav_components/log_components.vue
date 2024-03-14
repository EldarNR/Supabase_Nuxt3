<template>

    <NuxtLink v-if="!user" to="/auth" class="text-sm font-semibold leading-6 text-gray-900">Log in <span
            aria-hidden="true">&rarr;</span></NuxtLink>
    <div v-if="user" class="flex items-center">
        <cart class="mr-4" />

        <div class="rounded-xl border-2 border-gray-100 bg-white py-2">



            <DropdownMenu>
                <DropdownMenuTrigger>
                    <div class="flex items-center gap-4 p-0.1 pl-2 pr-2 ">
                        <a href="#" class="block shrink-0">
                            <img alt="avatar"
                                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                                class="size-14 rounded-lg object-cover" />
                        </a>

                        <div class="">
                            <h3>
                                <a href="#"
                                    class="font-medium  flex flex-column items-center justify-center sm:text-lg hover:underline">
                                    {{ user?.user_metadata.name }} </a>
                            </h3>
                        </div>

                        <DropdownMenuContent>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Billing</DropdownMenuItem>
                            <DropdownMenuItem>Team</DropdownMenuItem>
                            <DropdownMenuItem class="bg-red-600 text-white" @click="logOut">Log out</DropdownMenuItem>
                        </DropdownMenuContent>

                    </div>
                </DropdownMenuTrigger>
            </DropdownMenu>
        </div>
    </div>

</template>

<script lang="ts" setup>
import { supabase } from '@supabase/auth-ui-shared';
import cart from '../ui/cart/cart.vue';

const userIn = ref(false);
const user = useSupabaseUser()


watch(() => user.value, (newVal) => {
    console.log(newVal);
    if (newVal) {
        userIn.value = true;
    }
});

const supabaseClient = useSupabaseClient();
const logOut = async () => {
    navigateTo('/auth');
    await supabaseClient.auth.signOut();
}
console.log(user);
defineExpose({ Log: null });
</script>
