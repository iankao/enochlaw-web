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
        <!-- 所長區塊 -->
        <div class="member-section" :ref="el => { if (el) sectionRefs[0] = el }" id="section-0">
          <div class="member-list">
            <div class="member-card">
              <div class="member-photo">
                <img src="/images/ton-boss.png" alt="所長 童行" />
              </div>
              <div class="member-info">
                <h4 class="member-title">所長</h4>
                <h2 class="member-name">童行</h2>
                <div class="member-divider"></div>
                <p class="member-quote">
                  法律難關往往伴隨情緒焦慮；<br>
                  我們不只爭取權益，更致力於為你找回心中的平靜。
                </p>
              </div>
            </div>
            <div class="card-bottom-line"></div>
          </div>
        </div>

        <!-- 主任律師區塊 -->
        <div class="member-section" :ref="el => { if (el) sectionRefs[1] = el }" id="section-1">
          <div class="member-list">
            <div class="member-grid">
              <div class="member-grid-card">
                <div class="member-photo-square">
                  <img src="/images/big-lawyer001.png" alt="主任律師 林士為" />
                </div>
                <div class="member-grid-info">
                  <h4 class="member-title">主任律師</h4>
                  <h2 class="member-name">林士為</h2>
                </div>
              </div>
              
              <div class="member-grid-card">
                <div class="member-photo-square">
                  <img src="/images/big-lawyer002.png" alt="主任律師 黃俊凱" />
                </div>
                <div class="member-grid-info">
                  <h4 class="member-title">主任律師</h4>
                  <h2 class="member-name">黃俊凱</h2>
                </div>
              </div>
              
              <div class="member-grid-card">
                <div class="member-photo-square">
                  <img src="/images/big-lawyer003.png" alt="主任律師 徐子評" />
                </div>
                <div class="member-grid-info">
                  <h4 class="member-title">主任律師</h4>
                  <h2 class="member-name">徐子評</h2>
                </div>
              </div>
            </div>
            <div class="card-bottom-line"></div>
          </div>
        </div>
        
        <!-- 律師區塊佔位 -->
        <div class="member-section" :ref="el => { if (el) sectionRefs[2] = el }" id="section-2">
          <div class="member-list placeholder-section">
             <h4 class="member-title">律師</h4>
             <p style="color: #999;">內容建置中...</p>
             <div class="card-bottom-line"></div>
          </div>
        </div>
        
        <!-- 法務顧問區塊佔位 -->
        <div class="member-section" :ref="el => { if (el) sectionRefs[3] = el }" id="section-3">
          <div class="member-list placeholder-section">
             <h4 class="member-title">法務顧問</h4>
             <p style="color: #999;">內容建置中...</p>
             <div class="card-bottom-line"></div>
          </div>
        </div>
        
        <!-- 美國紐約律師區塊佔位 -->
        <div class="member-section" :ref="el => { if (el) sectionRefs[4] = el }" id="section-4">
          <div class="member-list placeholder-section">
             <h4 class="member-title">美國紐約律師</h4>
             <p style="color: #999;">內容建置中...</p>
             <div class="card-bottom-line"></div>
          </div>
        </div>
      </main>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';

const isMenuOpen = ref(false);

const tabs = ['所長', '主任律師', '律師', '法務顧問', '美國紐約律師'];
const activeTab = ref('所長');
const activeIndex = ref(0);

const tabRefs = ref([]);
const sectionRefs = ref([]);
const tabListRef = ref(null);
const indicatorLeft = ref(0);
const indicatorWidth = ref(0);
const isScrolling = ref(false); // 避免點擊滾動時觸發 Observer

// 拖曳捲動相關變數
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
  const walk = (x - startX.value) * 2; // 拖曳靈敏度
  tabListRef.value.scrollLeft = scrollLeft.value - walk;
};

const updateMobileIndicator = (index) => {
  if (tabRefs.value[index]) {
    indicatorLeft.value = tabRefs.value[index].offsetLeft;
    indicatorWidth.value = tabRefs.value[index].offsetWidth;
    
    // 自動捲動使目前標籤保持在畫面中央 (僅在手機模式)
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
  isScrolling.value = true;
  
  await nextTick();
  updateMobileIndicator(index);
  
  // 平滑滾動到對應區塊
  const section = sectionRefs.value[index];
  if (section) {
    const isMobile = window.innerWidth <= 768;
    const yOffset = isMobile ? -90 : -40; // 手機版需要預留更多空間給上方固定的選單
    const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
    
    // 延遲恢復 Observer 監聽，避免滾動途中觸發
    setTimeout(() => {
      isScrolling.value = false;
    }, 800);
  }
};

const handleResize = () => {
  updateMobileIndicator(activeIndex.value);
};

onMounted(() => {
  // 稍等 DOM 渲染完成後再計算
  setTimeout(() => {
    updateMobileIndicator(0);
  }, 100);

  // 設定 Intersection Observer 偵測畫面滾動
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px', // 當區塊進入畫面中上方時觸發
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    if (isScrolling.value) return; // 如果是點擊觸發的滾動，不更新狀態
    
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const index = sectionRefs.value.indexOf(entry.target);
        if (index !== -1 && activeIndex.value !== index) {
          activeTab.value = tabs[index];
          activeIndex.value = index;
          updateMobileIndicator(index);
        }
      }
    });
  }, observerOptions);

  // 監聽所有區塊
  setTimeout(() => {
    sectionRefs.value.forEach(section => {
      if (section) observer.observe(section);
    });
  }, 100);

  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
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

.team-container {
  display: flex;
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 2rem;
  gap: 4rem;
  align-items: flex-start; /* 讓 Sidebar 可以有 sticky 效果 */
}

.team-sidebar {
  width: 200px;
  flex-shrink: 0;
  position: sticky;
  top: 100px; /* 固定在距離視窗頂部的位置 */
  height: max-content;
  align-self: flex-start;
}

.tab-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 2.5rem; /* 增加選項間距以符合設計稿 */
  position: relative;
  padding-left: 1.5rem;
}

/* 軌道底線 */
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

/* 滑動的橘色指示器 */
.tab-list::after {
  content: '';
  position: absolute;
  top: -8px; /* 為了讓加長的線條垂直置中於文字 (40-24)/2 = 8 */
  left: 0; /* 與軌道完美貼齊 */
  width: 3px; /* 與軌道厚度一致 */
  height: 40px; /* 加長 */
  background-color: #CE7A49;
  z-index: 2; /* 確保在軌道上層 */
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

@media (max-width: 768px) {
  .team-container {
    flex-direction: column;
    margin: 2rem auto;
    gap: 2rem;
  }
  
  .team-sidebar {
    width: 100%;
    position: sticky;
    top: 0;
    background-color: #f9f9f9; /* 與背景色相同，避免往下滑動時文字重疊 */
    z-index: 20;
    padding-top: 1rem; /* 稍微留一點上方空間看起來更舒服 */
    margin-bottom: 1rem;
  }
  
  /* 手機版的灰色軌道，放在 wrapper 避免被 overflow 裁切 */
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
    border-bottom: none; /* 移除 border，改用上面的 ::after */
    position: relative; 
    z-index: 2; /* 確保選單與橘線在灰色軌道上層 */
    cursor: grab; /* 提示可拖曳 */
    user-select: none; /* 避免拖曳時反白選取到文字 */
    
    /* 隱藏醜醜的拖曳捲軸 */
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  
  .tab-list:active {
    cursor: grabbing;
  }
  
  .tab-list::-webkit-scrollbar {
    display: none;
  }
  
  /* 隱藏桌機版的垂直軌道與指示器 */
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
    bottom: 0; /* 剛好對齊底部的 padding，不會被裁切 */
    left: 0;
    height: 3px; /* 與軌道厚度一致 */
    background-color: #CE7A49;
    z-index: 3; /* 確保在最上層 */
    transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), width 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  }
}

.member-section {
  scroll-margin-top: 4rem; /* 確保透過 href 或 JS 滾動時預留空間 */
}

.placeholder-section {
  padding: 4rem 0;
}

/* 成員卡片樣式 */
.member-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.member-card {
  display: flex;
  gap: 3rem;
  align-items: center;
}

.member-photo {
  width: 250px;
  flex-shrink: 0;
  background-color: #f5f5f5; /* 淺灰色背景 */
  overflow: hidden;
}

.member-photo img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.member-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
}

.member-title {
  color: #CE7A49;
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0 0 0.5rem 0;
}

.member-name {
  color: #333;
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 1.2rem 0;
  letter-spacing: 0.1em;
}

.member-divider {
  width: 40px;
  height: 1px;
  background-color: #e0e0e0;
  margin: 0 0 1.5rem 0;
}

.member-quote {
  color: #666;
  font-size: 1rem;
  line-height: 1.8;
  margin: 0;
  letter-spacing: 0.05em;
}

.card-bottom-line {
  width: 100%;
  height: 1px;
  background-color: #eee;
  margin-top: 1.5rem; /* 配合 flex gap: 2rem，上方視覺總間距為 3.5rem */
  margin-bottom: 3.5rem; /* 下方間距 3.5rem，達成視覺平衡 */
}

/* 網格卡片樣式 (主任律師等) */
.member-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
}

.member-grid-card {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.member-photo-square {
  width: 100%;
  aspect-ratio: 1 / 1;
  background-color: #f5f5f5;
  overflow: hidden;
}

.member-photo-square img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.member-grid-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

@media (max-width: 992px) {
  .member-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .member-card {
    flex-direction: column;
    gap: 1.5rem;
    align-items: flex-start;
  }
  
  .member-photo {
    width: 100%;
    max-width: 280px;
  }
}

@media (max-width: 576px) {
  .member-grid {
    grid-template-columns: 1fr;
  }
}
</style>
