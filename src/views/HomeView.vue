<template>
  <header class="top-bar">
    <div class="top-bar-content">
      <div class="top-bar-left">
        <span class="phone">
          <img src="/images/phone-icon.svg" alt="Phone" class="phone-icon" />
          02-7755-7325
        </span>
      </div>
      <div class="top-bar-center">
        <span class="line">
          <img src="/images/line-icon.svg" alt="Line" class="line-icon" />
          @enoch
        </span>
      </div>
      <div class="top-bar-right">
        <img src="/images/location-icon.svg" alt="Location" class="location-icon" />
        <a href="#" class="link">新北｜桃園｜台中｜台南｜高雄</a>
      </div>
    </div>
  </header>

  <nav class="navbar">
    <div class="navbar-content">
      <div class="navbar-brand">
        <img src="/images/enoch-logo-black.png" alt="Enoch Logo" class="navbar-logo" />
      </div>
      <ul class="navbar-menu">
        <li><a href="#" class="navbar-link">以諾團隊</a></li>
        <li><a href="#" class="navbar-link">法律專欄</a></li>
        <li><a href="#" class="navbar-link">勝訴案例</a></li>
        <li><a href="#" class="navbar-link">時事影音</a></li>
        <li><a href="#" class="navbar-link">案件查詢</a></li>
        <li><a href="#" class="navbar-link">下載zoom</a></li>
      </ul>
      <button class="cta-button">免費諮詢</button>
    </div>
  </nav>

  <section class="hero-section">
    <div class="hero-content-box">
      <p class="hero-label">ENOCH ATTORNEYS-AT-LAW</p>
      <h1 class="hero-title">以諾法律，一諾千金</h1>
      <div class="hero-description-wrapper">
        <p class="hero-description">
          從法律預防到糾紛解決，我們以卓越的法律專業與誠信，為每位客戶爭取最公平的正義與最高的權益。
        </p>
      </div>
      <div class="hero-buttons">
        <button class="hero-btn primary">立即免費諮詢 <span class="btn-arrow">›</span></button>
        <button class="hero-btn secondary">了解更多服務 <span class="btn-arrow">›</span></button>
      </div>
    </div>
    <div class="hero-image-container">
      <img src="/images/tonton-on-phone.png" alt="Tonton on Phone" class="hero-image" />
      <div class="image-glow"></div>
    </div>
  </section>

  <div class="mobile-floating-btn">
    <div class="floating-content">
      <div class="floating-icon">⚖️</div>
      <span class="floating-text">免費諮詢</span>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;600;700&display=swap');

.top-bar {
  background-color: #34324E;
  padding: 0.75rem 0;
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  font-family: 'Noto Sans TC', sans-serif;
}

.top-bar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.top-bar-left,
.top-bar-center,
.top-bar-right {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.phone,
.line {
  color: #fff;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.phone-icon, .line-icon, .location-icon {
  height: 16px;
  width: 16px;
  display: block;
}

.top-bar-right {
  gap: 0.5rem;
}

.link {
  color: #fff;
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.3s ease;
}

.link:hover {
  color: #ccc;
}

.navbar {
  background-color: #fff;
  padding: 1rem 0;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  font-family: 'Noto Sans TC', sans-serif;
  border-bottom: 1px solid #f0f0f0;
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
  gap: 0.75rem;
}

.navbar-logo {
  height: 50px;
  width: auto;
  display: block;
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
  color: #333;
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.3s ease;
}

.navbar-link:hover {
  color: #CE7A49;
}

.cta-button {
  background-color: transparent;
  color: #CE7A49;
  border: 1px solid #CE7A49;
  padding: 0.55rem 1.2rem;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background-color: #CE7A49;
  color: #fff;
}

.hero-section {
  background-color: #34324E;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  gap: 4rem;
  min-height: 600px;
  overflow: hidden;
}

.hero-content-box {
  max-width: 550px;
  flex-shrink: 0;
  z-index: 2;
}

.hero-label {
  color: #CE7A49;
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
  letter-spacing: 0.15em;
}

.hero-title {
  color: #fff;
  font-size: 3rem;
  font-weight: 700;
  margin: 0 0 2rem 0;
  line-height: 1.2;
}

.hero-description-wrapper {
  border-left: 2px solid #CE7A49;
  padding-left: 1.5rem;
  margin-bottom: 2.5rem;
}

.hero-description {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
  line-height: 1.8;
  margin: 0;
}

.hero-buttons {
  display: flex;
  gap: 1.5rem;
}

.hero-btn {
  padding: 0.8rem 1.8rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border: none;
}

.btn-arrow {
  font-size: 1.2rem;
  margin-bottom: 2px;
}

.hero-btn.primary {
  background-color: #CE7A49;
  color: #fff;
}

.hero-btn.primary:hover {
  background-color: #b86a3a;
  transform: translateY(-2px);
}

.hero-btn.secondary {
  background-color: transparent;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.6);
}

.hero-btn.secondary:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-color: #fff;
  transform: translateY(-2px);
}

.hero-image-container {
  position: relative;
  flex-shrink: 0;
  z-index: 1;
}

.hero-image {
  height: auto;
  width: 35vw;
  max-width: 500px;
  object-fit: contain;
  display: block;
}

.image-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 140%;
  height: 140%;
  background: radial-gradient(circle, rgba(206, 122, 73, 0.1) 0%, transparent 70%);
  z-index: -1;
  pointer-events: none;
}

.mobile-floating-btn {
  display: none;
}

/* Responsive Styles */
@media (max-width: 1024px) {
  .hero-section {
    gap: 2rem;
  }
  .hero-title {
    font-size: 2.5rem;
  }
  .hero-image {
    width: 40vw;
  }
}

@media (max-width: 768px) {
  .top-bar-content, .navbar-content {
    padding: 0 1rem;
  }
  
  .navbar-menu, .top-bar-center, .cta-button {
    display: none;
  }

  .hero-section {
    flex-direction: column;
    padding: 4rem 1.5rem;
    gap: 3rem;
    align-items: flex-start;
  }

  .hero-content-box {
    max-width: 100%;
  }

  .hero-title {
    font-size: 2.25rem;
  }

  .hero-buttons {
    flex-direction: row;
    width: 100%;
  }

  .hero-btn {
    flex: 1;
    justify-content: center;
    padding: 0.8rem 1rem;
    font-size: 0.9rem;
  }

  .hero-image-container {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .hero-image {
    width: 85%;
    max-width: 400px;
  }

  .mobile-floating-btn {
    display: block;
    position: fixed;
    right: 0;
    top: 60%;
    transform: translateY(-50%);
    background-color: #fff;
    padding: 0.75rem 0.4rem;
    border-radius: 12px 0 0 12px;
    box-shadow: -4px 0 15px rgba(0,0,0,0.15);
    z-index: 100;
    cursor: pointer;
  }

  .floating-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .floating-icon {
    background-color: #CE7A49;
    color: #fff;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    box-shadow: 0 2px 5px rgba(206, 122, 73, 0.3);
  }

  .floating-text {
    writing-mode: vertical-rl;
    color: #CE7A49;
    font-weight: 600;
    letter-spacing: 0.3em;
    font-size: 0.85rem;
    margin-top: 0.25rem;
  }
}
</style>
