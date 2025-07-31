<!--suppress JSUnresolvedReference -->
<script setup>
import LanguageSwitcher from './language-switcher.vue';
import ThemeToggle from './theme-toggle.vue';
import Toolbar from './toolbar.vue';
import Sidebar from './sidebar.vue';
import { ref } from 'vue';

const sidebarRef = ref(null);

function toggleSidebar() {
  sidebarRef.value?.open();
}
</script>

<template>
  <div class="main-layout">
    <toolbar @toggle-sidebar="toggleSidebar" />
    <sidebar ref="sidebarRef" />
    <div class="content-wrapper">
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

<style scoped></style>
