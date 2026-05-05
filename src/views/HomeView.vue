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
</template>

<script setup>
</script>

<style scoped>
.top-bar {
  background-color: #34324E;
  padding: 0.75rem 0;
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
}

.top-bar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
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

.phone-icon {
  height: 16px;
  width: 16px;
  display: block;
}

.line-icon {
  height: 16px;
  width: 16px;
  display: block;
}

.location-icon {
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
</style>
