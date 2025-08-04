<script setup>
import ThemeToggle from './theme-toggle.vue';
import LanguageSwitcher from './language-switcher.vue';

const emit = defineEmits(['toggle-sidebar']);
</script>

<template>
  <pv-toolbar class="custom-toolbar">
    <template #start>
      <div class="toolbar-start">
        <pv-button
          icon="pi pi-bars"
          severity="secondary"
          text
          rounded
          class="menu-button"
          aria-label="Abrir menú"
          @click="emit('toggle-sidebar')"
        />
        <div class="brand-section">
          <h3 class="page-title">Dashboard</h3>
        </div>
      </div>
    </template>

    <template #end>
      <div class="toolbar-end">
        <theme-toggle />
        <language-switcher />
        <div class="avatar-section">
          <pv-avatar
            image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
            class="user-avatar"
            size="normal"
          />
        </div>
      </div>
    </template>
  </pv-toolbar>
</template>

<style scoped>
.custom-toolbar {
  width: 100%;
  max-width: none;
  margin: 0;
  padding: 0 1rem;
  box-sizing: border-box;
  min-height: 4rem;
  border-bottom: 1px solid var(--surface-200);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: 0.3s ease;
}

:deep(.p-toolbar) {
  width: 100%;
  border-radius: 0;
  border-left: none;
  border-right: none;
  border-top: none;
  background: var(--surface-0);
  min-height: 4rem;
  align-items: center;
}

/* Sección izquierda */
.toolbar-start {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.menu-button {
  transition: all 0.2s ease;
  width: 2.5rem;
  height: 2.5rem;
}

.menu-button:hover {
  background-color: var(--surface-100);
  transform: scale(1.05);
}

.brand-section {
  display: flex;
  align-items: center;
}

.page-title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--p-text-color);
  letter-spacing: -0.025em;
}

/* Sección derecha */
.toolbar-end {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.avatar-section {
  margin-left: 0.5rem;
  padding-left: 0.75rem;
  border-left: 1px solid var(--surface-200);
}

.user-avatar {
  transition: all 0.2s ease;
  cursor: pointer;
  border: 2px solid transparent;
}

.user-avatar:hover {
  border-color: var(--p-primary-500);
  transform: scale(1.05);
}

/* Responsive design */
@media (max-width: 768px) {
  .custom-toolbar {
    padding: 0.75rem 1rem;
    min-height: 3.5rem;
  }

  :deep(.p-toolbar) {
    min-height: 3.5rem;
  }

  .page-title {
    font-size: 1.125rem;
  }

  .toolbar-end {
    gap: 0.5rem;
  }

  .avatar-section {
    margin-left: 0.25rem;
    padding-left: 0.5rem;
  }
}

@media (max-width: 480px) {
  .page-title {
    display: none;
  }

  .toolbar-end {
    gap: 0.25rem;
  }
}
</style>
