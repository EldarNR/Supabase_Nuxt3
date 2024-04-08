<template>
    <TransitionRoot as="template" :show="open">
        <Dialog as="div" class="relative z-10" @close="close(false)">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
                leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </TransitionChild>

            <div @click="close(false)" class="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div class="overflow-hidden flex flex-col justify-center my-40 items-center">
                    <img alt="" :src="props.img"
                        class="h-32 object-cover md:h-full  my-auto" />
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue'
import { Dialog, TransitionChild, TransitionRoot } from '@headlessui/vue'

const props = defineProps({
    popup: Boolean,
    img: String
})

const open = ref(props.popup)

const close = (bool) => {
    open.value = bool;
}

const emit = defineEmits(['togglePopup']);
</script>
