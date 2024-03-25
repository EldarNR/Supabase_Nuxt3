<template>
    <div>
        This is profile page
    </div>
    <article class="rounded-xl border border-gray-700 p-6 m-3">
        <div class="flex items-center gap-4">
            <img alt="" :src="user.user_metadata.avatar_url || 'https://avatars.dicebear.com/api/avataaars/123.svg'"
                class="size-16 rounded-full object-cover" />

            <div>
                <h3 class="text-lg font-medium">{{ user.user_metadata.full_name }}</h3>

                <div class="flow-root">
                    <ul class="-m-1 flex flex-wrap">
                        <li v-for="item in user.app_metadata.providers" :key="item" class="p-1 leading-none">
                            <a href="#" class="text-xs font-medium"> {{ item }} </a>
                        </li>
                        {{ user.identity_data. }}
                    </ul>
                </div>
            </div>
        </div>

        <ul class="mt-4 space-y-2">
            <li>
                <a href="#" class="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                    <strong class="font-medium">Project A</strong>

                    <p class="mt-1 text-xs font-medium ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequuntur deleniti,
                        unde ab ut in!
                    </p>
                </a>
            </li>

            <li>
                <a href="#" class="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                    <strong class="font-medium">Project B</strong>

                    <p class="mt-1 text-xs font-medium">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente cumque saepe sit.
                    </p>
                </a>
            </li>
        </ul>
    </article>
</template>

<script lang="ts" setup>

const user = useSupabaseUser() // ts ignore;
const supabaseClient = useSupabaseClient();

</script>

<style></style>