<template>
  <div class="cases-page">
    <!-- Navbar (與 EnochMemberView/LegalInsightsView 保持一致) -->
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
            <li><router-link to="/insights" class="navbar-link" :class="{ 'router-link-active': $route.path.startsWith('/insights') }">法律專欄</router-link></li>
            <li><router-link to="/cases" class="navbar-link" :class="{ 'router-link-active': $route.path.startsWith('/cases') }">勝訴案例</router-link></li>
            <li><a href="#" class="navbar-link">時事影音</a></li>
            <li><a href="#" class="navbar-link">案件查詢</a></li>
            <li><router-link to="/zoom" class="navbar-link" :class="{ 'router-link-active': $route.path.startsWith('/zoom') }">下載zoom</router-link></li>
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
        <span class="breadcrumb-active">勝訴案例</span>
      </div>
    </div>

    <!-- Header Section -->
    <header class="cases-header">
      <p class="cases-subtitle">Success Story</p>
      <h1 class="cases-title">勝訴案例</h1>
      <div class="cases-divider"></div>
    </header>

    <!-- Category Filters Section (如設計圖) -->
    <section class="filters-section">
      <div class="filters-container">
        <button v-for="tab in tabs" :key="tab"
                class="filter-btn"
                :class="{ active: activeTab === tab }"
                @click="selectTab(tab)">
          {{ tab }}
        </button>
      </div>
    </section>

    <!-- Cases Content Section -->
    <main class="cases-main-container">
      <div class="cases-grid">
        <div v-for="item in paginatedCases" :key="item.id" class="case-card">
          <div class="case-image-box">
            <img :src="item.image" :alt="item.title" class="case-img" />
            <div class="case-tag">{{ item.category }}</div>
          </div>
          <div class="case-info">
            <div class="case-meta">
              <span class="case-date">{{ item.date }}</span>
              <span class="case-result-badge">{{ item.result.split('，')[0] }}</span>
            </div>
            <h2 class="case-card-title">{{ item.title }}</h2>
            <p class="case-excerpt">{{ item.excerpt }}</p>
            <button class="case-action-btn" @click="openModal(item)">
              閱讀完整策略與結果 <span class="arrow">→</span>
            </button>
          </div>
        </div>
        
        <div v-if="filteredCases.length === 0" class="placeholder-section">
          <p style="color: #999;">內容建置中...</p>
        </div>
      </div>

      <!-- Pagination -->
      <div class="pagination-container" v-if="filteredCases.length > 0">
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

    <!-- Case Detail Modal -->
    <Transition name="modal-fade">
      <div class="case-modal-overlay" v-if="selectedCase" @click.self="closeModal">
        <div class="case-modal-content">
          <button class="modal-close-btn" @click="closeModal">&times;</button>
          
          <div class="modal-header">
            <span class="modal-tag">{{ selectedCase.category }}</span>
            <span class="modal-date">{{ selectedCase.date }}</span>
            <h2 class="modal-title">{{ selectedCase.title }}</h2>
          </div>
          
          <div class="modal-body">
            <div class="modal-section result-section">
              <h3 class="section-title">勝訴結果</h3>
              <div class="result-box">
                <svg class="success-icon" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <p class="result-text">{{ selectedCase.result }}</p>
              </div>
            </div>
            
            <div class="modal-section">
              <h3 class="section-title">案情簡介</h3>
              <p class="section-content">{{ selectedCase.excerpt }}</p>
            </div>
            
            <div class="modal-section strategy-section">
              <h3 class="section-title">以諾專業策略與答辯</h3>
              <p class="section-content">{{ selectedCase.strategy }}</p>
            </div>
          </div>

          <div class="modal-footer">
            <button class="modal-action-btn" @click="closeModal">關閉視窗</button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, nextTick } from 'vue';
import { useRoute } from 'vue-router';
import { mockCases } from '../data/cases';

const route = useRoute();
const isMenuOpen = ref(false);

const tabs = ['全部案例', '刑事案例', '民事案例', '家事案例', '詐欺案例'];
const activeTab = ref('全部案例');

// Pagination Setup
const currentPage = ref(1);
const pageSize = 6;

// Modal Setup
const selectedCase = ref(null);

const filteredCases = computed(() => {
  if (activeTab.value === '全部案例') {
    return mockCases;
  }
  return mockCases.filter(c => c.category === activeTab.value);
});

const totalPages = computed(() => {
  return Math.ceil(filteredCases.value.length / pageSize);
});

const displayTotalPages = computed(() => {
  return Math.max(1, totalPages.value);
});

const paginatedCases = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  const end = start + pageSize;
  return filteredCases.value.slice(start, end);
});

const selectTab = (tab) => {
  activeTab.value = tab;
  currentPage.value = 1;
};

const changePage = (page) => {
  if (page < 1 || page > displayTotalPages.value) return;
  currentPage.value = page;
  
  const element = document.querySelector('.filters-section');
  if (element) {
    const y = element.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

const openModal = (item) => {
  selectedCase.value = item;
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  selectedCase.value = null;
  document.body.style.overflow = '';
};

// Watch query parameters to sync category selection
watch(() => route.query.tab, (newTab) => {
  if (newTab && tabs.includes(newTab)) {
    activeTab.value = newTab;
  } else {
    activeTab.value = '全部案例';
  }
  currentPage.value = 1;
});

onMounted(() => {
  const queryTab = route.query.tab;
  if (queryTab && tabs.includes(queryTab)) {
    activeTab.value = queryTab;
  }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;600;700&family=Noto+Serif+TC:wght@400;500;600;700&family=Playfair+Display:wght@500;700&display=swap');

.cases-page {
  font-family: 'Noto Serif TC', serif;
  min-height: 100vh;
  background-color: #ffffff;
  padding-bottom: 6rem;
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
.cases-header {
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 3rem;
}

.cases-subtitle {
  color: #CE7A49;
  font-family: 'Playfair Display', serif;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.25em;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
}

.cases-title {
  color: #34324E;
  font-size: 2.25rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: 0.05em;
}

.cases-divider {
  width: 40px;
  height: 2px;
  background-color: #CE7A49;
  margin: 1.25rem auto 0;
}

/* Filters Section (如設計圖) */
.filters-section {
  display: flex;
  justify-content: center;
  padding: 1rem 2rem;
  margin-bottom: 3.5rem;
}

.filters-container {
  display: flex;
  gap: 1.2rem;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1000px;
}

.filter-btn {
  background-color: #34324E;
  color: #ffffff;
  border: none;
  padding: 0.75rem 1.75rem;
  font-size: 1.05rem;
  font-weight: 500;
  font-family: 'Noto Serif TC', serif;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 120px;
  text-align: center;
}

.filter-btn:hover {
  background-color: #4b486e;
}

.filter-btn.active {
  background-color: #CE7A49;
  color: #ffffff;
}

/* Cases Grid Layout */
.cases-main-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.cases-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
}

.case-card {
  background-color: #ffffff;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
}

.case-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  border-color: rgba(206, 122, 73, 0.25);
}

.case-image-box {
  width: 100%;
  height: 200px;
  position: relative;
  overflow: hidden;
  background-color: #f7f7f7;
}

.case-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.case-card:hover .case-img {
  transform: scale(1.04);
}

.case-tag {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: #CE7A49;
  color: #ffffff;
  padding: 0.3rem 0.8rem;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 4px;
}

.case-info {
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: left;
}

.case-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.case-date {
  color: #888;
  font-size: 0.85rem;
  font-family: 'Playfair Display', serif;
}

.case-result-badge {
  color: #CE7A49;
  font-size: 0.85rem;
  font-weight: 600;
  background-color: #FDF5F0;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
}

.case-card-title {
  color: #34324E;
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
  line-height: 1.4;
  height: 3.5rem; /* Allow 2 lines */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.case-excerpt {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0 0 1.5rem 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
  text-align: justify;
}

.case-action-btn {
  background: transparent;
  color: #CE7A49;
  border: none;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0;
  margin-top: auto;
  align-self: flex-start;
  transition: color 0.3s;
}

.case-action-btn:hover {
  color: #34324E;
}

.case-action-btn .arrow {
  transition: transform 0.3s;
}

.case-action-btn:hover .arrow {
  transform: translateX(4px);
}

.placeholder-section {
  grid-column: span 3;
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

/* Modal Popup Styles */
.case-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(52, 50, 78, 0.6);
  backdrop-filter: blur(4px);
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.case-modal-content {
  background-color: #ffffff;
  border-radius: 12px;
  width: 100%;
  max-width: 650px;
  max-height: 85vh;
  overflow-y: auto;
  box-shadow: 0 15px 45px rgba(0, 0, 0, 0.15);
  position: relative;
  display: flex;
  flex-direction: column;
  animation: modal-enter 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  padding: 3rem;
  box-sizing: border-box;
}

@keyframes modal-enter {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(15px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.modal-close-btn {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: transparent;
  border: none;
  font-size: 2rem;
  color: #888;
  cursor: pointer;
  line-height: 1;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s;
}

.modal-close-btn:hover {
  background-color: #f5f5f5;
  color: #333;
}

.modal-header {
  text-align: left;
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 1.5rem;
  margin-bottom: 2rem;
}

.modal-tag {
  background-color: #FDF5F0;
  color: #CE7A49;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  margin-right: 1rem;
}

.modal-date {
  color: #888;
  font-size: 0.9rem;
  font-family: 'Playfair Display', serif;
}

.modal-title {
  color: #34324E;
  font-size: 1.6rem;
  font-weight: 700;
  margin: 1.25rem 0 0 0;
  line-height: 1.4;
}

.modal-body {
  text-align: left;
  overflow-y: auto;
}

.modal-section {
  margin-bottom: 2rem;
}

.section-title {
  color: #CE7A49;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 0.8rem 0;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.section-title::before {
  content: '';
  width: 12px;
  height: 2px;
  background-color: #CE7A49;
  display: inline-block;
}

.section-content {
  color: #444;
  font-size: 1rem;
  line-height: 1.8;
  margin: 0;
  text-align: justify;
}

.result-box {
  background-color: #FDF5F0;
  border-left: 4px solid #CE7A49;
  padding: 1.2rem 1.5rem;
  border-radius: 0 8px 8px 0;
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
}

.success-icon {
  color: #CE7A49;
  flex-shrink: 0;
  margin-top: 2px;
}

.result-text {
  color: #CE7A49;
  font-weight: 700;
  font-size: 1.05rem;
  margin: 0;
  line-height: 1.5;
}

.strategy-section .section-content {
  background-color: #fafafa;
  border: 1px solid #f0f0f0;
  padding: 1.5rem;
  border-radius: 8px;
}

.modal-footer {
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
}

.modal-action-btn {
  background-color: #34324E;
  color: #ffffff;
  border: none;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.modal-action-btn:hover {
  background-color: #CE7A49;
}

/* Modal Fade Animation */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

/* Mobile Responsive */
@media (max-width: 1024px) {
  .cases-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
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
  
  .cases-header {
    margin-bottom: 2rem;
  }
  
  .filters-section {
    padding: 0.5rem 1rem;
    margin-bottom: 2rem;
  }
  
  .filters-container {
    gap: 0.8rem;
  }
  
  .filter-btn {
    padding: 0.6rem 1.2rem;
    font-size: 0.95rem;
    min-width: 100px;
  }
  
  .cases-main-container {
    padding: 0 1.5rem;
  }
  
  .cases-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .case-card-title {
    height: auto;
    max-height: 3.5rem;
  }
  
  .case-modal-content {
    padding: 2rem 1.5rem;
    max-height: 90vh;
  }
  
  .modal-title {
    font-size: 1.35rem;
  }
}
</style>
