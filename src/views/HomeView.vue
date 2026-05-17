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
        <li><router-link to="/member" class="navbar-link">以諾團隊</router-link></li>
        <li><router-link to="/insights" class="navbar-link">法律專欄</router-link></li>
        <li><a href="#" class="navbar-link">勝訴案例</a></li>
        <li><a href="#" class="navbar-link">時事影音</a></li>
        <li><a href="#" class="navbar-link">案件查詢</a></li>
        <li><router-link to="/zoom" class="navbar-link">下載zoom</router-link></li>
      </ul>
      <button class="cta-button">免費諮詢</button>
    </div>
  </nav>

  <section class="hero-section">
    <div class="hero-container">
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
    </div>
  </section>

  <section class="about-section">
    <div class="about-header">
      <p class="about-label">ABOUT ENOCH</p>
      <h2 class="about-title">關於以諾</h2>
      <div class="title-underline"></div>
    </div>
    <div class="about-content">
      <div class="about-image-box">
        <img src="/images/handshake.png" alt="Handshake" class="about-image" />
      </div>
      <div class="about-text-box">
        <div class="about-text-inner">
          <p>以諾法律事務所所長童行律師，自台大法研畢業後致力於辦理跨國商務案件，協助跨國企業創設全台cp值最高的線上語言教學平台，另成功為客戶爭取到最困難的大法官憲法訴訟。</p>
          <p>而自疫情後，有感於現今台灣社會的動盪及亂象，我們集結各領域專業律師，致力於為民眾解決繁瑣的法律難題。</p>
          <p class="honor-text">*本所承蒙知名藝術家何懷碩教授題字，至感榮幸！</p>
        </div>
      </div>
    </div>
  </section>

  <section class="services-section">
    <div class="services-header">
      <p class="services-label">OUR SERVICES</p>
      <h2 class="services-title">服務項目</h2>
      <div class="title-underline"></div>
    </div>
    <div class="services-grid">
      <div class="service-item">
        <div class="service-icon-box">
          <img src="/images/home-service-item-01.svg" alt="家庭案件" class="service-icon" />
        </div>
        <h3 class="service-name">家庭案件</h3>
        <p class="service-desc">包括離婚、未成年子女親權、剩餘財產分配、外遇、扶養費等</p>
      </div>
      <div class="service-item">
        <div class="service-icon-box">
          <img src="/images/home-service-item-02.svg" alt="憲法訴訟" class="service-icon" />
        </div>
        <h3 class="service-name">憲法訴訟</h3>
        <p class="service-desc">包括離婚、未成年子女親權、剩餘財產分配、外遇、扶養費等</p>
      </div>
      <div class="service-item">
        <div class="service-icon-box">
          <img src="/images/home-service-item-03.svg" alt="借款案件" class="service-icon" />
        </div>
        <h3 class="service-name">借款案件</h3>
        <p class="service-desc">包括離婚、未成年子女親權、剩餘財產分配、外遇、扶養費等</p>
      </div>
      <div class="service-item">
        <div class="service-icon-box">
          <img src="/images/home-service-item-04.svg" alt="勞動案件" class="service-icon" />
        </div>
        <h3 class="service-name">勞動案件</h3>
        <p class="service-desc">包括離婚、未成年子女親權、剩餘財產分配、外遇、扶養費等</p>
      </div>
      <div class="service-item">
        <div class="service-icon-box">
          <img src="/images/home-service-item-05.svg" alt="車禍案件" class="service-icon" />
        </div>
        <h3 class="service-name">車禍案件</h3>
        <p class="service-desc">包括離婚、未成年子女親權、剩餘財產分配、外遇、扶養費等</p>
      </div>
      <div class="service-item">
        <div class="service-icon-box">
          <img src="/images/home-service-item-06.svg" alt="繼承爭議" class="service-icon" />
        </div>
        <h3 class="service-name">繼承爭議</h3>
        <p class="service-desc">包括離婚、未成年子女親權、剩餘財產分配、外遇、扶養費等</p>
      </div>
      <div class="service-item">
        <div class="service-icon-box">
          <img src="/images/home-service-item-07.svg" alt="刑事案件" class="service-icon" />
        </div>
        <h3 class="service-name">刑事案件</h3>
        <p class="service-desc">包括離婚、未成年子女親權、剩餘財產分配、外遇、扶養費等</p>
      </div>
      <div class="service-item">
        <div class="service-icon-box">
          <img src="/images/home-service-item-08.svg" alt="商務案件" class="service-icon" />
        </div>
        <h3 class="service-name">商務案件</h3>
        <p class="service-desc">包括離婚、未成年子女親權、剩餘財產分配、外遇、扶養費等</p>
      </div>
      <div class="service-item">
        <div class="service-icon-box">
          <img src="/images/home-service-item-09.svg" alt="企業法務顧問" class="service-icon" />
        </div>
        <h3 class="service-name">企業法務顧問</h3>
        <p class="service-desc">包括離婚、未成年子女親權、剩餘財產分配、外遇、扶養費等</p>
      </div>
      <div class="service-item">
        <div class="service-icon-box">
          <img src="/images/home-service-item-10.svg" alt="不動產、都更案件" class="service-icon" />
        </div>
        <h3 class="service-name">不動產、都更案件</h3>
        <p class="service-desc">包括離婚、未成年子女親權、剩餘財產分配、外遇、扶養費等</p>
      </div>
      <div class="service-item">
        <div class="service-icon-box">
          <img src="/images/home-service-item-11.svg" alt="其他案件" class="service-icon" />
        </div>
        <h3 class="service-name">其他案件</h3>
        <p class="service-desc">包括離婚、未成年子女親權、剩餘財產分配、外遇、扶養費等</p>
      </div>
    </div>
  </section>

  <section class="process-section">
    <div class="process-header">
      <p class="process-label">SERVICE PROCESS</p>
      <h2 class="process-title">服務流程</h2>
      <div class="title-underline"></div>
    </div>
    <div class="process-steps">
      <div class="process-step">
        <div class="step-circle">01</div>
        <p class="step-name">線上填表</p>
      </div>
      <div class="process-step">
        <div class="step-circle">02</div>
        <p class="step-name">電話預約</p>
      </div>
      <div class="process-step">
        <div class="step-circle">03</div>
        <p class="step-name">下載ZOOM</p>
      </div>
      <div class="process-step">
        <div class="step-circle">04</div>
        <p class="step-name">線上諮詢</p>
      </div>
    </div>
  </section>

  <section class="banner-image-section">
    <div class="banner-container">
      <img src="/images/hands-together.png" alt="Hands Together" class="banner-image" />
      <div class="partners-overlay">
        <div class="partners-left">
          <p class="partners-label">AFFILIATES & PARTNERS</p>
          <h2 class="partners-title">關係企業與合作夥伴</h2>
          <div class="title-underline"></div>
        </div>
        <div class="partners-right">
          <div class="partner-item">
            <div class="partner-logo-box"><img src="/images/partner-01.png" alt="外語吧" /></div>
            <div class="partner-info">
              <h3>外語吧</h3>
              <p>外語吧提供英日韓語會話與多元課程，結合專業師資，打造高效有趣的線上體驗。</p>
            </div>
          </div>
          <div class="partner-item">
            <div class="partner-logo-box"><img src="/images/partner-02.png" alt="解題吧" /></div>
            <div class="partner-info">
              <h3>解題吧</h3>
              <p>解題吧提供免費題庫與測驗，涵蓋多種目及各檢定各級，並有真人講師解析。</p>
            </div>
          </div>
          <div class="partner-item">
            <div class="partner-logo-box"><img src="/images/partner-03.png" alt="童童哥" /></div>
            <div class="partner-info">
              <h3>童童哥</h3>
              <p>法律不該有門檻｜提供真正免費法律協助弱勢免費諮詢＋書狀＋出庭支援。</p>
            </div>
          </div>
          <div class="partner-item">
            <div class="partner-logo-box"><img src="/images/partner-04.png" alt="玖月智權事務所" /></div>
            <div class="partner-info">
              <h3>玖月智權事務所</h3>
              <p>提供專利申請與智慧財產權服務，協助客戶保護創新成果並提升競爭力。</p>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-logos-bar">
        <div class="marquee-container">
          <div class="marquee-content">
            <!-- First set of logos -->
            <div v-for="(partner, index) in partners" :key="'p1-' + index" class="f-logo-item">
              <div class="f-logo-img-box">
                <img :src="partner.img" :alt="partner.name" class="img-grey" />
                <img :src="partner.img.replace('-grey', '')" :alt="partner.name" class="img-color" />
              </div>
              <span class="f-logo-name">{{ partner.name }}</span>
            </div>
            <!-- Duplicated set for seamless loop -->
            <div v-for="(partner, index) in partners" :key="'p2-' + index" class="f-logo-item">
              <div class="f-logo-img-box">
                <img :src="partner.img" :alt="partner.name" class="img-grey" />
                <img :src="partner.img.replace('-grey', '')" :alt="partner.name" class="img-color" />
              </div>
              <span class="f-logo-name">{{ partner.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  
</template>

<script setup>
import { ref } from 'vue';



const partners = [
  { name: 'Allpower', img: '/images/running-01-grey.png' },
  { name: '立達欣業', img: '/images/running-02-grey.png' },
  { name: '立傳媒', img: '/images/running-03-grey.png' },
  { name: '立達徵信', img: '/images/running-04-grey.png' },
  { name: '銀角零卡', img: '/images/running-05-grey.png' },
  { name: 'PayUNI', img: '/images/running-06-grey.png' },
  { name: '康華會計師事務所', img: '/images/running-07-grey.png' },
  { name: '台灣正念工坊', img: '/images/running-08-grey.png' },
  { name: '育德智慧財產事務所', img: '/images/running-09-grey.png' },
  { name: '法博思品牌顧問公司', img: '/images/running-10-grey.png' },
  { name: 'nomomarket', img: '/images/running-11-grey.png' },
  { name: '甩泰餐酒館', img: '/images/running-12-grey.png' },
  { name: '奈子光空間設計', img: '/images/running-13-grey.png' },
];
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;600;700&family=Noto+Serif+TC:wght@400;500;600;700&family=Playfair+Display:wght@500;700&display=swap');

.top-bar {
  background-color: #34324E;
  padding: 0.75rem 0;
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  font-family: 'Noto Serif TC', serif;
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
  width: 100%;
  font-family: 'Noto Serif TC', serif;
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

.navbar-link:hover,
.navbar-link.router-link-active {
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
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  min-height: 600px;
  overflow: hidden;
}

.hero-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  gap: 2rem;
}

.hero-content-box {
  max-width: 550px;
  flex: 1;
  z-index: 2;
  text-align: left; /* Ensure left alignment */
}

.hero-label {
  color: #CE7A49;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
  letter-spacing: 0.15em;
}

.hero-title {
  color: #fff;
  font-size: 2.75rem;
  font-weight: 700;
  margin: 0 0 2rem 0;
  line-height: 1.2;
  font-family: 'Playfair Display', serif;
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
  padding-right: 7vw;
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
    padding: 2rem 0rem;
  }

  .hero-container {
    flex-direction: column;
    gap: 3rem;
    align-items: flex-start;
    padding: 0 2rem;
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
    gap: 1rem;
  }

  .hero-btn {
    flex: 1;
    justify-content: center;
    padding: 0.7rem 0.8rem;
    font-size: 0.85rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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


}

.about-section {
  padding: 6rem 2rem;
  background-color: #fff;
  font-family: 'Noto Serif TC', serif;
}

.about-header {
  text-align: center;
  margin-bottom: 4rem;
}

.about-label {
  color: #CE7A49;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.25em;
  margin-bottom: 0.5rem;
  font-family: 'Playfair Display', serif;
}

.about-title {
  color: #34324E;
  font-size: 2.25rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: 0.05em;
}

.title-underline {
  width: 50px;
  height: 2px;
  background-color: #CE7A49;
  margin: 1.5rem auto 0;
}

.about-content {
  display: flex;
  max-width: 1100px;
  margin: 0 auto;
  align-items: stretch;
  box-shadow: 0 20px 40px rgba(0,0,0,0.08);
  border-radius: 4px;
  overflow: hidden;
}

.about-image-box {
  flex: 1.2;
  overflow: hidden;
}

.about-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.about-content:hover .about-image {
  transform: scale(1.05);
}

.about-text-box {
  flex: 1;
  background-color: #34324E;
  color: #fff;
  padding: 4rem;
  display: flex;
  align-items: center;
}

.about-text-inner p {
  font-size: 1.05rem;
  line-height: 2;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.9);
  text-align: justify;
}

.about-text-inner .honor-text {
  font-size: 0.9rem;
  margin-top: 3rem;
  margin-bottom: 0;
  color: rgba(255, 255, 255, 0.6);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1.5rem;
}

/* Responsive for About Section */
@media (max-width: 1024px) {
  .about-text-box {
    padding: 3rem;
  }
}

@media (max-width: 900px) {
  .about-content {
    flex-direction: column;
  }
  .about-image-box {
    height: 350px;
  }
  .about-image-box {
    flex: 1;
    width: 100%;
  }
  .about-section {
    padding: 4rem 1.5rem;
  }
}

.services-section {
  padding: 1rem 2rem;
  background-color: #fff;
  font-family: 'Noto Serif TC', serif;
  margin-bottom: 6rem;
}

.services-header {
  text-align: center;
  margin-bottom: 5rem;
}

.services-label {
  color: #CE7A49;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.25em;
  margin-bottom: 0.5rem;
  font-family: 'Playfair Display', serif;
}

.services-title {
  color: #34324E;
  font-size: 2.25rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: 0.05em;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.service-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.service-icon-box {
  width: 60px;
  height: 60px;
  background-color: #FDF5F0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
}

.service-icon {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

.service-item:hover .service-icon-box {
  background-color: #CE7A49;
  color: #fff;
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(206, 122, 73, 0.2);
}

.service-item:hover .service-icon {
  filter: brightness(0) invert(1);
}

.service-name {
  color: #34324E;
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 0 0.75rem 0;
}

.service-desc {
  color: #666;
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 0;
  max-width: 240px;
  text-align: left;
}

.process-section {
  padding: 6rem 2rem;
  background-color: #FDF5F0;
  font-family: 'Noto Serif TC', serif;
}

.process-header {
  text-align: center;
  margin-bottom: 5rem;
}

.process-label {
  color: #CE7A49;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.25em;
  margin-bottom: 0.5rem;
  font-family: 'Playfair Display', serif;
}

.process-title {
  color: #34324E;
  font-size: 2.25rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: 0.05em;
  font-family: 'Playfair Display', serif;
}

.process-steps {
  display: flex;
  justify-content: center;
  gap: 6rem;
  max-width: 1200px;
  margin: 0 auto;
}

.process-step {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.step-circle {
  width: 80px;
  height: 80px;
  background-color: #CE7A49;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  font-weight: 600;
  font-family: 'Playfair Display', serif;
  margin-bottom: 1.5rem;
  border: 4px solid #fff;
  box-shadow: 0 12px 30px rgba(78, 52, 46, 0.4), 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.process-step:hover .step-circle {
  transform: scale(1.1) rotate(5deg);
  background-color: #b86a3a;
  box-shadow: 0 15px 40px rgba(78, 52, 46, 0.5);
}

.step-name {
  color: #34324E;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.1em;
}

@media (max-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem 1.5rem;
  }
  .process-steps { gap: 3rem; }
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem 1rem;
  }
  .services-section {
    padding: 4rem 1rem;
  }
  .process-steps {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem 1rem;
  }
}

@media (max-width: 480px) {
  .services-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

.banner-image-section {
  width: 100%;
  overflow: hidden;
}

.banner-container {
  position: relative;
  width: 100%;
}

.banner-image {
  width: 100%;
  height: auto;
  display: block;
}

.partners-overlay {
  position: absolute;
  top: 30%;
  right: 0%;
  transform: translateY(-50%);
  width: 90%;
  max-width: 1100px;
  background: white;
  display: flex;
  box-shadow: 0 30px 60px rgba(0,0,0,0.4);
  border-radius: 4px;
  overflow: hidden;
}

.partners-left {
  flex: 1;
  background: #fff;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-right: 1px solid #eee;
}

.partners-label {
  color: #CE7A49;
  font-family: 'Playfair Display', serif;
  font-size: 0.95rem;
  letter-spacing: 0.2em;
  margin-bottom: 0.75rem;
  font-weight: 600;
}

.partners-title {
  color: #34324E;
  font-family: 'Playfair Display', serif;
  font-size: 1.85rem;
  margin-bottom: 1.5rem;
  line-height: 1.4;
}

.partners-right {
  flex: 2;
  background: #34324E;
  padding: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem 2rem;
}

.partner-item {
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
}

.partner-logo-box {
  width: 65px;
  height: 65px;
  background: white;
  border-radius: 6px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
}

.partner-logo-box img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.partner-info {
  text-align: left;
}

.partner-info h3 {
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 0.6rem 0;
  font-family: 'Playfair Display', serif;
}

.partner-info p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.8rem;
  line-height: 1.6;
  margin: 0;
}

.footer-logos-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(52, 50, 78, 0.95);
  padding: 2rem 0;
  z-index: 10;
  overflow: hidden;
}

.marquee-container {
  display: flex;
  width: 100%;
}

.marquee-content {
  display: flex;
  gap: 4rem;
  padding-right: 4rem;
  width: max-content;
  animation: marquee 40s linear infinite;
  white-space: nowrap;
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.f-logo-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 180px;
  gap: 1.25rem;
}

.f-logo-img-box {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.f-logo-img-box img {
  max-height: 100%;
  width: auto;
  transition: all 0.3s ease;
}

.img-grey {
  opacity: 0.8;
}

.img-color {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
}

.f-logo-item:hover .img-grey {
  opacity: 0;
  transform: scale(1.05);
}

.f-logo-item:hover .img-color {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1.05);
}

.f-logo-name {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.05em;
}

@media (max-width: 1024px) {
  .banner-container {
    min-height: 800px;
  }
  .banner-image {
    height: 100%;
    object-fit: cover;
  }
  .partners-overlay {
    flex-direction: column;
    width: 90%;
    top: 50%;
    left: 50%;
    right: auto;
    transform: translate(-50%, -50%);
  }
  .partners-left {
    padding: 2.5rem;
    border-right: none;
    border-bottom: 1px solid #eee;
  }
  .partners-right {
    padding: 2.5rem;
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .banner-container {
    min-height: 1000px;
  }
  .partners-right {
    grid-template-columns: 1fr;
    padding: 2rem;
  }
  .partners-title {
    font-size: 1.5rem;
  }
  .marquee-content {
    gap: 2rem;
    padding-right: 2rem;
  }
  .f-logo-item {
    min-width: 150px; /* 180px * 0.85 approx */
  }
  .f-logo-img-box {
    height: 34px; /* 40px * 0.85 */
  }
}


</style>
