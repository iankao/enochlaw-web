<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Navigation from './components/Navigation.vue'

const route = useRoute()
const showNav = computed(() => route.meta.showNav ?? true)
</script>

<template>
  <Navigation v-if="showNav" />
  <main :style="{ paddingTop: showNav ? '60px' : '0' }">
    <router-view />
  </main>
</template>

<style scoped>
main {
  width: 100%;
  box-sizing: border-box;
}
</style>
