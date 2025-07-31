<script>
import LanguageSwitcher from './language-switcher.vue';

export default {
  name: 'MainLayout',
  components: { LanguageSwitcher },
};
</script>

<template>
  <div class="main-layout">
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

<style scoped>

</style>