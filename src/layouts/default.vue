<template>
  <v-app>
    <div class="v-bg position-absolute top-0 right-0 left-0 bottom-0">
      <div aria-hidden="true" class="overflow-hidden opacity-20 w-100 h-100" />
    </div>
    <router-view />
    <Footer />
  </v-app>
</template>

<script setup lang="ts">
  import Footer from '@/components/Footer.vue'
</script>
