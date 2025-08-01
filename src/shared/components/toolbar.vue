<script setup>
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
}
</style>
