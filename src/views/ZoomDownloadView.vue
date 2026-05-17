<template>
  <div class="zoom-page">
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
            <li><router-link to="/insights" class="navbar-link">法律專欄</router-link></li>
            <li><a href="#" class="navbar-link">勝訴案例</a></li>
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
        <span class="breadcrumb-active">下載zoom</span>
      </div>
    </div>

    <!-- Header Section -->
    <header class="zoom-header">
      <p class="zoom-subtitle">Download ZOOM</p>
      <h1 class="zoom-title">下載ZOOM</h1>
      <div class="zoom-divider"></div>
      <p class="zoom-intro">
        為了提供您更便捷的法律諮詢服務，我們採用 Zoom 作為主要的視訊會議工具。<br />
        請依據您的裝置選擇合適的版本進行下載。
      </p>
    </header>

    <!-- Cards Container -->
    <div class="zoom-cards-container">
      <!-- Card 1: iOS -->
      <div class="zoom-card">
        <div class="zoom-icon-circle">
          <!-- Apple SVG Icon -->
          <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.69-1.12 1.83-.98 2.94.12.01.24.02.36.02.84 0 1.96-.54 2.45-1.35z" />
          </svg>
        </div>
        <h2 class="zoom-card-title">IOS下載</h2>
        <p class="zoom-card-subtitle">適用iPhone與iPad</p>
        <div class="zoom-qr-wrapper">
          <img src="/images/zoom-download-qr.png" alt="iOS Download QR Code" class="zoom-qr-img" />
        </div>
        <a href="https://apps.apple.com/us/app/zoom-one-platform-to-connect/id546505307" target="_blank" class="zoom-download-btn">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="btn-icon">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          APPLE STORE下載
        </a>
      </div>

      <!-- Card 2: Android -->
      <div class="zoom-card">
        <div class="zoom-icon-circle">
          <!-- Android SVG Icon -->
          <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
            <path d="M6 18c0 .55.45 1 1 1h1v3c0 .55.45 1 1 1s1-.45 1-1v-3h4v3c0 .55.45 1 1 1s1-.45 1-1v-3h1c.55 0 1-.45 1-1V9H6v9zm13-11h-2.58l1.62-2.28c.18-.25.13-.59-.12-.76-.25-.17-.59-.12-.76.13L15.3 6.64C14.34 6.22 13.23 6 12 6c-1.23 0-2.34.22-3.3.64L6.86 4.09c-.17-.25-.51-.3-.76-.13-.25.17-.3.51-.12.76L7.58 7H5c-1.1 0-2 .9-2 2v6c0 .55.45 1 1 1h1V9h14v7c0 .55.45 1 1 1s1-.45 1-1V9c0-1.1-.9-2-2-2zM9 11.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
          </svg>
        </div>
        <h2 class="zoom-card-title">Android下載</h2>
        <p class="zoom-card-subtitle">適用於各品牌安卓手機</p>
        <div class="zoom-qr-wrapper">
          <img src="/images/zoom-download-qr.png" alt="Android Download QR Code" class="zoom-qr-img" />
        </div>
        <a href="https://play.google.com/store/apps/details?id=us.zoom.videomeetings" target="_blank" class="zoom-download-btn">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="btn-icon">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Google Play下載
        </a>
      </div>

      <!-- Card 3: PC -->
      <div class="zoom-card">
        <div class="zoom-icon-circle">
          <!-- Laptop SVG Icon -->
          <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
            <path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" />
          </svg>
        </div>
        <h2 class="zoom-card-title">電腦版下載</h2>
        <p class="zoom-card-subtitle">適用於 Windows 與 macOS</p>
        <div class="zoom-qr-wrapper">
          <img src="/images/zoom-download-qr.png" alt="PC Download QR Code" class="zoom-qr-img" />
        </div>
        <a href="https://zoom.us/download" target="_blank" class="zoom-download-btn">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="btn-icon">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          官方網站下載
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;600;700&family=Noto+Serif+TC:wght@400;500;600;700&family=Playfair+Display:wght@500;700&display=swap');

.zoom-page {
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
.zoom-header {
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 4rem;
  padding: 0 2rem;
}

.zoom-subtitle {
  color: #CE7A49;
  font-family: 'Playfair Display', serif;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.25em;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
}

.zoom-title {
  color: #34324E;
  font-size: 2.25rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: 0.05em;
}

.zoom-divider {
  width: 40px;
  height: 2px;
  background-color: #CE7A49;
  margin: 1.25rem auto 0;
}

.zoom-intro {
  color: #666;
  font-size: 1.05rem;
  line-height: 2;
  text-align: center;
  max-width: 800px;
  margin: 2.5rem auto 0;
  font-weight: 500;
  letter-spacing: 0.03em;
}

/* Cards Layout */
.zoom-cards-container {
  display: flex;
  max-width: 1200px;
  margin: 5rem auto 0;
  padding: 0 2rem;
  gap: 2.5rem;
  justify-content: space-between;
}

.zoom-card {
  flex: 1;
  background-color: #ffffff;
  border-radius: 16px;
  border: 1px solid #eaeaea;
  padding: 3.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
  transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  position: relative;
}

.zoom-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.06);
  border-color: rgba(206, 122, 73, 0.2);
}

.zoom-icon-circle {
  width: 70px;
  height: 70px;
  background-color: #CE7A49;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  color: #ffffff;
}

.zoom-card-title {
  color: #34324E;
  font-size: 1.45rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
}

.zoom-card-subtitle {
  color: #888;
  font-size: 0.95rem;
  font-weight: 500;
  margin: 0 0 2.5rem 0;
}

.zoom-qr-wrapper {
  width: 170px;
  height: 170px;
  border: 1px solid #f0f0f0;
  border-radius: 12px;
  padding: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
  margin-bottom: 3rem;
}

.zoom-qr-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

.zoom-download-btn {
  width: 100%;
  background-color: #34324E;
  color: #ffffff;
  border: none;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(52, 50, 78, 0.15);
}

.zoom-download-btn:hover {
  background-color: #CE7A49;
  box-shadow: 0 6px 18px rgba(206, 122, 73, 0.25);
  transform: translateY(-1px);
}

.btn-icon {
  flex-shrink: 0;
}

/* Mobile Responsive */
@media (max-width: 1024px) {
  .zoom-cards-container {
    gap: 1.5rem;
    padding: 0 1.5rem;
  }
  
  .zoom-card {
    padding: 2.5rem 1.5rem;
  }
  
  .zoom-card-title {
    font-size: 1.3rem;
  }
}

@media (max-width: 768px) {
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
  
  .zoom-header {
    margin-bottom: 2.5rem;
  }
  
  .zoom-intro {
    font-size: 0.95rem;
    margin-top: 1.5rem;
    text-align: justify;
  }
  
  .zoom-cards-container {
    flex-direction: column;
    gap: 2.5rem;
    margin-top: 3rem;
  }
  
  .zoom-card {
    padding: 3rem 2rem;
  }
}
</style>
