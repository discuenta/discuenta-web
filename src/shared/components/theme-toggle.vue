<script setup>
import { ref, onMounted } from 'vue';

const isDark = ref(false);

const toggleTheme = () => {
  isDark.value = !isDark.value;
  updateTheme();
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
};

const updateTheme = () => {
  const html = document.documentElement;
  if (isDark.value) {
    html.classList.add('app-dark');
  } else {
    html.classList.remove('app-dark');
  }
};

onMounted(() => {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  isDark.value = savedTheme === 'dark' || (!savedTheme && prefersDark);
  updateTheme();
});
</script>

<template>
  <pv-button
    :title="isDark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'"
    :icon="isDark ? 'pi pi-sun' : 'pi pi-moon'"
    severity="secondary"
    text
    rounded
    @click="toggleTheme"
  />
</template>
