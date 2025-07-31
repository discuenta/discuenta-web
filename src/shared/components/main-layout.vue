<script setup>
import LanguageSwitcher from './language-switcher.vue';
import ThemeToggle from './theme-toggle.vue';
</script>

<template>
  <div class="main-layout">
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
    </main>
  </div>
</template>

<style scoped></style>
