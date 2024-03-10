<template>
  <div class="container">
    <navbar />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import navbar from '~/components/ui/navbar/navbar.vue'
</script>
