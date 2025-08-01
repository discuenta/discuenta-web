<!--suppress JSUnresolvedReference -->
<script setup>
import LanguageSwitcher from './language-switcher.vue';
import ThemeToggle from './theme-toggle.vue';
import Toolbar from './toolbar.vue';
import Sidebar from './sidebar.vue';
import { ref, onMounted, onUnmounted } from 'vue';

const sidebarRef = ref(null);
const isMobile = ref(false);
const sidebarExpanded = ref(false);
let mediaQuery;

function checkMobile() {
  isMobile.value = window.innerWidth <= 768;
}

function toggleSidebar() {
  sidebarRef.value?.open();
  if (!isMobile.value) {
    sidebarExpanded.value = !sidebarExpanded.value;
  }
}

onMounted(() => {
  checkMobile();
  mediaQuery = window.matchMedia('(max-width: 768px)');
  mediaQuery.addEventListener('change', checkMobile);
});

onUnmounted(() => {
  if (mediaQuery) {
    mediaQuery.removeEventListener('change', checkMobile);
  }
});
</script>

<template>
  <div class="main-layout">
    <div
      :class="[
        'toolbar-wrapper',
        {
          'with-sidebar': !isMobile && sidebarExpanded,
        },
      ]"
    >
      <toolbar @toggle-sidebar="toggleSidebar" />
    </div>
    <sidebar ref="sidebarRef" />
    <div
      :class="[
        'content-wrapper',
        {
          'with-sidebar': !isMobile && sidebarExpanded,
        },
      ]"
    >
      <theme-toggle />
      <header>
        <h1>My Application</h1>
      </header>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/dashboard">Dashboard</router-link></li>
        </ul>
      </nav>
      <main>
        <language-switcher />
        <router-view />
      </main>
    </div>
  </div>
</template>

<style scoped>
.main-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.toolbar-wrapper {
  transition: margin-left 0.3s ease;
  margin-left: 0;
  position: relative;
  z-index: 50;
}

.content-wrapper {
  flex: 1;
  transition: margin-left 0.3s ease;
  margin-left: 0;
}

@media (min-width: 769px) {
  .toolbar-wrapper.with-sidebar,
  .content-wrapper.with-sidebar {
    margin-left: 250px;
  }
}

@media (max-width: 768px) {
  .toolbar-wrapper,
  .content-wrapper {
    margin-left: 0 !important;
  }
}
</style>
