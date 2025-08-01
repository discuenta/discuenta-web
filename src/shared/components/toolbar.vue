<script setup>
import ThemeToggle from './theme-toggle.vue';
import LanguageSwitcher from './language-switcher.vue';

const emit = defineEmits(['toggle-sidebar']);
</script>

<template>
  <pv-toolbar class="custom-toolbar">
    <template #start>
      <pv-button @click="emit('toggle-sidebar')">=</pv-button>
      <p>Este es el dashboard</p>
    </template>

    <template #end>
      <div>
        <theme-toggle />
        <language-switcher />
        <pv-avatar
          image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
          style="width: 32px; height: 32px"
        />
      </div>
    </template>
  </pv-toolbar>
</template>

<style scoped>
.custom-toolbar {
  width: 100%;
  max-width: none;
  margin: 0;
  padding: 1rem 2rem;
  box-sizing: border-box;
  background: var(--surface-50);
  transition: 0.3s ease;
}
</style>
