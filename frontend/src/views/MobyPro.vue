<template>
  <div class="mobypro-container">
    <Topbar />
    
    <div class="logo-section">
      <h1>Mob <span class="whale-logo">🐳</span> Pro</h1>
    </div>

    <div class="upgrade-section">
      <h2>Upgrade your account to MobyPro</h2>
      <div class="subscription-buttons">
        <button class="subscribe-btn">Subscribe 5$/month</button>
        <button class="subscribe-btn">Subscribe 49$/year</button>
      </div>

      <div class="contribute-section">
        <h3>Or contribute to unlock</h3>
        <button class="early-access-btn">Early Access</button>
      </div>
    </div>

    <div class="features-grid">
      <div class="feature-item">
        <h3>Download</h3>
      </div>
      <div class="feature-item">
        <h3>HD Covers</h3>
      </div>
      <div class="feature-item">
        <h3>API</h3>
      </div>
      <div class="feature-item">
        <h3>Analytics</h3>
      </div>
    </div>

    <div class="learn-more">
      <p>Learn more about Moby Pro</p>
      <span class="arrow-down">↓</span>
    </div>
  </div>
</template>

<script>
import Topbar from '../components/Topbar.vue'

export default {
  name: 'MobyPro',
  components: {
    Topbar
  }
}
</script>

<style scoped>
.mobypro-container {
  padding: 20px;
  text-align: center;
  width: 100%;
  min-height: 100vh;
}

.logo-section h1 {
  font-size: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.whale-logo {
  font-size: 60px;
}

/* 删除原来的 .logo 样式 */
.logo {
  width: 60px;
  height: 60px;
}

.upgrade-section {
  margin: 40px 0;
}

.subscription-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin: 20px 0;
}

.subscribe-btn {
  padding: 10px 20px;
  background-color: #ccc;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.early-access-btn {
  padding: 10px 20px;
  background-color: #ccc;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  max-width: 800px;
  margin: 40px auto;
}

.feature-item {
  background-color: #ddd;
  padding: 30px;
  border-radius: 5px;
}

.learn-more {
  margin: 40px 0;
  color: #666;
}

.arrow-down {
  display: block;
  font-size: 24px;
  margin-top: 10px;
}
</style>