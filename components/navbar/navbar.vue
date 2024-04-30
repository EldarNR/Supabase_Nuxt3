<template>
  <header class=" inset-x-0 top-0 z-50 ">
    <nav class="flex items-center justify-between p-3 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <NuxtLink :to="'/'" class="flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
            <title>sofa-single-outline</title>
            <path
              d="M19 9V7C19 5.35 17.65 4 16 4H8C6.35 4 5 5.35 5 7V9C3.35 9 2 10.35 2 12V17C2 18.65 3.35 20 5 20V22H7V20H17V22H19V20C20.65 20 22 18.65 22 17V12C22 10.35 20.65 9 19 9M7 7C7 6.45 7.45 6 8 6H16C16.55 6 17 6.45 17 7V9.78C16.39 10.33 16 11.12 16 12V14H8V12C8 11.12 7.61 10.33 7 9.78V7M20 17C20 17.55 19.55 18 19 18H5C4.45 18 4 17.55 4 17V12C4 11.45 4.45 11 5 11S6 11.45 6 12V16H18V12C18 11.45 18.45 11 19 11S20 11.45 20 12V17Z" />
          </svg>
          <span class="ml-1 font-semibold leading-7">ChicMinimal </span>
        </NuxtLink>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <NuxtLink v-for="item in navigation" :key="item.name" :to="item.href"
          class="text-sm font-semibold leading-6 text-gray-900">{{ item.name }}</NuxtLink>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <Log />
      </div>
    </nav>

    <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-50" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <a href="#" class="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
              <title>sofa-single-outline</title>
              <path
                d="M19 9V7C19 5.35 17.65 4 16 4H8C6.35 4 5 5.35 5 7V9C3.35 9 2 10.35 2 12V17C2 18.65 3.35 20 5 20V22H7V20H17V22H19V20C20.65 20 22 18.65 22 17V12C22 10.35 20.65 9 19 9M7 7C7 6.45 7.45 6 8 6H16C16.55 6 17 6.45 17 7V9.78C16.39 10.33 16 11.12 16 12V14H8V12C8 11.12 7.61 10.33 7 9.78V7M20 17C20 17.55 19.55 18 19 18H5C4.45 18 4 17.55 4 17V12C4 11.45 4.45 11 5 11S6 11.45 6 12V16H18V12C18 11.45 18.45 11 19 11S20 11.45 20 12V17Z" />
            </svg>
            <span class="ml-1 font-semibold leading-7">ChicMinimal </span>
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <a v-for="item in navigation" :key="item.id" :href="item.href"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{
                  item.name }}</a>
            </div>
            <Log />
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Dialog, DialogPanel } from "@headlessui/vue"
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import Log from '../nav_components/log_components.vue';
export default defineComponent({
  components: {
    Dialog,
    DialogPanel,
    Bars3Icon,
    XMarkIcon,
    Log
  },
  setup() {
    const navigation = ref([
      { id: 1, name: 'Home', href: '/' },
      { id: 2, name: 'Store', href: '/store' },
      // Add more navigation items here
    ]);
    const mobileMenuOpen = ref(false); // This line creates a Vue ref named mobileMenuOpen and initializes it to false.
    return {
      navigation, mobileMenuOpen
    };
  },
}) 
</script>
