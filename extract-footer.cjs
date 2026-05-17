const fs = require('fs');
const path = require('path');

const homeViewPath = path.join(__dirname, 'src/views/HomeView.vue');
const appViewPath = path.join(__dirname, 'src/App.vue');
const globalFooterPath = path.join(__dirname, 'src/components/GlobalFooter.vue');

let homeContent = fs.readFileSync(homeViewPath, 'utf8');

// HTML: <section class="contact-section"> to </footer>
const htmlStart = homeContent.indexOf('<section class="contact-section">');
const htmlEnd = homeContent.indexOf('</footer>') + 9;
const htmlContent = homeContent.slice(htmlStart, htmlEnd);

// CSS: .contact-section { to the end of <style scoped>
const cssStart = homeContent.indexOf('.contact-section {');
const cssEndStr = '</style>';
const cssEnd = homeContent.lastIndexOf(cssEndStr);
const cssContent = homeContent.slice(cssStart, cssEnd).trim();

// Create GlobalFooter.vue
const globalFooterVue = `<template>
  <div>
${htmlContent}
  </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedGender = ref('先生');
</script>

<style scoped>
${cssContent}
</style>
`;
fs.writeFileSync(globalFooterPath, globalFooterVue, 'utf8');

// Modify HomeView.vue
// Remove HTML
homeContent = homeContent.slice(0, htmlStart) + homeContent.slice(htmlEnd);
// Remove script logic: const selectedGender = ref('先生');
homeContent = homeContent.replace("const selectedGender = ref('先生');", "");
// Remove CSS
const newCssEnd = homeContent.lastIndexOf('</style>');
const newCssStart = homeContent.indexOf('.contact-section {');
if(newCssStart !== -1) {
    homeContent = homeContent.slice(0, newCssStart) + '\n</style>\n';
}

fs.writeFileSync(homeViewPath, homeContent, 'utf8');

// Modify App.vue
let appContent = fs.readFileSync(appViewPath, 'utf8');
appContent = `<script setup>
import GlobalFooter from '@/components/GlobalFooter.vue';
</script>

<template>
  <router-view />
  <GlobalFooter />
</template>

<style scoped>
</style>
`;
fs.writeFileSync(appViewPath, appContent, 'utf8');

console.log("Extraction complete.");
