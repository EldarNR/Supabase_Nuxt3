<template>
  <header class="container ">
    <div class="flex items-center justify-center isolate px-6 pt-14 lg:px-8">

      <div class="w-1/2 py-32 sm:py-48 sm:w-100 ">
        <div class="text-center">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Data to enrich your
            online business</h1>
          <p class="mt-6 text-lg leading-8 text-gray-600">Anim aute id magna aliqua ad ad non deserunt
            sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.</p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <NuxtLink :to="'/store'"
              class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Get
              started →</NuxtLink>
          </div>

        </div>

      </div>

      <div class="w-1/2  float-right">

        <div class="text-center flex items-center justify-center">

          <img src="https://i.pinimg.com/564x/75/3c/2b/753c2b5775cec1768b89e888235584f8.jpg"
            class="w-3/4  align-center" />
        </div>

      </div>
      <div
        class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true">
        <div
          class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
// Remove the import statement for defineExpose from 'nuxt'
// import { defineExpose } from 'nuxt';
defineExpose({ Headers });
</script>

<style></style>