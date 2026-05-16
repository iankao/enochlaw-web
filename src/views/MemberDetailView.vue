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

    <div class="main-content">
      <div class="container">
        <!-- Back Button -->
        <router-link to="/member" class="back-link">
          <span class="arrow">←</span> 返回列表
        </router-link>

        <!-- Top Section: Photo & Basic Info -->
        <section class="profile-header">
          <div class="photo-column">
            <img :src="member.image" :alt="member.name" class="member-photo-large" />
          </div>
          <div class="info-column">
            <h4 class="category-label">{{ member.category }}</h4>
            <h1 class="member-name-main">{{ member.name }}</h1>
            <p class="english-name">{{ member.englishName }}</p>
            
            <div class="bio-paragraphs">
              <p v-for="(p, idx) in member.bio" :key="idx">{{ p }}</p>
            </div>
          </div>
        </section>

        <!-- Bottom Section: Detailed Info -->
        <section class="profile-details">
          <!-- Left: Specialties -->
          <div class="specialties-column">
            <h2 class="deco-title">專長</h2>
            <div class="specialty-grid">
              <span v-for="spec in member.specialties" :key="spec" class="spec-tag">{{ spec }}</span>
            </div>
          </div>

          <!-- Right: Lists -->
          <div class="lists-column">
            <!-- Education -->
            <div class="list-block" v-if="member.education?.length">
              <h2 class="deco-title">學歷背景</h2>
              <ul class="info-list">
                <li v-for="item in member.education" :key="item">{{ item }}</li>
              </ul>
            </div>

            <!-- Experience -->
            <div class="list-block" v-if="member.experience?.length">
              <h2 class="deco-title">經歷</h2>
              <ul class="info-list">
                <li v-for="item in member.experience" :key="item">{{ item }}</li>
              </ul>
            </div>

            <!-- Current Positions -->
            <div class="list-block" v-if="member.currentPositions?.length">
              <h2 class="deco-title">現職</h2>
              <ul class="info-list">
                <li v-for="item in member.currentPositions" :key="item">{{ item }}</li>
              </ul>
            </div>

            <!-- Publications -->
            <div class="list-block" v-if="member.publications?.length">
              <h2 class="deco-title">著作</h2>
              <ul class="info-list">
                <li v-for="item in member.publications" :key="item">{{ item }}</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>

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
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&family=Noto+Serif+TC:wght@400;500;600;700&family=Playfair+Display:wght@500;700&display=swap');

.member-detail-page {
  font-family: 'Noto Serif TC', serif;
  background-color: #fff;
  min-height: 100vh;
  color: #333;
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

.main-content {
  text-align: left;
}

/* Container */
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

/* Profile Header */
.profile-header {
  display: flex;
  gap: 6rem;
  margin-bottom: 5rem;
  align-items: flex-start;
}

.photo-column {
  width: 380px;
  flex-shrink: 0;
}

.member-photo-large {
  width: 100%;
  height: auto;
  display: block;
}

.info-column {
  flex: 1;
  padding-top: 2rem;
}

.category-label {
  color: #CE7A49;
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.member-name-main {
  font-size: 3.2rem;
  margin: 0 0 0.2rem 0;
  font-weight: 700;
  color: #333;
}

.english-name {
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
  color: #888;
  margin-bottom: 2.5rem;
  letter-spacing: 0.05em;
}

.bio-paragraphs {
  font-size: 1.05rem;
  line-height: 2;
  color: #444;
}

.bio-paragraphs p {
  margin-bottom: 1.5rem;
}

/* Profile Details */
.profile-details {
  display: flex;
  gap: 6rem;
}

.specialties-column {
  width: 380px;
  flex-shrink: 0;
}

.lists-column {
  flex: 1;
}

.deco-title {
  font-size: 1.1rem;
  color: #CE7A49;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  font-weight: 600;
}

.deco-title::before {
  content: '';
  width: 40px;
  height: 1px;
  background-color: #CE7A49;
}

/* Specialty Tags */
.specialty-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.spec-tag {
  background-color: #f5f5f5;
  color: #666;
  padding: 0.5rem 1.2rem;
  border-radius: 20px;
  font-size: 0.95rem;
  min-width: 90px;
  text-align: center;
}

/* Info Lists */
.list-block {
  margin-bottom: 4rem;
}

.info-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.info-list li {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 0.8rem;
}

/* Back Button */
.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #888;
  text-decoration: none;
  font-size: 0.95rem;
  margin-bottom: 3rem;
  transition: color 0.3s ease;
}

.back-link:hover {
  color: #CE7A49;
}

.back-link .arrow {
  transition: transform 0.3s ease;
}

.back-link:hover .arrow {
  transform: translateX(-5px);
}

/* Mobile Responsive */
@media (max-width: 992px) {
  .profile-header, .profile-details {
    flex-direction: column;
    gap: 3rem;
  }
  
  .photo-column, .specialties-column {
    width: 100%;
    max-width: 100%;
    margin: 0;
  }
  
  .info-column {
    padding-top: 0;
    text-align: left;
  }
  
  .member-name-main {
    font-size: 2.5rem;
  }
  
  .bio-paragraphs {
    text-align: left;
  }
  
  .deco-title {
    justify-content: flex-start;
  }
  
  .specialty-grid {
    justify-content: flex-start;
  }
  
  .info-list {
    text-align: left;
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
</style>
