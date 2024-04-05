<template>
    <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16 m-2">
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
            <div class="flex items-center justify-center rounded-lg bg-gray-200 p-2 max-w-1280px">
                <img alt="phone" src="https://www.nopcommerce.com/images/webp/mobile-app/design-experience.webp"
                    class="w-fullabsolute max-w-screen-xl inset-0 object-cover" />
            </div>
            <div class="flex items-center flex-col justify-around text-center rounded-lg bg-gray-200">
                <div align="center">
                    <h2 class="text-2xl mb-3 font-bold tracking-tight text-gray-900 p-5 sm:text-2xl lg:text-4xl">{{
                        text.title }}
                    </h2>
                    <span>
                        {{ text.description }}
                    </span>
                    <span :href="item.link" v-for="item in text.download" :key="item.id"
                        class="bg-white mt-7 mb-1 p-2 rounded-lg w-48 flex items-center justify-center border-2 border-gray-500 cursor-pointer">

                        <svg xmlns="http://www.w3.org/2000/svg" class="mr-3" :width="item.svg.width"
                            :viewBox="item.svg.viewBox">
                            <path :d="item.svg.d" />
                        </svg>

                        <div class="text-black sm:text-md lg:text-sm flex items-stretch flex-col ">
                            <span class="text-sm sm:text-md lg:text-sm ml-1">{{ item.text }}</span>
                            <span class="text-2xl sm:text-xl lg:text-2xl ">{{ item.name }}</span>
                        </div>
                    </span>
                </div>

            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>


let text = {
    title: "Try our mobile app demo on your Android or iPhone",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur praesentium natus sapiente",
    download: [{
        id: 1,
        name: "App Store",
        link: "www.apple.com",
        text: "Available on the",
        store: "App Store",
        svg: {
            width: "24px",
            viewBox: "0 0 256 315",
            d: "M213.803 167.03c.442 47.58 41.74 63.413 42.197 63.615c-.35 1.116-6.599 22.563-21.757 44.716c-13.104 19.153-26.705 38.235-48.13 38.63c-21.05.388-27.82-12.483-51.888-12.483c-24.061 0-31.582 12.088-51.51 12.871c-20.68.783-36.428-20.71-49.64-39.793c-27-39.033-47.633-110.3-19.928-158.406c13.763-23.89 38.36-39.017 65.056-39.405c20.307-.387 39.475 13.662 51.889 13.662c12.406 0 35.699-16.895 60.186-14.414c10.25.427 39.026 4.14 57.503 31.186c-1.49.923-34.335 20.044-33.978 59.822M174.24 50.199c10.98-13.29 18.369-31.79 16.353-50.199c-15.826.636-34.962 10.546-46.314 23.828c-10.173 11.763-19.082 30.589-16.678 48.633c17.64 1.365 35.66-8.964 46.64-22.262"
        }
    }, {
        id: 2,
        name: "Google Play",
        link: "www.google.com",
        text: "Available on the",
        store: "Google Play",
        svg: {
            width: "24px",
            viewBox: "0 0 50 50",
            d: "M 7.125 2 L 28.78125 23.5 L 34.71875 17.5625 L 8.46875 2.40625 C 8.03125 2.152344 7.5625 2.011719 7.125 2 Z M 5.3125 3 C 5.117188 3.347656 5 3.757813 5 4.21875 L 5 46 C 5 46.335938 5.070313 46.636719 5.1875 46.90625 L 27.34375 24.90625 Z M 36.53125 18.59375 L 30.1875 24.90625 L 36.53125 31.1875 L 44.28125 26.75 C 45.382813 26.113281 45.539063 25.304688 45.53125 24.875 C 45.519531 24.164063 45.070313 23.5 44.3125 23.09375 C 43.652344 22.738281 38.75 19.882813 36.53125 18.59375 Z M 28.78125 26.3125 L 6.9375 47.96875 C 7.300781 47.949219 7.695313 47.871094 8.0625 47.65625 C 8.917969 47.160156 26.21875 37.15625 26.21875 37.15625 L 34.75 32.25 Z"
        }
    }]
}
</script>

<style></style>