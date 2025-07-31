<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import Menu from './menu.vue';

const isMobile = ref(false);
const visible = ref(false);
const expanded = ref(true);
let mediaQuery;

function open() {
  visible.value = true;
}

defineExpose({ open });
</script>

<template>
  <pv-drawer v-model:visible="visible" position="left" modal dismissable>
    <menu />
    <p>Hola</p>
  </pv-drawer>
</template>

<style scoped></style>
