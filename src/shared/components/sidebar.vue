<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Menu as PvMenu } from 'primevue';

const emit = defineEmits(['sidebar-changed']);
const isMobile = ref(false);
const visible = ref(false);
const expanded = ref(false);
let mediaQuery;

function checkMobile() {
  isMobile.value = window.innerWidth <= 768;
  if (!isMobile.value) {
    expanded.value = true;
    emit('sidebar-changed', { expanded: true, isMobile: false });
  } else {
    emit('sidebar-changed', { expanded: false, isMobile: true });
  }
}

function open() {
  if (isMobile.value) {
    visible.value = true;
  } else {
    expanded.value = !expanded.value;
    emit('sidebar-changed', { expanded: expanded.value, isMobile: false });
  }
}

function close() {
  visible.value = false;
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

defineExpose({ open, close });
</script>

<template>
  <pv-drawer
    v-if="isMobile"
    v-model:visible="visible"
    position="left"
    modal
    dismissable
    class="mobile-drawer"
  >
    <div class="menu-content">
      <p>Menú móvil</p>
    </div>
  </pv-drawer>

  <div v-else :class="['desktop-sidebar', { expanded: expanded }]">
    <div class="sidebar-content">
      <p>Menú escritorio</p>
      <pv-menu class="menu-content">
        <template #start>
          <div>Hola Menu</div>
        </template>
      </pv-menu>
    </div>
  </div>
</template>

<style scoped>
:deep(.p-menu) {
  border-color: var(--p-desktop-sidebar-border-color);
  transition: 0.3s ease;
}

.desktop-sidebar {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  background: var(--p-sidebar-background);
  border-right: 1px solid var(--p-sidebar-border-color);
  transition:
    transform 0.3s ease,
    background-color 0.3s ease,
    border-color 0.3s ease;
  width: 250px;
  overflow: hidden;
  z-index: 100;
  box-shadow: 1px 0 4px rgba(0, 0, 0, 0.1);
  transform: translateX(-100%);
}

.desktop-sidebar.expanded {
  transform: translateX(0);
}

.sidebar-content {
  padding: 1rem;
  height: 100%;
  overflow-y: auto;
}

.menu-content {
  padding: 1rem;
}

.mobile-drawer {
  z-index: 1000;
}
</style>
