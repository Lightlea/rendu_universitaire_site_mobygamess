<template>
  <div class="flex justify-between items-center gap-4 text-sm mb-6 pr-4 bg-gray-500 text-white p-4 rounded-lg">
    <button class="bg-gray-600 px-4 py-1 rounded-full hover:bg-gray-700">Expert Mode</button>
    <div class="flex items-center gap-4">
      <div class="relative">
        <button @click="toggleLanguageMenu" class="bg-gray-500 px-4 py-1 rounded-full flex items-center gap-2">
          <span>{{ currentLanguage }}</span>
          <span class="transform transition-transform" :class="{ 'rotate-180': isLanguageMenuOpen }">▼</span>
        </button>
        <div v-if="isLanguageMenuOpen" class="absolute top-full mt-1 w-32 bg-white rounded-lg shadow-lg py-2 z-10">
          <button v-for="lang in languages" :key="lang" @click="selectLanguage(lang)" class="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
            {{ lang }}
          </button>
        </div>
      </div>
      <a href="#" class="hover:text-gray-300">Help</a>
      <a href="#" class="hover:text-gray-300">Messages</a>
      <div class="relative">
        <div class="flex items-center gap-2 cursor-pointer" @click="toggleUserMenu">
          <div class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">👤</div>
          <span class="text-gray-300">Username</span>
          <span class="transform transition-transform" :class="{ 'rotate-180': isUserMenuOpen }">▼</span>
        </div>
        <div v-if="isUserMenuOpen" class="absolute top-full right-0 mt-1 w-32 bg-white rounded-lg shadow-lg py-2 z-10">
          <button v-for="item in userMenuItems" :key="item" @click="selectUserMenuItem(item)" 
            class="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
            {{ item }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const currentLanguage = ref('English');
const isLanguageMenuOpen = ref(false);
const languages = ['English', '简体汉语', '한국어', 'Français', 'Português', 'Español', '日本語'];

const toggleLanguageMenu = () => {
  isLanguageMenuOpen.value = !isLanguageMenuOpen.value;
};

const selectLanguage = (lang) => {
  currentLanguage.value = lang;
  isLanguageMenuOpen.value = false;
};

const closeLanguageMenu = (event) => {
  const menu = document.querySelector('.relative');
  if (menu && !menu.contains(event.target)) {
    isLanguageMenuOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', closeLanguageMenu);
});

onUnmounted(() => {
  document.removeEventListener('click', closeLanguageMenu);
});

const isUserMenuOpen = ref(false);
const userMenuItems = ['Profile', 'Settings', 'Centre', 'Library'];

const toggleUserMenu = () => {
  isUserMenuOpen.value = !isUserMenuOpen.value;
};

const selectUserMenuItem = (item) => {
  // 处理菜单项点击
  isUserMenuOpen.value = false;
};

const closeMenus = (event) => {
  const languageMenu = document.querySelector('.relative');
  const userMenu = document.querySelectorAll('.relative')[1];
  if (languageMenu && !languageMenu.contains(event.target)) {
    isLanguageMenuOpen.value = false;
  }
  if (userMenu && !userMenu.contains(event.target)) {
    isUserMenuOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', closeMenus);
});

onUnmounted(() => {
  document.removeEventListener('click', closeMenus);
});
</script>
