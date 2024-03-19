<template>
  <div class="inline-flex items-center justify-center gap-5 ">
    <a @click="FistPage"
      class="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180">
      <span class="sr-only">First Page</span>
      <div class="flex  mx-0  p-0">

        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clip-rule="evenodd" />

        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clip-rule="evenodd" />

        </svg>
      </div>
    </a>

    <a @click="decrementPage"
      class="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180">
      <span class="sr-only">Next Page</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd"
          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
          clip-rule="evenodd" />
      </svg>
    </a>



    <p class="text-xs text-gray-900">
      {{ page.page }}
      <span class="mx-0.25">/</span>
      {{ page.totalPage }}
    </p>

    <a @click="incrementPage"
      class="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180">
      <span class="sr-only">Next Page</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd" />
      </svg>
    </a>

    <a @click="LastPage"
      class="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180">
      <span class="sr-only">Last Page</span>
      <div class="flex  mx-0  p-0">

        <span class="sr-only">Next Page</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd" />
        </svg>
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { productsStore } from '~/stores/index';
const store = productsStore();
const page = reactive({
  total: 0,
  page: 1,
  totalPage: 0,
});

const incrementPage = () => {
  if (store.page.currentPage < page.totalPage) {
    store.setCurrentPage(store.page.currentPage + 1);
  }
};

const decrementPage = () => {
  if (store.page.currentPage > 1) {
    store.setCurrentPage(store.page.currentPage - 1);
  }
  return;
};

const FistPage = () => {
  store.page.currentPage = 1;
};

const LastPage = () => {
  store.page.currentPage = page.totalPage;
};

onMounted(() => {
  watchEffect(() => {
    page.total = store.page.itemsPerPage;
    page.page = store.page.currentPage;
    page.totalPage = store.totalPages;
  })
});
</script>

<style scoped>
a {
  cursor: pointer;
}
</style>
