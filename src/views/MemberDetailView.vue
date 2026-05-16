<template>
  <div class="member-detail-page" v-if="member">
    <!-- Navbar (與 EnochMemberView 保持一致) -->
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

    <!-- Back Button -->
    <div class="back-nav">
      <div class="container">
        <router-link to="/member" class="back-link">
          <span class="arrow">←</span> 返回團隊列表
        </router-link>
      </div>
    </div>

    <!-- Hero Section -->
    <section class="member-hero">
      <div class="container hero-flex">
        <div class="hero-image-box">
          <img :src="member.image" :alt="member.name" class="hero-image" />
          <div class="image-accent"></div>
        </div>
        <div class="hero-info">
          <h4 class="member-category">{{ member.category }}</h4>
          <h1 class="member-name">{{ member.name }}</h1>
          <h3 class="member-title-full">{{ member.title }}</h3>
          <div class="hero-divider"></div>
          <p class="member-quote" v-if="member.quote" v-html="member.quote.replace(/\n/g, '<br>')"></p>
        </div>
      </div>
    </section>

    <!-- Content Sections -->
    <section class="member-content">
      <div class="container">
        <div class="content-grid">
          <!-- Left Column: Bio -->
          <div class="bio-section">
            <h2 class="section-title">個人簡介</h2>
            <p class="bio-text">{{ member.bio }}</p>
          </div>

          <!-- Right Column: Details -->
          <div class="details-section">
            <!-- Education -->
            <div class="detail-block" v-if="member.education && member.education.length">
              <h4 class="detail-title">學歷</h4>
              <ul class="detail-list">
                <li v-for="edu in member.education" :key="edu">{{ edu }}</li>
              </ul>
            </div>

            <!-- Experience -->
            <div class="detail-block" v-if="member.experience && member.experience.length">
              <h4 class="detail-title">經歷</h4>
              <ul class="detail-list">
                <li v-for="exp in member.experience" :key="exp">{{ exp }}</li>
              </ul>
            </div>

            <!-- Specialties -->
            <div class="detail-block" v-if="member.specialties && member.specialties.length">
              <h4 class="detail-title">專長領域</h4>
              <div class="specialty-tags">
                <span v-for="spec in member.specialties" :key="spec" class="tag">{{ spec }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer Space -->
    <div class="footer-spacer"></div>
  </div>
  <div v-else class="not-found">
    <p>找不到該成員資訊</p>
    <router-link to="/member">返回團隊列表</router-link>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { teamMembers } from '../data/members';

const route = useRoute();
const isMenuOpen = ref(false);

const member = computed(() => {
  return teamMembers.find(m => m.id === route.params.id);
});

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;600;700&family=Noto+Serif+TC:wght@400;500;600;700&family=Playfair+Display:wght@500;700&display=swap');

.member-detail-page {
  font-family: 'Noto Serif TC', serif;
  background-color: #fff;
  min-height: 100vh;
}

/* Navbar */
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
}

/* Back Nav */
.back-nav {
  padding: 2rem 0;
  background-color: #f9f9f9;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
}

.back-link {
  color: #888;
  text-decoration: none;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s ease;
}

.back-link:hover {
  color: #CE7A49;
}

/* Hero Section */
.member-hero {
  padding: 4rem 0;
  background-color: #f9f9f9;
  border-bottom: 1px solid #eee;
}

.hero-flex {
  display: flex;
  gap: 5rem;
  align-items: center;
}

.hero-image-box {
  position: relative;
  width: 350px;
  flex-shrink: 0;
}

.hero-image {
  width: 100%;
  height: auto;
  display: block;
  z-index: 2;
  position: relative;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

.image-accent {
  position: absolute;
  top: -20px;
  left: -20px;
  width: 100px;
  height: 100px;
  border-top: 3px solid #CE7A49;
  border-left: 3px solid #CE7A49;
  z-index: 1;
}

.hero-info {
  flex: 1;
}

.member-category {
  color: #CE7A49;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
}

.member-name {
  font-size: 3rem;
  color: #333;
  margin: 0 0 0.5rem 0;
  font-weight: 700;
}

.member-title-full {
  font-size: 1.4rem;
  color: #666;
  margin: 0 0 2rem 0;
  font-weight: 500;
}

.hero-divider {
  width: 60px;
  height: 2px;
  background-color: #CE7A49;
  margin-bottom: 2rem;
}

.member-quote {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #555;
  font-style: italic;
  max-width: 500px;
}

/* Content Sections */
.member-content {
  padding: 5rem 0;
}

.content-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 6rem;
}

.section-title {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 2rem;
  position: relative;
  padding-bottom: 0.8rem;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30px;
  height: 2px;
  background-color: #CE7A49;
}

.bio-text {
  font-size: 1.1rem;
  line-height: 2;
  color: #555;
  text-align: justify;
}

.detail-block {
  margin-bottom: 3rem;
}

.detail-title {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 1.2rem;
  font-weight: 600;
  border-left: 3px solid #CE7A49;
  padding-left: 1rem;
}

.detail-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.detail-list li {
  font-size: 1rem;
  color: #666;
  margin-bottom: 0.8rem;
  padding-left: 1.2rem;
  position: relative;
}

.detail-list li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #CE7A49;
}

.specialty-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.tag {
  background-color: #f0f0f0;
  color: #555;
  padding: 0.4rem 1rem;
  border-radius: 4px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.tag:hover {
  background-color: #CE7A49;
  color: #fff;
}

.footer-spacer {
  height: 100px;
}

/* Responsive */
@media (max-width: 992px) {
  .hero-flex {
    flex-direction: column;
    gap: 3rem;
    text-align: center;
  }
  
  .hero-info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .content-grid {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
  
  .desktop-menu {
    display: none;
  }
  
  .mobile-menu-btn {
    display: flex;
  }
}

@media (max-width: 768px) {
  .member-name {
    font-size: 2.5rem;
  }
  
  .hero-image-box {
    width: 280px;
  }
}
</style>
