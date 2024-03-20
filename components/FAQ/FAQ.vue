<template>
        <div class="space-y-4">
            <details class="group [&_summary::-webkit-details-marker]:hidden" open>
                <summary
                    class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
                    <h2 class="font-medium">{{ props.text.question }}</h2>

                    <svg class="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </summary>

                <p class="mt-4 px-4 leading-relaxed text-gray-700">
                    {{ props.text.response }}
                </p>
            </details>

            <details class="group [&_summary::-webkit-details-marker]:hidden">
                <summary
                    class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
                    <h2 class="font-medium">{{ props.text.question }}</h2>

                    <svg class="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </summary>

                <p class="mt-4 px-4 leading-relaxed text-gray-700">
                    {{ props.text.response }}
                </p>
            </details>
        </div>
</template>

<script lang="ts" setup>

type Card = {
    question: string;
    response: string;
};

const props = defineProps({
    text: { type: Object as () => Card, required: true },
})

</script>

<style></style>