<template>
  <div class="member-page">
    <nav class="navbar-dark">
      <div class="navbar-content">
        <div class="navbar-brand">
          <router-link to="/">
            <img src="/images/enoch-logo-white.png" alt="Enoch Logo" class="navbar-logo" />
          </router-link>
        </div>
        
        <div class="desktop-menu" :class="{ 'is-open': isMenuOpen }">
          <ul class="navbar-menu">
            <li><router-link to="/member" class="navbar-link">以諾團隊</router-link></li>
            <li><a href="#" class="navbar-link">法律專欄</a></li>
            <li><a href="#" class="navbar-link">勝訴案例</a></li>
            <li><a href="#" class="navbar-link">時事影音</a></li>
            <li><a href="#" class="navbar-link">案件查詢</a></li>
            <li><a href="#" class="navbar-link">下載zoom</a></li>
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
    
    <section class="hero-image-section">
      <img src="/images/enochmember-upper-bg.png" alt="Enoch Team Background" class="hero-bg-img" />
      <div class="hero-text-overlay">
        <p class="hero-subtitle">ENOCH MEMBERS</p>
        <h1 class="hero-title">以諾團隊</h1>
        <div class="hero-divider"></div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;600;700&family=Noto+Serif+TC:wght@400;500;600;700&family=Playfair+Display:wght@500;700&display=swap');

.member-page {
  font-family: 'Noto Serif TC', serif;
  min-height: 100vh;
  background-color: #f9f9f9;
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

.navbar-link:hover {
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
  background: none;
  border: none;
  cursor: pointer;
  flex-direction: column;
  gap: 6px;
  padding: 0.5rem;
}

.hamburger-line {
  display: block;
  width: 28px;
  height: 3px;
  background-color: #CE7A49;
  border-radius: 2px;
  transition: all 0.3s ease;
}

@media (max-width: 992px) {
  .desktop-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #34324E;
    flex-direction: column;
    padding: 1.5rem 0 2rem;
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
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
}

@media (max-width: 576px) {
  .navbar-content {
    padding: 0 1rem;
  }
  
  .navbar-logo {
    height: 40px;
  }
}

.hero-image-section {
  width: 100%;
  display: block;
  position: relative;
}

.hero-bg-img {
  width: 100%;
  height: auto;
  min-height: 350px; /* 當寬度縮小時，保持最低高度 */
  display: block;
  object-fit: cover; /* 確保圖片填滿並裁切左右 */
  object-position: center; /* 圖片保持置中 */
}

.hero-text-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 10;
  width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;
}

.hero-subtitle {
  color: #CE7A49;
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  margin: 0 0 0.5rem 0;
  font-family: 'Playfair Display', serif;
}

.hero-title {
  color: #fff;
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 1.5rem 0;
  letter-spacing: 0.1em;
  text-shadow: 0 2px 10px rgba(0,0,0,0.3);
}

.hero-divider {
  width: 50px;
  height: 3px;
  background-color: #CE7A49;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
    margin: 0 0 1rem 0;
  }
  .hero-subtitle {
    font-size: 1rem;
  }
}
</style>
