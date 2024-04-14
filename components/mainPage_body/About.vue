<template>
    <section class="w-full">
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <header class="text-left">
                <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">New Collection</h2>

                <p class=" max-w-md text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
                    dicta incidunt est ipsam, officia dolor fugit natus?
                </p>
            </header>

            <ul class="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
                <li>
                    <a href="#" class="group relative block">
                        <NuxtImg
                            src="https://i.pinimg.com/564x/e8/0f/66/e80f6621387a9b2e3f2cd1765a7dfd13.jpg"
                            alt=""
                            class="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90" />

                        <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                            <h3 class="text-xl font-medium text-white">Casual Trainers</h3>

                            <span
                                class="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                                Shop Now
                            </span>
                        </div>
                    </a>
                </li>

                <li>
                    <a href="#" class="group relative block">
                        <NuxtImg
                            src="https://i.pinimg.com/736x/72/a3/d9/72a3d9ffd504015ab6a69138df04666c.jpg"
                            alt=""
                            class="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90" />

                        <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                            <h3 class="text-xl font-medium text-white">Winter Jumpers</h3>

                            <span
                                class="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                                Shop Now
                            </span>
                        </div>
                    </a>
                </li>

                <li class="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
                    <a href="#" class="group relative block">
                        <NuxtImg
                            src="https://i.pinimg.com/564x/23/fb/9e/23fb9ed31ef4977f97367b9ed74806aa.jpg"
                            alt=""
                            class="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90" />

                        <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                            <h3 class="text-xl font-medium text-white">Skinny Jeans Blue</h3>

                            <span
                                class="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                                Shop Now
                            </span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </section>
</template>

<script lang="ts" setup>



</script>

<style></style>