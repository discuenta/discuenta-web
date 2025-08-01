<script setup>
import {useI18n} from "vue-i18n";
import {watch} from "vue";

const {locale, availableLocales} = useI18n();

watch(locale, (newLocale) => {
  localStorage.setItem('locale', newLocale)
})
</script>

<template>
  <pv-select-button
      v-model="locale"
      :options="availableLocales"
      :allow-empty="false"
  >
    <template #option="slotProps">
      {{ slotProps.option.toUpperCase() }}
    </template>
  </pv-select-button>
</template>

<style scoped>

</style>