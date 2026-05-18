<template>
  <div>
<section class="contact-section">
    <div class="contact-header">
      <p class="contact-label">CONTTACTS US</p>
      <h2 class="contact-title">聯絡我們</h2>
      <div class="title-underline"></div>
    </div>
    <div class="contact-grid">
      <div class="contact-card">
        <div class="contact-icon-box">
          <img src="/images/phone-icon.svg" alt="Phone" />
        </div>
        <div class="contact-info">
          <span class="info-label">服務電話</span>
          <span class="info-value">02-7755-7325</span>
        </div>
      </div>
      <div class="contact-card">
        <div class="contact-icon-box">
          <img src="/images/line-icon.svg" alt="Line" />
        </div>
        <div class="contact-info">
          <span class="info-label">LINE官方帳號</span>
          <span class="info-value">@enoch</span>
        </div>
      </div>
      <div class="contact-card email-card">
        <div class="contact-icon-box">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="email-icon"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
        </div>
        <div class="contact-info">
          <span class="info-label">Email</span>
          <span class="info-value">service@enoch.tw</span>
        </div>
      </div>
    </div>
    <div class="location-grid">
      <div class="location-image-box">
        <img src="/images/enoch-office.png" alt="Office Lobby" class="location-img" />
      </div>
      <div class="location-image-box">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.8090538605584!2d121.45878417604675!3d25.006608239396345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346802a73f18fe57%3A0x26d7728d3f67204e!2zMjIw5paw5YyX5biC5p2_6KmL5Y2A5pmv5pif6YeM6YeN6o626LevNjbomZ856ZOT5LmLMg!5e0!3m2!1szh-TW!2stw!4v1715068222955!5m2!1szh-TW!2stw"
          width="100%"
          height="100%"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>

  <section class="consultation-section">
    <div class="consultation-container">
      <!-- Left: Form Card -->
      <div class="consultation-form-card">
        <h3 class="form-title">線上立即免費法律諮詢</h3>
        <p class="form-subtitle">請填寫以下資訊，我們將由專家律師為您安排初次諮詢。</p>
        
        <form class="consultation-form">
          <div class="form-row">
            <div class="input-group name-group">
              <input type="text" placeholder="您的姓名" class="form-input" />
            </div>
            <div class="gender-toggle">
              <span class="toggle-label">稱呼</span>
              <button 
                type="button" 
                class="toggle-btn" 
                :class="{ active: selectedGender === '先生' }"
                @click="selectedGender = '先生'"
              >先生</button>
              <button 
                type="button" 
                class="toggle-btn" 
                :class="{ active: selectedGender === '小姐' }"
                @click="selectedGender = '小姐'"
              >小姐</button>
            </div>
          </div>
          
          <div class="form-row">
            <div class="input-group">
              <input type="text" placeholder="聯絡電話" class="form-input" />
            </div>
            <div class="input-group">
              <input type="email" placeholder="電子郵件" class="form-input" />
            </div>
          </div>
          
          <button type="submit" class="submit-btn">立即免費諮詢</button>
        </form>
      </div>

      <!-- Right: Locations Info -->
      <div class="locations-info">
        <div class="locations-header">
          <svg class="location-pin" viewBox="0 0 24 24" width="28" height="28" fill="#34324E"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
          <h2 class="locations-title">全台服務據點</h2>
        </div>
        <p class="locations-desc">
          除了便捷的線上諮詢，我們在全台設有實體服務據點。<br>
          無論是透過遠端方式靈活溝通，或於需要出庭、文件簽署及實體法律支援時，都能提供您最即時且完善的在地協助。
        </p>
        
        <div class="branches-grid">
          <div class="branch-item">
            <span class="accent-bar primary"></span>
            <div class="branch-content">
              <span class="branch-name">新北板橋總所</span>
              <p class="branch-address">新北市板橋區重慶路66號9樓之2</p>
            </div>
          </div>
          <div class="branch-item">
            <span class="accent-bar"></span>
            <div class="branch-content">
              <span class="branch-name">高雄所</span>
              <p class="branch-address">高雄市三民區九如二路583號5樓之1</p>
            </div>
          </div>
          <div class="branch-item">
            <span class="accent-bar"></span>
            <div class="branch-content">
              <span class="branch-name">桃園所（外語吧）</span>
              <p class="branch-address">桃園市桃園區縣府路110號4樓之2</p>
            </div>
          </div>
          <div class="branch-item">
            <span class="accent-bar"></span>
            <div class="branch-content">
              <span class="branch-name">台南所</span>
              <p class="branch-address">台南市中西區健康路一段420巷4號</p>
            </div>
          </div>
          <div class="branch-item">
            <span class="accent-bar"></span>
            <div class="branch-content">
              <span class="branch-name">臺中所</span>
              <p class="branch-address">台中市西屯區台灣大道二段910號11樓之5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="site-footer">
    <div class="footer-main">
      <div class="footer-inner">
        <!-- Left: Logo -->
        <div class="footer-brand">
          <img src="/images/enoch-logo-footer-white.png" alt="以諾法律事務所" class="footer-logo" />
        </div>

        <!-- Center: Nav Columns -->
        <div class="footer-nav">
          <div class="footer-nav-col">
            <p class="footer-nav-title">以諾團隊</p>
            <ul>
              <li><a href="#">所長</a></li>
              <li><a href="#">主任律師</a></li>
              <li><a href="#">律師</a></li>
              <li><a href="#">法務</a></li>
              <li><a href="#">美國紐約律師</a></li>
            </ul>
          </div>
          <div class="footer-nav-col">
            <p class="footer-nav-title">法律專欄</p>
            <ul>
              <li><router-link to="/insights">全部法律知識</router-link></li>
              <li><router-link :to="{ path: '/insights', query: { tab: '刑事知識' } }">刑事知識</router-link></li>
              <li><router-link :to="{ path: '/insights', query: { tab: '民事知識' } }">民事知識</router-link></li>
              <li><router-link :to="{ path: '/insights', query: { tab: '家事知識' } }">家事知識</router-link></li>
              <li><router-link :to="{ path: '/insights', query: { tab: '詐欺知識' } }">詐欺知識</router-link></li>
            </ul>
          </div>
          <div class="footer-nav-col">
            <p class="footer-nav-title">勝訴案例</p>
            <ul>
              <li><router-link to="/cases">全部勝訴案例</router-link></li>
              <li><router-link :to="{ path: '/cases', query: { tab: '刑事案例' } }">刑事案例</router-link></li>
              <li><router-link :to="{ path: '/cases', query: { tab: '民事案例' } }">民事案例</router-link></li>
              <li><router-link :to="{ path: '/cases', query: { tab: '家事案例' } }">家事案例</router-link></li>
              <li><router-link :to="{ path: '/cases', query: { tab: '詐欺案例' } }">詐欺案例</router-link></li>
            </ul>
          </div>
          <div class="footer-nav-col">
            <p class="footer-nav-title">時事影音</p>
            <ul>
              <li><a href="#">全部時事影音</a></li>
              <li><a href="#">刑事影音</a></li>
              <li><a href="#">民事影音</a></li>
              <li><a href="#">家事影音</a></li>
              <li><a href="#">詐欺影音</a></li>
            </ul>
          </div>
          <div class="footer-nav-col">
            <p class="footer-nav-title">案件查詢</p>
            <ul>
              <li><a href="#">登入</a></li>
            </ul>
          </div>
          <div class="footer-nav-col">
            <p class="footer-nav-title">下載zoom</p>
            <ul>
              <li><router-link to="/zoom">IOS下載</router-link></li>
              <li><router-link to="/zoom">Android下載</router-link></li>
              <li><router-link to="/zoom">電腦下載</router-link></li>
            </ul>
          </div>
          <div class="footer-nav-col">
            <p class="footer-nav-title">企業招募</p>
            <ul>
              <li><a href="#">104人才招募</a></li>
            </ul>
          </div>
        </div>

        <!-- Right: Buttons -->
        <div class="footer-actions">
          <a href="#" class="footer-login-btn">員工登入</a>
          <a href="#" class="footer-cta-btn">免費諮詢</a>
        </div>
      </div>
    </div>

    <!-- Footer Bottom Bar -->
    <div class="footer-bottom">
      <div class="footer-bottom-inner">
        <div class="footer-bottom-left">
          <!-- Row 1: LINE + Phone -->
          <div class="footer-contact-row">
            <span class="footer-contact-item">
              <img src="/images/line-icon.svg" alt="Line" class="footer-contact-icon" />
              @enoch
            </span>
            <span class="footer-contact-item">
              <img src="/images/phone-icon.svg" alt="Phone" class="footer-contact-icon" />
              02-7755-7325
            </span>
          </div>
          <!-- Row 2: Email -->
          <div class="footer-contact-row">
            <span class="footer-contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="footer-contact-icon"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              service@enoch.tw
            </span>
          </div>
        </div>
        <div class="footer-bottom-right">
          <a href="#" class="footer-social-icon" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="#" class="footer-social-icon" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>
          <a href="#" class="footer-social-icon" aria-label="YouTube">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>
          </a>
        </div>
      </div>
    </div>

    <!-- Copyright Bar -->
    <div class="copyright-bar">
      <div class="copyright-inner">
        <p>© 2026 以諾法律事務所 All Rights Reserved.</p>
      </div>
    </div>
  </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedGender = ref('先生');
</script>

<style scoped>
.contact-section {
  padding: 6rem 2rem;
  background-color: #F5F5F5;
  text-align: center;
  font-family: 'Noto Serif TC', serif;
}

.contact-header {
  margin-bottom: 4rem;
}

.contact-label {
  color: #CE7A49;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.25em;
  margin-bottom: 0.5rem;
  font-family: 'Playfair Display', serif;
}

.contact-title {
  color: #34324E;
  font-size: 2.25rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: 0.05em;
}

.contact-grid {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
}

.contact-card {
  background-color: #34324E;
  color: #fff;
  padding: 1.5rem 2rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  min-width: 280px;
  flex: 1;
  transition: transform 0.3s ease;
  box-sizing: border-box;
}

.contact-card:hover {
  transform: translateY(-5px);
}

.contact-icon-box {
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-icon-box img,
.email-icon {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

.email-icon {
  stroke: white;
}

.contact-info {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.info-label {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.25rem;
}

.info-value {
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: 0.05em;
}

@media (max-width: 1024px) {
  .contact-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
    padding: 0 1rem;
  }
  .contact-card {
    padding: 1rem 1.25rem;
    min-width: auto;
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  .contact-info {
    text-align: center;
  }
  .email-card {
    grid-column: span 2;
    padding: 1rem;
  }
  .info-label {
    font-size: 1.15rem;
    color: #fff;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
  .info-value {
    font-size: 1rem;
    opacity: 0.8;
  }
}

@media (max-width: 480px) {
  .contact-grid {
    gap: 0.75rem;
  }
  .contact-card {
    padding: 1.25rem 0.75rem;
  }
  .info-label {
    font-size: 1.05rem;
  }
  .info-value {
    font-size: 0.9rem;
  }
}

.location-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  max-width: 1200px;
  margin: 3rem auto 0;
}

.location-image-box {
  width: 100%;
  height: 400px;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.location-img,
.location-image-box iframe {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  display: block;
}

.location-image-box:hover .location-img {
  transform: scale(1.05);
}

@media (max-width: 1024px) {
  .location-grid {
    grid-template-columns: 1fr;
    margin-top: 2rem;
    padding: 0 1rem;
    gap: 1rem;
  }
  .location-image-box {
    height: 300px;
  }
}

.consultation-section {
  padding: 0rem 2rem;
  padding-bottom: 4rem;
  background-color: #F5F5F5;
  font-family: 'Noto Serif TC', serif;
}

.consultation-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 4rem;
  align-items: flex-start;
}

/* Form Card Styles */
.consultation-form-card {
  flex: 1;
  background: white;
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
}

.form-title {
  color: #34324E;
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  text-align: left;
}

.form-subtitle {
  color: #666;
  font-size: 0.95rem;
  margin-bottom: 2.5rem;
  text-align: left;
}

.consultation-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-row {
  display: flex;
  gap: 1rem;
}

.input-group {
  flex: 1;
}

.name-group {
  flex: 1.5;
}

.form-input {
  width: 100%;
  padding: 0.75rem 0;
  border: none;
  border-bottom: 1px solid #E0E0E0;
  background: transparent;
  font-size: 1rem;
  color: #34324E;
  transition: border-color 0.3s;
}

.form-input:focus {
  outline: none;
  border-bottom-color: #CE7A49;
}

.gender-toggle {
  display: flex;
  align-items: center;
  background: #F5F5F5;
  border-radius: 4px;
  padding: 2px;
  flex: 1;
}

.toggle-label {
  font-size: 0.85rem;
  color: #888;
  padding: 0 0.75rem;
}

.toggle-btn {
  flex: 1;
  border: none;
  background: transparent;
  padding: 0.5rem;
  font-size: 0.9rem;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s;
}

.toggle-btn.active {
  background: #34324E;
  color: white;
}

.submit-btn {
  background: #CE7A49;
  color: white;
  border: none;
  padding: 1.25rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 1rem;
  transition: background 0.3s;
}

.submit-btn:hover {
  background: #B56538;
}

/* Locations Info Styles */
.locations-info {
  flex: 1.2;
}

.locations-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.locations-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #34324E;
  margin: 0;
}

.locations-desc {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 3rem;
  text-align: left;
}

.branches-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem 2.5rem;
}

.branch-item {
  display: flex;
  gap: 1rem;
  align-items: stretch;
}

.accent-bar {
  width: 3px;
  background-color: #D1D1D1;
  flex-shrink: 0;
}

.accent-bar.primary {
  background-color: #CE7A49;
}

.branch-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  gap: 0.4rem;
}

.branch-name {
  font-weight: 700;
  color: #34324E;
  font-size: 1.1rem;
  line-height: 1.2;
}

.branch-address {
  color: #888;
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.4;
}

@media (max-width: 1024px) {
  .consultation-container {
    flex-direction: column;
    gap: 5rem;
  }
  .consultation-form-card {
    width: 100%;
    order: 1;
  }
  .locations-info {
    width: 100%;
    order: 2;
  }
}

@media (max-width: 768px) {
  .consultation-section {
    width: 100%;
    padding: 0 1.25rem 4rem;
    box-sizing: border-box;
  }
  .consultation-container {
    width: 100%;
    margin: 0;
    box-sizing: border-box;
  }
  .consultation-form-card {
    width: 100%;
    padding: 2rem 1.25rem;
    box-sizing: border-box;
  }
  .form-row {
    flex-direction: column;
    gap: 1.5rem;
  }
  .name-group, .gender-toggle, .input-group {
    width: 100%;
    flex: none;
  }
  .gender-toggle {
    justify-content: space-between;
    padding: 0.5rem;
  }
  .branches-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .form-title {
    font-size: 1.5rem;
  }
}

/* =====================
   Site Footer
   ===================== */
.site-footer {
  background-color: #34324E;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
  background-size: 50px 50px;
  font-family: 'Noto Serif TC', serif;
  color: #fff;
  text-align: left;
}

.footer-main {
  padding: 3.5rem 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  gap: 3rem;
}

/* Logo */
.footer-brand {
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
}

.footer-logo {
  height: 80px;
  width: auto;
  display: block;
}

/* Nav columns */
.footer-nav {
  display: flex;
  gap: 2.25rem;
  flex: 1;
  flex-wrap: wrap;
}

.footer-nav-col {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  min-width: 80px;
}

.footer-nav-title {
  color: rgba(255, 255, 255, 0.55);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  margin: 0 0 0.5rem 0;
  text-transform: uppercase;
}

.footer-nav-col ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-nav-col ul li a {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.875rem;
  text-decoration: none;
  transition: color 0.2s ease;
  white-space: nowrap;
}

.footer-nav-col ul li a:hover {
  color: #CE7A49;
}

/* Action Buttons */
.footer-actions {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex-shrink: 0;
}

.footer-cta-btn {
  display: inline-block;
  background-color: #CE7A49;
  color: #fff;
  text-decoration: none;
  padding: 0.55rem 1.4rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  text-align: center;
  transition: background 0.3s ease;
  white-space: nowrap;
}

.footer-cta-btn:hover {
  background-color: #b86a3a;
}

.footer-login-btn {
  display: inline-block;
  background-color: transparent;
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  padding: 0.55rem 1.4rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.4);
  text-align: center;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.footer-login-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.8);
}

/* Bottom Bar */
.footer-bottom {
  padding: 1.25rem 2rem;
}

.footer-bottom-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-bottom-left {
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}

/* On desktop, contact rows sit inline */
.footer-contact-row {
  display: contents;
}

.footer-contact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.75);
}

.footer-contact-icon {
  width: 16px;
  height: 16px;
  display: block;
  flex-shrink: 0;
  filter: brightness(0) invert(1);
  opacity: 0.75;
}

.footer-bottom-right {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.footer-social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.75);
  transition: color 0.3s ease, transform 0.3s ease;
}

.footer-social-icon:hover {
  color: #fff;
  transform: translateY(-2px);
}

/* Responsive Footer */
@media (max-width: 1024px) {
  .footer-inner {
    flex-wrap: wrap;
    gap: 2rem;
  }
  .footer-nav {
    gap: 1.5rem;
  }
  .footer-actions {
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
  }
}

@media (max-width: 768px) {
  .footer-main {
    padding: 2rem 1.25rem;
  }

  .footer-inner {
    flex-direction: column;
    gap: 1.75rem;
  }

  /* Logo stays top-left, normal size */
  .footer-logo {
    height: 64px;
  }

  /* Nav: 2-column grid */
  .footer-nav {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.75rem 2rem;
    width: 100%;
  }

  .footer-nav-col {
    min-width: unset;
  }

  .footer-nav-title {
    font-size: 0.78rem;
    color: rgba(255, 255, 255, 0.5);
    margin-bottom: 0.6rem;
  }

  .footer-nav-col ul li a {
    font-size: 0.875rem;
  }

  /* Buttons: side by side, full width */
  .footer-actions {
    flex-direction: row;
    width: 100%;
    gap: 0.75rem;
  }

  .footer-login-btn,
  .footer-cta-btn {
    flex: 1;
    text-align: center;
    padding: 0.65rem 1rem;
  }

  /* Bottom bar: stacked layout */
  .footer-bottom {
    padding: 1.25rem;
  }

  .footer-bottom-inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.85rem;
  }

  /* Left contacts: LINE + phone on one row, email on next row */
  .footer-bottom-left {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    width: 100%;
  }

  .footer-contact-row {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  /* Social icons aligned left */
  .footer-bottom-right {
    justify-content: flex-start;
    gap: 1.25rem;
  }
}

/* Copyright Bar */
.copyright-bar {
  background-color: #F5F5F5;
  padding: 1.2rem 2rem;
  text-align: center;
  font-family: 'Noto Serif TC', serif;
}

.copyright-inner {
  max-width: 1200px;
  margin: 0 auto;
}

.copyright-bar p {
  margin: 0;
  color: rgba(52, 50, 78, 0.6);
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  font-weight: 500;
}

@media (max-width: 768px) {
  .copyright-bar {
    padding: 1rem 1.25rem;
  }
}
</style>
