<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Navigation from './components/Navigation.vue'

const route = useRoute()
const showNav = computed(() => route.meta.showNav ?? true)
</script>

<template>
  <Navigation v-if="showNav" />
  <router-view />
</template>

<style scoped>
</style>
