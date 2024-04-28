<template>
    <div>
        <detail :step="2" />

        <!--
        Heads up! 👋
    
        Plugins:
          - @tailwindcss/forms
      -->

        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-lg">
                <h1 class="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Доставка</h1>

                <p class="mx-auto mt-4 max-w-md text-center text-gray-500">
                    Заполните данные, чтобы отправить заказ
                </p>

                <form @submit.prevent="submitForm" class="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
                    <div class="grid grid-cols-2 gap-4">
                        <input v-model.trim="delivery.name" type="text" id="name" name="name"
                            class="rounded-lg border-gray-200 p-4 text-sm shadow-sm" placeholder="Enter your name"
                            required />

                        <input v-model.trim="delivery.surname" type="text" id="surname" name="surname"
                            class="rounded-lg border-gray-200 p-4 text-sm shadow-sm" placeholder="Enter your surname"
                            required />

                        <input v-model.trim="delivery.city" type="text" id="city" name="city"
                            class="rounded-lg border-gray-200 p-4 text-sm shadow-sm" placeholder="Enter city"
                            required />

                        <input v-model.trim="delivery.address" type="text" id="address" name="address"
                            class="rounded-lg border-gray-200 p-4 text-sm shadow-sm" placeholder="Enter address"
                            required />

                        <input v-model.trim="delivery.phone" type="tel" id="phone" name="phone" pattern="^\+7[0-9]{10}$"
                            required class="rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                            placeholder="Enter phone number" />

                        <input v-model.trim="delivery.email" type="email" id="email" name="email"
                            class="rounded-lg border-gray-200 p-4 text-sm shadow-sm" placeholder="Enter email"
                            required />
                    </div>

                    <div>
                        <label for="delivery-method" class="sr-only">Delivery Method</label>
                        <select v-model="delivery.method" id="delivery-method" name="delivery-method"
                            class="rounded-lg border-gray-200 p-4 text-sm shadow-sm w-full" required>
                            <option value="" disabled>Select delivery method</option>
                            <option value="standard">Standard Shipping</option>
                            <option value="express">Express Shipping</option>
                            <option value="courier">Courier Delivery</option>
                        </select>
                    </div>

                    <div>
                        <label for="notes" class="sr-only">Notes</label>
                        <textarea v-model.trim="delivery.notes" id="notes" name="notes"
                            class="rounded-lg border-gray-200 p-4 text-sm shadow-sm w-full resize-none"
                            placeholder="Any additional notes"></textarea>
                    </div>

                    <NuxtLink @click="submitForm" to="/payment"
                        class="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                        :disabled="isFormInvalid">
                        Go to payment
                    </NuxtLink>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import detail from '~/components/ui/detail/detail.vue';
import { reactive, computed } from 'vue';
import { productsStore } from '@/stores/index'
import { createClient } from "@supabase/supabase-js";


const config = useRuntimeConfig();
const supabase = createClient(
    config.public.SUPABASE_PUBLIC_URL,
    config.public.SUPABASE_KEY
);
const user = useSupabaseUser().value;

const store = productsStore();
const delivery = reactive({
    user_id: user.id,
    name: '',
    surname: '',
    city: '',
    address: '',
    phone: '',
    email: '',
    method: '',
    notes: '',
});

const sendInfo = (obj) => {
    console.log(obj)
    store.getDelivery(obj);
}

const isFormInvalid = computed(() => {
    return (
        !delivery.user_id ||
        !delivery.name ||
        !delivery.surname ||
        !delivery.city ||
        !delivery.address ||
        !delivery.phone ||
        !delivery.email ||
        !delivery.method
    );
});

const submitForm = () => {
    sendInfo(delivery);
    store.mergeProducts();
};
</script>