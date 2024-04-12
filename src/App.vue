<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AppLayoutLinks from "@/layouts/AppLayoutLinks.vue";
</script>

<template>
  <AppLayout>
    <AppLayoutLinks/>
    <RouterView />
  </AppLayout>
</template>

<style scoped>
main {
  display: flex;
  margin: auto;
}
</style>
