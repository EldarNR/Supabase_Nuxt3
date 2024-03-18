<template>
  <div class="container">
    <navbar />
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <footers />
  </div>
</template>
<script setup lang="ts">
import navbar from '~/components/navbar/navbar.vue'
import footers from './components/footer/footer.vue';
import './assets/css/tailwind.css'
</script>
