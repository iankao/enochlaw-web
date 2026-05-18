<template>
  <div class="video-page">
    <!-- Navbar (與 SuccessfulCasesView/EnochMemberView/LegalInsightsView 保持一致) -->
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
            <li><router-link to="/video" class="navbar-link" :class="{ 'router-link-active': $route.path.startsWith('/video') }">時事影音</router-link></li>
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
        <span class="breadcrumb-active">時事影音</span>
      </div>
    </div>

    <!-- Header Section -->
    <header class="videos-header">
      <p class="videos-subtitle">Legal Explainer Videos</p>
      <h1 class="videos-title">時事影音</h1>
      <div class="videos-divider"></div>
    </header>

    <!-- Category Filters Section -->
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

    <!-- Videos Content Section -->
    <main class="videos-main-container">
      <div class="videos-grid">
        <div v-for="item in paginatedVideos" :key="item.id" class="video-card" @click="openVideo(item)">
          <!-- 9:16 Aspect Ratio cover box -->
          <div class="video-cover-box">
            <img :src="item.coverImage" :alt="item.title" class="video-img" />
            <div class="video-cover-gradient"></div>
            
            <!-- Firm Top Logo Overlay -->
            <div class="video-cover-logo">
              <img src="/images/enoch-logo-white.png" alt="Enoch Law" class="cover-logo-img" />
            </div>

            <!-- Video Center Caption Overlay -->
            <div class="video-cover-caption">
              <span class="caption-text">{{ item.textOverlay }}</span>
            </div>

            <!-- Hover Play Button overlay -->
            <div class="video-play-overlay">
              <div class="play-circle">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          </div>

          <!-- Bottom Meta & Title Panel -->
          <div class="video-info-box">
            <div class="video-meta">
              <span class="video-date">{{ item.date }}</span>
              <span class="video-category-tag">{{ item.category }}</span>
            </div>
            <h2 class="video-card-title">{{ item.title }}</h2>
          </div>
        </div>
        
        <div v-if="filteredVideos.length === 0" class="placeholder-section">
          <p style="color: #999;">內容建置中...</p>
        </div>
      </div>

      <!-- Pagination -->
      <div class="pagination-container" v-if="filteredVideos.length > 0">
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

    <!-- Glassmorphic Video Lightbox Modal -->
    <Transition name="modal-fade">
      <div class="video-modal-overlay" v-if="selectedVideo" @click.self="closeVideo">
        <div class="video-modal-content">
          <button class="modal-close-btn" @click="closeVideo">&times;</button>
          
          <!-- Portrait 9:16 YouTube Shorts Iframe Wrapper -->
          <div class="video-player-wrapper">
            <iframe 
              :src="embedUrl" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen>
            </iframe>
          </div>

          <!-- Lightbox Bottom Caption Info -->
          <div class="modal-video-info">
            <span class="modal-video-tag">{{ selectedVideo.category }}</span>
            <h3 class="modal-video-title">{{ selectedVideo.title }}</h3>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { mockVideos } from '../data/videos';

const route = useRoute();
const isMenuOpen = ref(false);

const tabs = ['全部影音', '刑事案例', '民事案例', '家事案例', '詐欺案例'];
const activeTab = ref('全部影音');

// Pagination Setup
const currentPage = ref(1);
const pageSize = 8; // 8 items for a beautiful 2-row grid of 4 columns

// Modal Setup
const selectedVideo = ref(null);

const filteredVideos = computed(() => {
  if (activeTab.value === '全部影音') {
    return mockVideos;
  }
  // Map standard video categories to corresponding data tag
  return mockVideos.filter(v => v.category === activeTab.value);
});

const totalPages = computed(() => {
  return Math.ceil(filteredVideos.value.length / pageSize);
});

const displayTotalPages = computed(() => {
  return Math.max(1, totalPages.value);
});

const paginatedVideos = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  const end = start + pageSize;
  return filteredVideos.value.slice(start, end);
});

const embedUrl = computed(() => {
  if (!selectedVideo.value) return '';
  // Convert standard shorts/videos to autoplaying embed url
  const id = selectedVideo.value.youtubeId;
  return `https://www.youtube.com/embed/${id}?autoplay=1&mute=0&rel=0&modestbranding=1&controls=1&showinfo=0`;
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

const openVideo = (item) => {
  selectedVideo.value = item;
  document.body.style.overflow = 'hidden';
};

const closeVideo = () => {
  selectedVideo.value = null;
  document.body.style.overflow = '';
};

// Sync tab with query parameters if present
watch(() => route.query.tab, (newTab) => {
  if (newTab && tabs.includes(newTab)) {
    activeTab.value = newTab;
  } else {
    activeTab.value = '全部影音';
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

.video-page {
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
.videos-header {
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 3rem;
}

.videos-subtitle {
  color: #CE7A49;
  font-family: 'Playfair Display', serif;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.25em;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
}

.videos-title {
  color: #34324E;
  font-size: 2.25rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: 0.05em;
}

.videos-divider {
  width: 40px;
  height: 2px;
  background-color: #CE7A49;
  margin: 1.25rem auto 0;
}

/* Filters Section */
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

/* Videos Grid Layout (4 columns like shorts gallery) */
.videos-main-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.videos-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.video-card {
  background-color: #ffffff;
  border: 1px solid #eaeaea;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
  display: flex;
  flex-direction: column;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
}

.video-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
  border-color: rgba(206, 122, 73, 0.3);
}

/* 9:16 aspect ratio box */
.video-cover-box {
  width: 100%;
  aspect-ratio: 9 / 16;
  position: relative;
  overflow: hidden;
  background-color: #1a1a2e;
}

.video-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.video-card:hover .video-img {
  transform: scale(1.06);
}

.video-cover-gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.1) 40%,
    rgba(0, 0, 0, 0.5) 75%,
    rgba(0, 0, 0, 0.8) 100%
  );
  z-index: 1;
}

/* Top Branding on Video Cover */
.video-cover-logo {
  position: absolute;
  top: 1.25rem;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  z-index: 2;
  pointer-events: none;
  opacity: 0.9;
}

.cover-logo-img {
  height: 24px;
  width: auto;
}

/* Big Video Caption in Middle-Bottom */
.video-cover-caption {
  position: absolute;
  bottom: 1.5rem;
  left: 1rem;
  right: 1rem;
  z-index: 2;
  text-align: center;
  pointer-events: none;
}

.caption-text {
  color: #ffffff;
  font-size: 1.15rem;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: 0.05em;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6), 0 0 10px rgba(0, 0, 0, 0.3);
  display: inline-block;
  font-family: 'Noto Sans TC', sans-serif;
  word-break: keep-all;
}

/* Hover Play Button */
.video-play-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  opacity: 0;
  transition: opacity 0.3s ease;
  background-color: rgba(52, 50, 78, 0.15);
}

.video-card:hover .video-play-overlay {
  opacity: 1;
}

.play-circle {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: rgba(206, 122, 73, 0.9);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform: scale(0.85);
}

.video-card:hover .play-circle {
  transform: scale(1);
}

.play-circle svg {
  margin-left: 2px;
}

/* Bottom metadata panel */
.video-info-box {
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  text-align: left;
}

.video-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.6rem;
}

.video-date {
  color: #888;
  font-size: 0.8rem;
  font-family: 'Playfair Display', serif;
}

.video-category-tag {
  color: #CE7A49;
  font-size: 0.8rem;
  font-weight: 600;
  background-color: #FDF5F0;
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
}

.video-card-title {
  color: #34324E;
  font-size: 1.05rem;
  font-weight: 700;
  margin: 0;
  line-height: 1.45;
  height: 2.9rem; /* Allow 2 lines */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-family: 'Noto Sans TC', sans-serif;
}

.placeholder-section {
  grid-column: span 4;
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

/* Glassmorphic Lightbox Modal Styles */
.video-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(52, 50, 78, 0.7);
  backdrop-filter: blur(8px);
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.video-modal-content {
  background-color: #ffffff;
  border-radius: 16px;
  width: 100%;
  max-width: 400px; /* Perfectly sized for a mobile screen width */
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  position: relative;
  display: flex;
  flex-direction: column;
  animation: modal-enter 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  box-sizing: border-box;
}

@keyframes modal-enter {
  from {
    opacity: 0;
    transform: scale(0.92) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.modal-close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  font-size: 1.5rem;
  color: #fff;
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
  z-index: 10;
}

.modal-close-btn:hover {
  background-color: rgba(206, 122, 73, 0.9);
  transform: rotate(90deg);
}

/* Responsive 9:16 Video Player Wrapper */
.video-player-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 9 / 16;
  background-color: #000;
}

.video-player-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.modal-video-info {
  padding: 1.5rem;
  text-align: left;
  background-color: #ffffff;
  border-top: 1px solid #f0f0f0;
}

.modal-video-tag {
  background-color: #FDF5F0;
  color: #CE7A49;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
}

.modal-video-title {
  color: #34324E;
  font-size: 1.15rem;
  font-weight: 700;
  margin: 0.75rem 0 0 0;
  line-height: 1.4;
  font-family: 'Noto Sans TC', sans-serif;
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

/* Mobile Responsive styling */
@media (max-width: 1200px) {
  .videos-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
}

@media (max-width: 900px) {
  .videos-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
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
  
  .videos-header {
    margin-bottom: 2rem;
  }
  
  .filters-section {
    padding: 0.5rem 1rem;
    margin-bottom: 2rem;
  }
  
  .filters-container {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 0.6rem;
    width: 100%;
    max-width: 480px;
    margin: 0 auto;
  }
  
  .filter-btn {
    padding: 0.65rem 0.4rem;
    font-size: 0.9rem;
    min-width: 0;
    width: 100%;
    grid-column: span 2;
  }
  
  .filter-btn:nth-child(4),
  .filter-btn:nth-child(5) {
    grid-column: span 3;
  }
  
  .videos-main-container {
    padding: 0 1.5rem;
  }
  
  .videos-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .caption-text {
    font-size: 0.95rem;
  }

  .video-card-title {
    font-size: 0.95rem;
    height: 2.7rem;
  }

  .video-modal-content {
    max-width: 320px;
  }

  .modal-video-title {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .videos-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .video-cover-box {
    aspect-ratio: 9 / 16;
  }
}
</style>
