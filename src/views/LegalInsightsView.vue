<template>
  <div class="insights-page">
    <nav class="navbar-dark">
      <div class="navbar-content">
        <div class="navbar-brand">
          <router-link to="/">
            <img src="/images/enoch-logo-white.png" alt="Enoch Logo" class="navbar-logo" />
          </router-link>
        </div>
        
        <div class="desktop-menu" :class="{ 'is-open': isMenuOpen }">
          <ul class="navbar-menu">
            <li><router-link to="/member" class="navbar-link" :class="{ 'router-link-active': $route.path.startsWith('/member') }">以諾團隊</router-link></li>
            <li><router-link to="/insights" class="navbar-link">法律專欄</router-link></li>
            <li><router-link to="/cases" class="navbar-link" :class="{ 'router-link-active': $route.path.startsWith('/cases') }">勝訴案例</router-link></li>
            <li><a href="#" class="navbar-link">時事影音</a></li>
            <li><a href="#" class="navbar-link">案件查詢</a></li>
            <li><router-link to="/zoom" class="navbar-link">下載zoom</router-link></li>
          </ul>
          <button class="cta-button">免費諮詢</button>
        </div>

        <button class="mobile-menu-btn" @click="isMenuOpen = !isMenuOpen">
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
      </div>
    </nav>
    
    <!-- Breadcrumb Area -->
    <div class="breadcrumb-container">
      <div class="breadcrumb-inner">
        <router-link to="/" class="breadcrumb-link">首頁</router-link>
        <span class="breadcrumb-separator"> / </span>
        <span class="breadcrumb-active">法律專欄</span>
      </div>
    </div>

    <!-- Header Section -->
    <header class="insights-header">
      <p class="insights-subtitle">Legal Insights</p>
      <h1 class="insights-title">法律專欄</h1>
      <div class="insights-divider"></div>
    </header>

    <!-- Main Container -->
    <div class="team-container">
      <aside class="team-sidebar">
        <ul class="tab-list" 
            ref="tabListRef" 
            :style="{ '--active-index': activeIndex }"
            @mousedown="startDragging"
            @mouseleave="stopDragging"
            @mouseup="stopDragging"
            @mousemove="onDragging">
          <li v-for="(tab, index) in tabs" :key="tab"
              class="tab-item"
              :class="{ active: activeTab === tab }"
              @click="selectTab(tab, index)"
              :ref="el => { if (el) tabRefs[index] = el }">
            {{ tab }}
          </li>
          <div class="mobile-slider" :style="{ transform: `translateX(${indicatorLeft}px)`, width: `${indicatorWidth}px` }"></div>
        </ul>
      </aside>
      
      <main class="team-content">
        <div class="articles-list">
          <div v-for="article in paginatedArticles" :key="article.id" class="article-card">
            <div class="article-image-box">
              <img :src="article.image" :alt="article.title" class="article-img" />
            </div>
            <div class="article-info">
              <div class="article-text">
                <h2 class="article-title">{{ article.title }}</h2>
                <p class="article-date">{{ article.date }}</p>
                <p class="article-excerpt">{{ article.excerpt }}</p>
              </div>
              <button class="article-btn">
                查看更多 <span class="arrow">></span>
              </button>
            </div>
          </div>
          
          <div v-if="filteredArticles.length === 0" class="placeholder-section">
            <p style="color: #999;">內容建置中...</p>
          </div>
        </div>

        <!-- Pagination -->
        <div class="pagination-container">
          <button class="page-arrow" :disabled="currentPage === 1" @click="changePage(currentPage - 1)">&lt;</button>
          
          <button v-for="page in displayTotalPages" :key="page"
                  class="page-num"
                  :class="{ active: currentPage === page }"
                  @click="changePage(page)">
            {{ String(page).padStart(2, '0') }}
          </button>
          
          <button class="page-arrow" :disabled="currentPage === displayTotalPages" @click="changePage(currentPage + 1)">&gt;</button>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick, watch } from 'vue';
import { useRoute } from 'vue-router';
import { mockArticles } from '../data/articles';

const route = useRoute();
const isMenuOpen = ref(false);

const tabs = ['全部知識', '刑事知識', '民事知識', '家事知識', '詐欺知識'];
const activeTab = ref('全部知識');
const activeIndex = ref(0);

const tabRefs = ref([]);
const tabListRef = ref(null);
const indicatorLeft = ref(0);
const indicatorWidth = ref(0);

// Drag scroll logic
const isDragging = ref(false);
const startX = ref(0);
const scrollLeft = ref(0);

const startDragging = (e) => {
  isDragging.value = true;
  startX.value = e.pageX - tabListRef.value.offsetLeft;
  scrollLeft.value = tabListRef.value.scrollLeft;
};

const stopDragging = () => {
  isDragging.value = false;
};

const onDragging = (e) => {
  if (!isDragging.value) return;
  e.preventDefault();
  const x = e.pageX - tabListRef.value.offsetLeft;
  const walk = (x - startX.value) * 2;
  tabListRef.value.scrollLeft = scrollLeft.value - walk;
};

// Update Indicator
const updateMobileIndicator = (index) => {
  if (tabRefs.value[index]) {
    indicatorLeft.value = tabRefs.value[index].offsetLeft;
    indicatorWidth.value = tabRefs.value[index].offsetWidth;
    
    if (tabListRef.value && window.innerWidth <= 768) {
      const tabList = tabListRef.value;
      const tab = tabRefs.value[index];
      const scrollPos = tab.offsetLeft - (tabList.offsetWidth / 2) + (tab.offsetWidth / 2);
      tabList.scrollTo({ left: scrollPos, behavior: 'smooth' });
    }
  }
};

const selectTab = async (tab, index) => {
  activeTab.value = tab;
  activeIndex.value = index;
  currentPage.value = 1;
  
  await nextTick();
  updateMobileIndicator(index);
};

const handleResize = () => {
  updateMobileIndicator(activeIndex.value);
};

// Pagination Logic
const currentPage = ref(1);
const pageSize = 3;

const filteredArticles = computed(() => {
  if (activeTab.value === '全部知識') {
    return mockArticles;
  }
  return mockArticles.filter(a => a.category === activeTab.value);
});

const totalPages = computed(() => {
  return Math.ceil(filteredArticles.value.length / pageSize);
});

const displayTotalPages = computed(() => {
  return Math.max(1, totalPages.value);
});

const paginatedArticles = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  const end = start + pageSize;
  return filteredArticles.value.slice(start, end);
});

const changePage = (page) => {
  if (page < 1 || page > displayTotalPages.value) return;
  currentPage.value = page;
  
  const yOffset = window.innerWidth <= 768 ? -90 : -40;
  const element = document.querySelector('.team-container');
  if (element) {
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

watch(() => route.query.tab, (newTab) => {
  if (newTab && tabs.includes(newTab)) {
    activeTab.value = newTab;
    activeIndex.value = tabs.indexOf(newTab);
  } else if (!newTab) {
    activeTab.value = '全部知識';
    activeIndex.value = 0;
  }
  currentPage.value = 1;
  nextTick(() => {
    updateMobileIndicator(activeIndex.value);
  });
});

onMounted(() => {
  const queryTab = route.query.tab;
  if (queryTab && tabs.includes(queryTab)) {
    activeTab.value = queryTab;
    activeIndex.value = tabs.indexOf(queryTab);
  }
  
  setTimeout(() => {
    updateMobileIndicator(activeIndex.value);
  }, 100);
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;600;700&family=Noto+Serif+TC:wght@400;500;600;700&family=Playfair+Display:wght@500;700&display=swap');

.insights-page {
  font-family: 'Noto Serif TC', serif;
  min-height: 100vh;
  background-color: #ffffff;
}

.navbar-dark {
  background-color: #34324E;
  padding: 1rem 0;
  width: 100%;
  position: relative;
  z-index: 100;
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.navbar-brand {
  display: flex;
  align-items: center;
}

.navbar-logo {
  height: 50px;
  width: auto;
  display: block;
}

.desktop-menu {
  display: flex;
  align-items: center;
  flex: 1;
}

.navbar-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
  flex: 1;
  justify-content: center;
}

.navbar-link {
  color: #fff;
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.3s ease;
}

.navbar-link:hover,
.navbar-link.router-link-active {
  color: #CE7A49;
}

.cta-button {
  background-color: #CE7A49;
  color: #fff;
  border: none;
  padding: 0.55rem 1.2rem;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background-color: #b86a3a;
}

.mobile-menu-btn {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 101;
}

.hamburger-line {
  width: 100%;
  height: 2px;
  background-color: #fff;
  transition: all 0.3s ease;
}

/* Breadcrumb Styling */
.breadcrumb-container {
  max-width: 1200px;
  margin: 2.5rem auto 0;
  padding: 0 2rem;
}

.breadcrumb-inner {
  text-align: left;
  font-size: 0.9rem;
  color: #888;
}

.breadcrumb-link {
  color: #888;
  text-decoration: none;
  transition: color 0.3s;
}

.breadcrumb-link:hover {
  color: #CE7A49;
}

.breadcrumb-separator {
  margin: 0 0.5rem;
  color: #ccc;
}

.breadcrumb-active {
  color: #34324E;
  font-weight: 500;
}

/* Page Header */
.insights-header {
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 4rem;
}

.insights-subtitle {
  color: #CE7A49;
  font-family: 'Playfair Display', serif;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.25em;
  margin-bottom: 0.5rem;
}

.insights-title {
  color: #34324E;
  font-size: 2.25rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: 0.05em;
}

.insights-divider {
  width: 40px;
  height: 2px;
  background-color: #CE7A49;
  margin: 1.25rem auto 0;
}

/* Main Container Layout */
.team-container {
  display: flex;
  max-width: 1200px;
  margin: 4rem auto 0;
  padding: 0 2rem;
  gap: 4rem;
  align-items: flex-start;
}

.team-sidebar {
  width: 200px;
  flex-shrink: 0;
  position: sticky;
  top: 100px;
  height: max-content;
  align-self: flex-start;
}

.tab-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  position: relative;
  padding-left: 1.5rem;
}

.tab-list::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 3px;
  background-color: #f0f0f0;
  z-index: 1;
}

.tab-list::after {
  content: '';
  position: absolute;
  top: -8px;
  left: 0;
  width: 3px;
  height: 40px;
  background-color: #CE7A49;
  z-index: 2;
  transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  transform: translateY(calc(var(--active-index) * (24px + 2.5rem)));
}

.tab-item {
  font-size: 1.1rem;
  color: #888;
  cursor: pointer;
  transition: color 0.3s ease;
  font-weight: 500;
  letter-spacing: 0.05em;
  height: 24px;
  line-height: 24px;
  margin: 0;
  padding: 0;
  text-align: left;
}

.tab-item:hover {
  color: #555;
}

.tab-item.active {
  color: #CE7A49;
}

.team-content {
  flex: 1;
}

.mobile-slider {
  display: none;
}

/* Articles List CSS */
.articles-list {
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
}

.article-card {
  display: flex;
  gap: 3rem;
  align-items: flex-start;
  padding-bottom: 3.5rem;
  border-bottom: 1px solid #eee;
}

.article-card:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.article-image-box {
  width: 380px;
  height: 240px;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 4px;
  background-color: #f5f5f5;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.article-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.article-card:hover .article-img {
  transform: scale(1.03);
}

.article-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 240px; /* 同高 */
  text-align: left;
}

.article-text {
  width: 100%;
}

.article-title {
  color: #34324E;
  font-size: 1.45rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  line-height: 1.4;
  letter-spacing: 0.05em;
  transition: color 0.3s;
}

.article-title:hover {
  color: #CE7A49;
}

.article-date {
  color: #888;
  font-size: 0.9rem;
  margin: 0 0 1.2rem 0;
  font-family: 'Playfair Display', serif;
}

.article-excerpt {
  color: #666;
  font-size: 1rem;
  line-height: 1.8;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: justify;
}

.article-btn {
  background-color: #CE7A49;
  color: #fff;
  border: none;
  padding: 0.65rem 1.5rem;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  align-self: flex-end;
  box-shadow: 0 4px 10px rgba(206, 122, 73, 0.15);
}

.article-btn:hover {
  background-color: #b86a3a;
  transform: translateY(-1px);
}

.article-btn .arrow {
  font-family: monospace;
}

.placeholder-section {
  padding: 6rem 0;
  text-align: center;
}

/* Pagination Styling */
.pagination-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  margin-top: 5rem;
  margin-bottom: 2rem;
}

.page-arrow,
.page-num {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
  background-color: #fff;
  border: 1px solid #ddd;
  color: #555;
  font-family: 'Playfair Display', serif;
}

.page-num.active {
  background-color: #34324E;
  border-color: #34324E;
  color: #fff;
}

.page-num:not(.active):hover,
.page-arrow:not(:disabled):hover {
  border-color: #CE7A49;
  color: #CE7A49;
}

.page-arrow:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

/* Mobile Responsive */
@media (max-width: 1024px) {
  .team-container {
    gap: 3rem;
  }
  
  .article-image-box {
    width: 320px;
    height: 200px;
  }
  
  .article-info {
    height: 200px;
  }
  
  .article-title {
    font-size: 1.3rem;
  }
}

@media (max-width: 768px) {
  .navbar-content {
    padding: 0 1.5rem;
  }
  
  .desktop-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #34324E;
    flex-direction: column;
    padding: 1.5rem 0 2rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
  
  .desktop-menu.is-open {
    display: flex;
  }
  
  .navbar-menu {
    flex-direction: column;
    width: 100%;
    text-align: center;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
  
  .mobile-menu-btn {
    display: flex;
  }

  .breadcrumb-container {
    margin-top: 1.5rem;
    padding: 0 1.5rem;
  }
  
  .insights-header {
    margin-bottom: 2rem;
  }
  
  .team-container {
    flex-direction: column;
    margin: 2rem auto 0;
    gap: 2rem;
    padding: 0 1.5rem;
  }
  
  .team-sidebar {
    width: 100%;
    position: sticky;
    top: 0;
    background-color: #ffffff;
    z-index: 20;
    padding-top: 1rem;
    margin-bottom: 1rem;
  }
  
  .team-sidebar::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background-color: #f0f0f0;
    z-index: 1;
  }
  
  .tab-list {
    flex-direction: row;
    overflow-x: auto;
    padding-bottom: 0.5rem;
    padding-left: 0;
    gap: 1.5rem;
    border-bottom: none;
    position: relative;
    z-index: 2;
    cursor: grab;
    user-select: none;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  
  .tab-list:active {
    cursor: grabbing;
  }
  
  .tab-list::-webkit-scrollbar {
    display: none;
  }
  
  .tab-list::before,
  .tab-list::after {
    display: none;
  }
  
  .tab-item {
    white-space: nowrap;
    padding-left: 0;
    padding-bottom: 0.5rem;
    height: auto;
    line-height: inherit;
  }
  
  .mobile-slider {
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    background-color: #CE7A49;
    z-index: 3;
    transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), width 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  }
  
  .articles-list {
    gap: 2.5rem;
  }
  
  .article-card {
    flex-direction: column;
    gap: 1.5rem;
    padding-bottom: 2.5rem;
  }
  
  .article-image-box {
    width: 100%;
    height: 220px;
  }
  
  .article-info {
    width: 100%;
    height: auto;
    gap: 1rem;
  }
  
  .article-btn {
    align-self: flex-start;
  }
  
  .pagination-container {
    margin-top: 3rem;
  }
}
</style>
