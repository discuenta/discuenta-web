<script setup>
const emit = defineEmits(['toggle-sidebar']);
</script>

<template>
  <pv-toolbar class="pv-toolbar">
    <template #start>
      <pv-button @click="emit('toggle-sidebar')">=</pv-button>
      <p>Este es el dashboard</p>
    </template>

    <template #end>
      <div>
        <pv-avatar
          image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
          style="width: 32px; height: 32px"
        />
      </div>
    </template>
  </pv-toolbar>
</template>

<style scoped>
.pv-toolbar {
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease,
    color 0.3s ease;
}
</style>
